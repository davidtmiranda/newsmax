import { LookupAddress } from "dns";
import { lookup } from "dns/promises";
import { TLSSocket } from "tls";

// Cache com TTL
interface CacheEntry {
  value: boolean;
  timestamp: number;
}

const CACHE_TTL = 1800000; // 30 minutos em millisegundos
const botResultsCache = new Map<string, CacheEntry>();

// Padrões de bots expandidos
const BOT_PATTERNS = new Map([
  [
    "facebook",
    /(?:facebookexternalhit|facebookcatalog|facebook[-_]?bot|FB(?:AN|_IAB)|FBAV|facebook\.com|instagram\.com|whatsapp\.com|oculus|facebookplatform|x-fb-http|fb_iab|fbios|fbcdn|fburl|fbsafebrowsing)/i,
  ],
  [
    "google",
    /(?:googlebot|google-structured-data|adsbot-google|mediapartners-google)/i,
  ],
  ["bing", /(?:bingbot|msnbot|adidxbot)/i],
  ["yandex", /(?:yandexbot|yandex\.com\/bots)/i],
  ["baidu", /(?:baiduspider|baidu\.com\/search)/i],
  [
    "social",
    /(?:twitterbot|linkedinbot|pinterest|slackbot|telegrambot|whatsapp)/i,
  ],
  [
    "monitor",
    /(?:pingdom|pagespeed|gtmetrix|lighthouse|developers\.google\.com)/i,
  ],
  [
    "generic",
    /(?:bot|crawler|spider|scraper|headless|phantom|selenium|chrome-lighthouse)/i,
  ],
  [
    "automation",
    /(?:puppeteer|playwright|cypress|webdriver|cypress|nightwatch)/i,
  ],
  ["cloud", /(?:amazonaws|googlecloud|azure|digitalocean)/i],
  ["security", /(?:nessus|qualys|acunetix|burpsuite|nmap)/i],
  ["browser", /(?:headlesschrome|phantomjs|electronbot)/i],
]);

// IPs conhecidos de bots (exemplo parcial)
const BOT_IP_RANGES = new Set([
  "66.220.144.0/20", // Facebook
  "69.63.176.0/20", // Facebook
  "66.249.64.0/19", // Google
  "207.46.0.0/16", // Bing
  "40.74.0.0/15", // Bing
]);

// Add Facebook IP ranges
const FACEBOOK_IP_RANGES = new Set([
  "66.220.144.0/20",
  "69.63.176.0/20",
  "69.171.224.0/19",
  "74.119.76.0/22",
  "103.4.96.0/22",
  "173.252.64.0/18",
  "204.15.20.0/22",
  "31.13.24.0/21",
  "31.13.64.0/18",
  "157.240.0.0/16",
]);

// Headers modernos para detecção
const SUSPICIOUS_HEADERS = new Set([
  "headless-chrome",
  "phantomjs",
  "selenium",
  "webdriver",
  "puppet",
  "chrome-lighthouse",
  "cloudflare-worker",
  "aws-waf",
  "x-playwright",
  "x-cypress",
]);

// Rate limiting
const requestCounts = new Map<
  string,
  { count: number; firstRequest: number }
>();
const RATE_LIMIT = { maxRequests: 100, timeWindow: 60000 }; // 100 requests por minuto

// Fingerprinting scores
const fingerprintScores = new Map<string, number>();

// Configurações de ML
const ML_THRESHOLD = 0.85;
const REPUTATION_THRESHOLD = -5;

// Sistema de reputação
interface IpReputation {
  score: number;
  lastUpdate: number;
  incidents: number;
}

const ipReputationCache = new Map<string, IpReputation>();

// Timing patterns
interface TimingMetrics {
  requestGaps: number[];
  lastRequest: number;
}

const requestTimings = new Map<string, TimingMetrics>();

// Browser capabilities
const REQUIRED_CAPABILITIES = new Set([
  "Promise",
  "localStorage",
  "addEventListener",
  "querySelector",
]);

