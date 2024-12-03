// Importando os componentes necessários para construir a página
// Pense nestes imports como peças de LEGO que vamos usar para montar nossa página
import ClientLayout from "../components/ClientLayout"; // Layout base da página
import Comments from "../components/Comments"; // Seção de comentários
import Header from "../components/Header"; // Cabeçalho da página
import MainContent from "../components/MainContent"; // Conteúdo principal
import Sidebar from "../components/Sidebar"; // Barra lateral
import { CtaProvider } from "../contexts/CtaContext"; // Gerenciador dos botões de ação
import { AdvertorialContent } from "../types/advertorial"; // Define a estrutura do conteúdo

// Aqui começamos a definir todo o conteúdo da página
// Este é o local onde você vai fazer a maioria das suas edições
const content: AdvertorialContent = {
  // Informações básicas sobre o artigo
  meta: {
    date: "Atualizado em 8 de janeiro às 09:45h", // Data de atualização
    author: "Dr. Carlos Silva", // Nome do autor
    category: "Saúde e Bem-estar", // Categoria do artigo
  },

  // Link para onde o botão de compra vai direcionar
  ctaUrl: "https://exemplo.com.br/comprar?ref=artigo",

  // Configurações de aparência da página
  settings: {
    theme: "light", // Tema claro
    layout: "default", // Layout padrão
    spacing: "normal", // Espaçamento normal
  },

  // Lista de todas as seções do conteúdo principal
  // Cada seção é um bloco diferente de conteúdo
  sections: [
    // Seção do cabeçalho principal
    {
      type: "header",
      headline: "Descoberta",
      subheadline: "Nova fórm",
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
            { text: "Alívio ds", icon: "star" },
            { text: "100% natur=cações", icon: "check" },
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
    enabled: true, // Ativa a seção de comentários
    title: "O que nossos clientes dizem", // Título da seção
    list: [
      {
        author: "Ana Oliveira", // Nome do autor do comentário
        avatar: "/images/avatar-ana.jpg", // Foto do autor
        date: "2 dias atrás", // Data do comentário
        content:
          "Comecei a usar há 2 semanas e já sinto uma diferença incrível nas minhas articulações!",
        likes: 48, // Número de curtidas
        replies: [
          // Respostas ao comentário
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
    allowNewComments: false, // Desativa a criação de novos comentários
  },
};

// Esta é a função principal que monta toda a página
// Você não precisa mexer aqui a menos que queira mudar a estrutura da página
export default function Home() {
  return (
    // CtaProvider gerencia os botões de ação da página
    <CtaProvider ctaUrl={content.ctaUrl}>
      {/* ClientLayout é o container principal da página */}
      <ClientLayout>
        {/* Cabeçalho do site */}
        <Header />

        {/* Conteúdo principal da página */}
        <main className="max-w-5xl mx-auto px-6 py-8">
          {/* Grid que organiza o conteúdo em colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Coluna do conteúdo principal */}
            <div className="lg:col-span-2">
              <MainContent content={content} />
            </div>

            {/* Coluna da barra lateral */}
            <Sidebar
              sections={content.sidebar?.sections}
              position={content.sidebar?.position}
              width={content.sidebar?.width}
            />
          </div>

          {/* Seção de comentários */}
          <Comments comments={content.comments} />
        </main>
      </ClientLayout>
    </CtaProvider>
  );
}
