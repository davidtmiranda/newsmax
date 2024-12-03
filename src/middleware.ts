import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isBot } from "./utils/detectBots";

export async function middleware(request: NextRequest) {
  const isVisitorBot = await isBot(request);

  // Store the result in a header that we can read in the page
  const response = NextResponse.next();
  response.headers.set("x-is-bot", isVisitorBot.toString());

  return response;
}

export const config = {
  matcher: "/",
};