export async function isBot(req: any): Promise<boolean> {
  try {
    const userAgent = req.headers["user-agent"] || "";
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const cacheKey = `${userAgent}:${ip}`;

    // Add Facebook check early in the process
    if (await isFacebookBot(req)) {
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      const cacheKey = `fb:${ip}`;
      setCacheResult(cacheKey, true);
      return true;
    }

    // Verificar cache com TTL
    const cached = botResultsCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.value;
    }

    // Rate limiting check
    if (isRateLimited(ip)) {
      setCacheResult(cacheKey, true);
      return true;
    }

    // Verificação básica de headers e IPs
    if (await basicChecks(req)) {
      setCacheResult(cacheKey, true);
      return true;
    }

    // Fingerprinting avançado
    const fingerprintScore = await calculateFingerprintScore(req);
    if (fingerprintScore > 0.7) {
      setCacheResult(cacheKey, true);
      return true;
    }

    // DNS reverso para IPs suspeitos
    if (await isDnsSuspicious(ip)) {
      setCacheResult(cacheKey, true);
      return true;
    }

    // Verificar reputação do IP
    if (await hasBadReputation(ip)) {
      await updateIpReputation(ip, -1);
      setCacheResult(cacheKey, true);
      return true;
    }

    // Análise de timing
    if (await hasAnomalousTimingPattern(ip)) {
      await updateIpReputation(ip, -2);
      setCacheResult(cacheKey, true);
      return true;
    }

    // Verificação de certificado TLS
    if (await hasSuspiciousTLS(req)) {
      await updateIpReputation(ip, -1);
      setCacheResult(cacheKey, true);
      return true;
    }

    // Browser capabilities check
    if (await lacksRequiredCapabilities(req)) {
      await updateIpReputation(ip, -1);
      setCacheResult(cacheKey, true);
      return true;
    }

    // ML-based detection
    if (await mlPredictBot(req)) {
      await updateIpReputation(ip, -3);
      setCacheResult(cacheKey, true);
      return true;
    }

    // Behavioral analysis
    const isSuspiciousBehavior = await enhancedBehaviorCheck(req);

    setCacheResult(cacheKey, isSuspiciousBehavior);
    return isSuspiciousBehavior;
  } catch (error) {
    console.error("Error in enhanced bot detection:", error);
    return false;
  }
}

function setCacheResult(key: string, value: boolean) {
  botResultsCache.set(key, {
    value,
    timestamp: Date.now(),
  });
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip) || { count: 0, firstRequest: now };

  if (now - record.firstRequest > RATE_LIMIT.timeWindow) {
    requestCounts.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  record.count++;
  requestCounts.set(ip, record);
  return record.count > RATE_LIMIT.maxRequests;
}

async function basicChecks(req: any): Promise<boolean> {
  const headers = Object.keys(req.headers).map((h) => h.toLowerCase());

  // Header consistency check
  const hasInconsistentHeaders =
    !req.headers["accept"] ||
    !req.headers["accept-language"] ||
    !req.headers["accept-encoding"];

  // Screen and window properties check (if available)
  const clientHints = req.headers["sec-ch-ua"];
  const hasInvalidDimensions =
    req.headers["sec-ch-viewport-width"] === "0" ||
    req.headers["sec-ch-viewport-height"] === "0";

  return hasInconsistentHeaders || hasInvalidDimensions;
}

async function calculateFingerprintScore(req: any): Promise<number> {
  let score = 0;

  // Verificar consistência de headers
  if (!req.headers["accept-language"]) score += 0.2;
  if (!req.headers["accept-encoding"]) score += 0.2;

  // Verificar User-Agent consistency
  const ua = req.headers["user-agent"] || "";
  if (ua.includes("Chrome") && !req.headers["sec-ch-ua"]) score += 0.3;

  // Verificar TLS fingerprint (se disponível)
  const tlsFingerprint = req.headers["ssl_cipher"] || "";
  if (tlsFingerprint && isSuspiciousTlsFingerprint(tlsFingerprint))
    score += 0.3;

  return score;
}

