import ClientLayout from "../components/ClientLayout";
import Comments from "../components/Comments";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { CtaProvider } from "../contexts/CtaContext";
import { AdvertorialContent } from "../types/advertorial";

const content: AdvertorialContent = {
  meta: {
    date: "Atualizado em 8 de janeiro às 09:45h",
    author: "Dr. Carlos Silva",
    category: "Saúde e Bem-estar",
  },
  ctaUrl: "https://exemplo.com.br/comprar?ref=artigo",
  settings: {
    theme: "light",
    layout: "default",
    spacing: "normal",
  },
  sections: [
    {
      type: "header",
      headline: "Descoberta Revolucionária no Tratamento de Articulações",
      subheadline: "Nova fórmula natural promete alívio em 7 dias",
      order: 1,
    },
    {
      type: "group",
      title: "Benefícios e Resultados",
      layout: "columns",
      sections: [
        {
          type: "benefits",
          items: [
            { text: "Alívio das dores em até 7 dias", icon: "star" },
            { text: "100% natural e sem contraindicações", icon: "check" },
          ],
        },
        {
          type: "quote",
          text: "Em 30 anos de carreira, nunca vi resultados tão impressionantes",
          author: "Dr. Roberto Mendes",
          image: "/images/dr-roberto.jpg",
          highlight: true,
        },
      ],
    },
    {
      type: "paragraph",
      text: "Uma descoberta surpreendente está transformando a vida de milhares de brasileiros que sofrem com dores nas articulações...",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Uma descoberta surpreendente está transformando a vida de milhares de brasileiros que sofrem com dores nas articulações...",
      style: "quote",
    },
    {
      type: "image",
      src: "/images/raul.png",
      alt: "Demonstração do tratamento",
      caption: "Novo método tem eficácia comprovada por estudos clínicos",
      position: "center",
    },
    {
      type: "quote",
      text: "Em 30 anos de carreira, nunca vi resultados tão impressionantes em tão pouco tempo",
      author: "Dr. Roberto Mendes",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "benefits",
      items: [
        { text: "Alívio das dores em até 7 dias", icon: "star" },
        { text: "100% natural e sem contraindicações", icon: "check" },
        { text: "Aprovado pela ANVISA", icon: "check" },
        { text: "Resultados comprovados", icon: "star" },
      ],
    },
    {
      type: "testimonialBlock",
      title: "Histórias reais de transformação",
      testimonials: [
        {
          quote:
            "Depois de 5 anos sofrendo com dores, finalmente encontrei uma solução.",
          author: "Maria Santos",
          image: "/images/testimonial1.jpg",
          rating: 5,
        },
        {
          quote: "Voltei a praticar esportes graças a este tratamento.",
          author: "João Paulo",
          image: "/images/testimonial2.jpg",
          rating: 5,
        },
      ],
    },
    {
      type: "cta",
      text: "QUERO EXPERIMENTAR AGORA",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
  ],
  sidebar: {
    position: "right",
    width: "narrow",
    sections: [
      {
        type: "infoBox",
        title: "Benefícios Comprovados",
        items: [
          "✓ Alívio imediato das dores",
          "✓ Regeneração natural",
          "✓ Sem efeitos colaterais",
          "✓ Resultados duradouros",
        ],
      },
      {
        type: "productHighlight",
        image: "/images/product-box.jpg",
        price: "R$ 197,00",
        discount: "R$ 97,00",
        cta: "COMPRAR COM DESCONTO",
      },
    ],
  },
  comments: {
    enabled: true,
    title: "O que nossos clientes dizem",
    list: [
      {
        author: "Ana Oliveira",
        avatar: "/images/avatar-ana.jpg",
        date: "2 dias atrás",
        content:
          "Comecei a usar há 2 semanas e já sinto uma diferença incrível nas minhas articulações!",
        likes: 48,
        replies: [
          {
            author: "Dr. Carlos Silva",
            date: "1 dia atrás",
            content:
              "Fico muito feliz em saber, Ana! Continue o tratamento conforme recomendado.",
          },
        ],
      },
      {
        author: "Paulo Mendes",
        avatar: "/images/avatar-paulo.jpg",
        date: "3 dias atrás",
        content:
          "Excelente produto! Recomendo a todos que sofrem com dores nas articulações.",
        likes: 35,
      },
    ],
    allowNewComments: false,
  },
};

export default function Home() {
  return (
    <CtaProvider ctaUrl={content.ctaUrl}>
      <ClientLayout>
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <MainContent content={content} />
            </div>
            <Sidebar
              sections={content.sidebar?.sections}
              position={content.sidebar?.position}
              width={content.sidebar?.width}
            />
          </div>
          <Comments comments={content.comments} />
        </main>
      </ClientLayout>
    </CtaProvider>
  );
}