function isSuspiciousTlsFingerprint(fingerprint: string): boolean {
  const suspiciousPatterns = [
    /^ssl3/i,
    /^tls1$/i,
    /null/i,
    /anon/i,
    /RC4/i,
    /MD5/i,
  ];
  return suspiciousPatterns.some((pattern) => pattern.test(fingerprint));
}

async function isDnsSuspicious(ip: string): Promise<boolean> {
  try {
    const result: string | LookupAddress = await lookup(ip);
    const hostname = Array.isArray(result) ? result[0].address : result;
    const suspiciousTerms = ["cloud", "aws", "azure", "hosting", "proxy"];
    return suspiciousTerms.some((term) =>
      hostname.toLowerCase().includes(term)
    );
  } catch {
    return false;
  }
}

async function enhancedBehaviorCheck(req: any): Promise<boolean> {
  // Análise comportamental avançada
  const suspicious = [
    !req.headers.cookie,
    !req.headers.referer,
    req.headers["accept"] === "*/*",
    req.method === "HEAD",
    req.headers["connection"] === "close",
  ];

  return suspicious.filter(Boolean).length >= 3;
}

export function getBotType(userAgent: string = ""): string {
  if (!userAgent) return "unknown";

  for (const [type, pattern] of BOT_PATTERNS.entries()) {
    if (pattern.test(userAgent)) {
      return type;
    }
  }

  return "unknown";
}

function isIpInBotRanges(ip: string): boolean {
  // Implementação simplificada - você pode usar uma biblioteca como 'ip-range-check'
  return Array.from(BOT_IP_RANGES).some((range) => {
    const [networkIp, bits] = range.split("/");
    return isIpInRange(ip, networkIp, parseInt(bits));
  });
}

function checkSuspiciousBehavior(req: any): boolean {
  // Verifica características suspeitas como:
  // - Ausência de cookies
  // - Headers incompletos
  // - Comportamento não-humano
  const noCookies = !req.headers.cookie;
  const noAcceptLanguage = !req.headers["accept-language"];
  const suspiciousAccept = req.headers.accept === "*/*";

  return noCookies && noAcceptLanguage && suspiciousAccept;
}

function isIpInRange(ip: string, networkIp: string, bits: number): boolean {
  // Implementação básica de verificação de IP range
  // Para uso em produção, considere usar uma biblioteca especializada
  const ipNum = ipToNumber(ip);
  const networkNum = ipToNumber(networkIp);
  const mask = -1 << (32 - bits);
  return (ipNum & mask) === (networkNum & mask);
}

function ipToNumber(ip: string): number {
  return (
    ip.split(".").reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0
  );
}

// Fix typo in function name
async function hasBadReputation(ip: string): Promise<boolean> {
  const reputation = ipReputationCache.get(ip);
  if (!reputation) return false;

  // Limpa reputações antigas
  if (Date.now() - reputation.lastUpdate > 24 * 60 * 60 * 1000) {
    ipReputationCache.delete(ip);
    return false;
  }

  return reputation.score < REPUTATION_THRESHOLD;
}

async function updateIpReputation(ip: string, delta: number): Promise<void> {
  const current = ipReputationCache.get(ip) || {
    score: 0,
    lastUpdate: Date.now(),
    incidents: 0,
  };

  current.score += delta;
  current.lastUpdate = Date.now();
  if (delta < 0) current.incidents++;

  ipReputationCache.set(ip, current);
}

async function hasAnomalousTimingPattern(ip: string): Promise<boolean> {
  const timing = requestTimings.get(ip) || {
    requestGaps: [],
    lastRequest: Date.now(),
  };

  const now = Date.now();
  const gap = now - timing.lastRequest;
  timing.requestGaps.push(gap);

  if (timing.requestGaps.length > 10) {
    timing.requestGaps.shift();
  }

  // Detecta padrões muito regulares (bot-like)
  if (timing.requestGaps.length >= 5) {
    const variance = calculateVariance(timing.requestGaps);
    if (variance < 100) {
      // Muito regular para ser humano
      return true;
    }
  }

  timing.lastRequest = now;
  requestTimings.set(ip, timing);
  return false;
}

async function hasSuspiciousTLS(req: any): Promise<boolean> {
  const socket = req.socket as TLSSocket;
  if (!socket?.encrypted) return true;

  const cipher = socket.getCipher();
  const cert = socket.getPeerCertificate();

  // Check TLS certificate properties safely
  return (
    !cert ||
    cert.valid_from === undefined ||
    cipher.name.includes("RC4") ||
    cipher.name.includes("MD5")
  );
}

async function lacksRequiredCapabilities(req: any): Promise<boolean> {
  const clientHints = req.headers["sec-ch-ua-platform"];
  const features = req.headers["x-browser-features"]; // Header customizado

  if (!clientHints || !features) return true;

  try {
    const parsedFeatures = JSON.parse(features);
    return Array.from(REQUIRED_CAPABILITIES).some(
      (cap) => !parsedFeatures[cap]
    );
  } catch {
    return true;
  }
}

async function mlPredictBot(req: any): Promise<boolean> {
  // Feature extraction
  const features = extractFeatures(req);

  // Simplified ML scoring (pode ser substituído por um modelo real)
  const score = await calculateMlScore(features);

  return score > ML_THRESHOLD;
}

function extractFeatures(req: any): Record<string, number> {
  return {
    headerCount: Object.keys(req.headers).length,
    headerConsistency: calculateHeaderConsistency(req.headers),
    timingRegularity: calculateTimingRegularity(req),
    // Add more features as needed
  };
}

// Funções auxiliares

function calculateVariance(numbers: number[]): number {
  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return (
    numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / numbers.length
  );
}

function calculateHeaderConsistency(headers: any): number {
  let score = 1;
  const requiredHeaders = [
    "accept",
    "accept-language",
    "accept-encoding",
    "user-agent",
  ];

  for (const header of requiredHeaders) {
    if (!headers[header]) score -= 0.25;
  }

  return Math.max(0, score);
}

function calculateTimingRegularity(req: any): number {
  const timing = requestTimings.get(req.ip);
  if (!timing || timing.requestGaps.length < 5) return 0;

  const variance = calculateVariance(timing.requestGaps);
  return variance < 100 ? 1 : 0;
}

async function calculateMlScore(
  features: Record<string, number>
): Promise<number> {
  // Implementar lógica de scoring baseada em ML
  // Pode ser expandido para usar um modelo real de ML
  return (
    Object.values(features).reduce((a, b) => a + b, 0) /
    Object.keys(features).length
  );
}

// Add new Facebook detection methods
async function isFacebookBot(req: any): Promise<boolean> {
  const userAgent = req.headers["user-agent"] || "";
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Check multiple conditions
  return (
    isFacebookUserAgent(userAgent) ||
    isFacebookIp(ip) ||
    hasFacebookHeaders(req.headers) ||
    (await verifyFacebookDns(ip))
  );
}

function isFacebookUserAgent(userAgent: string): boolean {
  return BOT_PATTERNS.get("facebook")!.test(userAgent);
}

function isFacebookIp(ip: string): boolean {
  return Array.from(FACEBOOK_IP_RANGES).some((range) => {
    const [networkIp, bits] = range.split("/");
    return isIpInRange(ip, networkIp, parseInt(bits));
  });
}

function hasFacebookHeaders(headers: any): boolean {
  const fbHeaders = [
    "x-fb-http-engine",
    "x-fb-request-id",
    "x-fb-trace-id",
    "x-fb-rev",
    "x-fb-debug",
  ];

  return fbHeaders.some((header) => headers[header.toLowerCase()]);
}

async function verifyFacebookDns(ip: string): Promise<boolean> {
  try {
    const hostname = await lookup(ip);
    const fbDomains = [
      "facebook.com",
      "fbcdn.net",
      "tfbnw.net",
      "instagram.com",
      "whatsapp.com",
    ];

    return fbDomains.some((domain) =>
      hostname.toString().toLowerCase().includes(domain)
    );
  } catch {
    return false;
  }
}

export default {
  isBot,
  getBotType,
};
