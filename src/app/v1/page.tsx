// Importando os componentes necessários para construir a página
// Pense nestes imports como peças de LEGO que vamos usar para montar nossa página
import ClientLayout from "../../components/ClientLayout"; // Layout base da página
import Comments from "../../components/Comments"; // Seção de comentários
import Header from "../../components/Header"; // Cabeçalho da página
import MainContent from "../../components/MainContent"; // Conteúdo principal
import Sidebar from "../../components/Sidebar"; // Barra lateral
import { CtaProvider } from "../../contexts/CtaContext"; // Gerenciador dos botões de ação
import { AdvertorialContent } from "../../types/advertorial"; // Define a estrutura do conteúdo


// Aqui começamos a definir todo o conteúdo da página
// Este é o local onde você vai fazer a maioria das suas edições
const content: AdvertorialContent = {
  // Informações básicas sobre o artigo
  meta: {
    date: "Por Bernado Galvão – Atualizado em 6 de fevereiro 15:11h", // Data de atualização
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
      type: "quote",
      text: "Ao eliminar as minhas dores, eu recuperei a minha vontade de viver!",
      author: "Raul Gil",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Apresentador do SBT é destaque em todo o Brasil, após revelar a fórmula que curou suas dores nos nervos.",
      subheadline: "Raul Gil conta que não conseguia dormir por causa de dores, fincadas e choques insuportáveis nas pernas, pés e mãos, mas através de especialistas ele descobriu a **nova fórmula que está ajudando milhares de pessoas a eliminar as dores do nervo ciático, neuropatias e fibromialgia,** sem exercícios e até eliminando a necessidade de tomar medicamentos.",
      order: 1,
    },
    {
      type: "image",
      src: "/images/raul.png",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "paragraph",
      text: "Antes de achar o tratamento que mudou sua vida, Raul Gil não aguentava mais as dores que nunca paravam e pareciam choques elétricos e espetadas nas pernas, pés, mãos e muitas vezes nas costas. ",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**A dor neuropática, causada no nervo ciático ou pela neuropatia diabética/periférica, é um tormento que atinge milhões de brasileiros que se sentem isolados e sofrem silenciosamente, já que a doença acaba com a saúde física, o bem estar, e muitas vezes até com a alegria de viver.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Muitas vezes, incompreendidos pelos médicos, pacientes com dores neuropáticas são receitados com remédios para dor convencionais, que não funcionam.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Muitos até mesmo acham que são dores nas articulações, mas estão enganados!**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Os tratamentos para dores nos nervos muitas vezes se baseiam no uso de medicamentos como gabapentina, pregabalina, antidepressivos e anticonvulsivantes, que oferecem apenas alívio temporário, e vêm com uma lista gigante de efeitos colaterais, como sonolência, tontura e até dependência.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Consciente de estos desafíos, Raul estaba determinado a encontrar una solución definitiva y sostenible para eliminar sus dolores.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Num episódio grave, o amado apresentador enfrentou um momento de crise intensa, onde as dores no corpo todo se tornaram tão fortes e insuportáveis que ele teve de ir ao hospital para tomar morfina.",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/utibr.png",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "paragraph",
      text: "Ao ser levado às pressas para o hospital, os médicos constataram que **seu quadro era crítico e que um procedimento de emergência seria necessário, devido a descoberta de que seus nervos estavam completamente inflamados e comprimidos**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Era como se cada nervo do seu corpo estivesse gritando por ajuda. Raul estava num ponto em que a dor era tão forte que até remédios fortíssimos, como a morfina, pareciam não fazer efeito.**",
      style: "normal",
    },
    {
      type: "quote",
      text: "Eu prefiro morrer do que continuar sentindo essa dor. - Ele ficava gritando.",
      author: "Relata Carmen, a esposa de Raul Gil",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Raul Gil, então, foi submetido a cirurgia nos nervos periféricos e no ciático. Esse procedimento tinha como objetivo desinflamar temporariamente e aliviar a pressão sobre os nervos afetados. Aliviando as dores por um tempo.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "No hospital seus familiares oravam por sua vida…",
      style: "normal",
    },
    {
      type: "header",
      headline: "Raul Gil então chama o Doutor Lair Ribeiro, para ajudar a encontrar a solução para o seu problema:",
      // subheadline: "",
      order: 1,
    },
    {
      type: "image",
      src: "/images/Lair01.jpg",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Os remédios para dores nos nervos não resolvem o que causa a dor, só alivia ela, esse é o problema!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Muitos pacientes ficam comprando remédio para dor achando que é dor na articulação, quando o real problema são os nervos!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "A verdade é que os seus nervos estão inflamados, comprimidos e danificados, e a condição só piora se você tem hérnia de disco, neuropatia diabética ou sofreu alguma lesão.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Ele então destaca o quão ineficientes são os remédios usados hoje, e que exercícios e fisioterapia só ajudam a parar a dor na hora, mas também não resolvem o problema.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Mas, ao final, destaca a solução para o problema das dores nos nervos.**",
      style: "normal",
    },
    {
      type: "quote",
      text: "Mas existe solução!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "No fórum de medicina na Suíça, que estive presente, foi apresentado a nova descoberta de uma substância que faz os nervos se recuperarem naturalmente",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Ela é capaz de agir na causa raiz do problema e eliminar a inflamação, compressão, regenerar totalmente os seus nervos e deixar eles até 5x mais resistentes à dor.",
      author: "Dr. Lair Ribeiro",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "De tudo que existe hoje, eu acredito que só essa fórmula será capaz de trazer alívio para suas dores de forma permanente, porque ela age na causa raiz do problema.",
      author: "Dr. Lair Ribeiro",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Enquanto muitos sofrem, outros não se dão por satisfeito com essa situação… ",
      order: 1,
    },
    {
      type: "paragraph",
      text: "**Depois de sofrer por tanto tempo, Raul Gil decidiu buscar alternativas que realmente trouxessem soluções eficazes para suas dores nos nervos.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Ele relatou que as pessoas não compreendiam o tamanho do seu sofrimento, não conseguia fazer as coisas simples do dia a dia e ficava frustrado, triste e ansioso com as dezenas de tratamentos que não funcionavam.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Disse que os tratamentos disponíveis no mercado brasileiro são complicados e cheios de efeitos negativos para o corpo.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Então Raul começou a executar alguns tratamentos americanos recomendados e quanto mais ele procurava por **tratamentos alternativos**, mais ela conhecia sobre novas técnicas ainda pouco faladas. ",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Foi ao discutir com o Dr. Lair Ribeiro**, que Raul Gil descobriu que outros **portadores da doença** estavam tendo benefícios surpreendentes com o novo tratamento que ainda não estava disponível no Brasil.",
      style: "normal",
    },
    {
      type: "header",
      headline: "“Eu encontrei a esperança que estava procurando...",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Descobrindo esse **novo tratamento baseado nas descobertas do Dr. Lair Ribeiro** e desenvolvido por pesquisadores Americanos e Europeus, foi demonstrado que o composto tinha o poder extraordinário de regenerar nervos danificados de maneira totalmente natural e sem efeitos colaterais adversos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Após relatos de mais de 42 mil pessoas, a nova fórmula mostrou-se capaz de recuperar a funcionalidade do sistema nervoso de maneira integral.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Isso significava não apenas o alívio das dores insuportáveis mas também a libertação dos remédios e a superação do problema, permitindo que as pessoas voltassem a realizar atividades cotidianas sem as limitações impostas pela dor.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Esse tratamento inovador e muito mais acessível gerou uma nova esperança para população brasileira e em todo o mundo!**",
      style: "normal",
    },
    {
      type: "header",
      headline: "Mas será que a fórmula é tudo isso? Confira você mesmo",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Pois bem, após ser anunciada, a fórmula repercutiu imediatamente em todo o Estados Unidos, Europa e também no Brasil, milhões de pessoas estavam desesperadas para ter acesso ao tratamento, inclusive o Raul, que contou sobre a sua experiência com o produto:",
      style: "quote",
    },
    {
      type: "image",
      src: "/images/raul2.jpg",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Sendo 100% sincero, eu estava desesperado, e encontrei alívio no meu corpo logo no primeiro uso",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Aquelas dores na coxa esquerda que parecia um choque começou a diminuir.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Minha perna dava umas fincadas e ficava pesada, sentia uma queimação horrível nos tornozelos, mas com poucos dias ela já estavam muito melhores",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Aí depois o que parou foi a sensação de queimação nas palmas de mão, em baixo dos pés próximo dos dedos e na língua, sinceramente eu chorei de alegria pois aquilo foi um alívio pra minha alma.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "É uma sensação indescritível poder acordar e não ter medo de sentir dor. Meu médico disse que nunca tinha visto uma recuperação assim.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Agora consigo dormir bem e posso fazer coisas simples que a dor me impedia antes, como caminhar no parque, brincar com meus netos. Me sinto livre, independente e recuperei minha felicidade, EU VENCI ESSA BATALHA!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Entenda os recursos que não funcionam e seus perigos",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "**A maioria das pessoas e médicos acreditava que a única forma de controlar as dores nos nervos seria através de medicamentos fortes, exercícios variados e cirurgias caras.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Todas essas alternativas prometem muito, mas muitas vezes falham em tratar a causa raiz do problema, trazendo efeitos colaterais, altos custos, e em alguns casos, riscos maiores do que a própria condição original.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Contudo, a virada de jogo veio com a descoberta compartilhada por Dr. Lair Ribeiro, um avanço liderado por uma equipe de pesquisadores que finalmente conseguiu desenvolver uma fórmula capaz de atacar diretamente a inflamação, compressão e danos aos nervos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Após anos de estudos e testes, esta fórmula mostrou-se não apenas eficaz, mas também 100% segura para uso contínuo, sem os temidos efeitos colaterais associados aos métodos tradicionais.",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/doctors.jpg",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Depois de mais de uma década de pesquisa e colaboração internacional, encontramos uma composição única que rejuvenesce os nervos danificados, alivia a inflamação e descompressão, de forma natural e sustentável",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Essa foi uma vitória não apenas para o Raul Gil, mas para todos que sofrem isolados e em silêncio com dores neuropáticas.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "O **sucesso desta fórmula testada e comprovada** combina os melhores ativos e **consegue trazer alívio quase que imediato para o seu organismo.**",
      style: "normal",
    },
    // {
    //   type: "benefits",
    //   items: [
    //     { text: "Alívio das dores em até 7 dias", icon: "star" },
    //     { text: "100% natural e sem contraindicações", icon: "check" },
    //     { text: "Aprovado pela ANVISA", icon: "check" },
    //     { text: "Resultados comprovados", icon: "star" },
    //   ],
    // },
    {
      type: "header",
      headline: "Mas, que fórmula é essa?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Popularmente conhecida como **IDO1-BLOCKER**, a fórmula tem em sua composição vários ativos, dentre eles:",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Ômega-3, Curcumina e Magnésio:** Em conjunto com outros elementos são responsáveis por eliminar a inflamação dos nervos e diminuir a pressão que eles sofrem.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Vitaminas do Complexo B, K2 e Vitamina D:** Indispensáveis na fórmula, constituem um papel essencial na nutrição e recuperação do funcionamento saudável do sistema nervoso.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Ácido Alfa-lipóico e Coenzima Q10:** São agentes ativos responsáveis por estimular o corpo a regenerar e proteger os nervos de todos os danos. Torna os nervos resistentes, fazendo com que não causam mais dores.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Descubriendo este nuevo tratamiento basado en los descubrimientos del Dr. Lair Ribeiro y desarrollado por investigadores estadounidenses y europeos, se demostró que el compuesto tenía el poder extraordinario de regenerar nervios dañados de manera totalmente natural y sin efectos secundarios adversos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**A nova fórmula ganhou grande reconhecimento por sua eficácia e segurança.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Os pacientes relataram que conseguiram encontrar o alívio que precisavam, redescobrindo os pequenos prazeres da vida ao sentar e caminhar sem dor, desfrutar de um sono tranquilo e superar a ansiedade e depressão!**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Já imaginou você poder estar tratando as suas dores e ter mais agilidade para fazer as tarefas do dia a dia sem preocupações com um tratamento sem riscos para saúde? ",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Agora isso é possível!",
      style: "normal",
    },
    {
      type: "header",
      headline: "Onde posso encontrar esse tratamento?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Seu nome é **IDO1-BLOCKER**. Esse tratamento foi um divisor de águas nos tratamentos das dores nos nervos, funcionando como um ativo biofuncional inovador e servindo tanto para quem sofre de dores no nervo ciático quanto para quem tem neuropatias diabéticas, periféricas e alcoólicas.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Se você sofre com dores, queimação, formigamentos, agulhadas, choques e dormência nas pernas, pé, costas, mãos ou até mesmo no rosto, é altamente recomendado utilizar o IDO1-BLOCKER para se recuperar naturalmente.",
      style: "normal",
    },
    {
      type: "header",
      headline: "A fórmula precisa de prescrição médica?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Conforme as diretrizes da ANVISA, **IDO1-BLOCKER** não exige prescrição médica para seu uso. ",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Classificado como um produto fitoterápico 100% natural, está liberado para o comércio sem restrições, seguindo a norma RDC N 240/2018.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Isso significa que IDO1-BLOCKER é seguro, não possui contraindicações e pode ser utilizado por qualquer pessoa que sofra com dores neuropáticas, sem a necessidade de prescrição médica.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "IDO1-BLOCKER se destaca por ser a solução mais eficaz e poderosa disponível hoje para o alívio e tratamento das dores nos nervos. ",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Relatos de pacientes mostram que 9 em cada 10 pessoas que utilizaram IDO1-BLOCKER experimentaram um controle significativo de suas dores, melhorando substancialmente sua qualidade de vida de maneira natural.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Se você está na faixa etária dos 20, 40, 60 anos ou mais, e sofre com dores neuropáticas ou conhece alguém que sofre, é crucial agir preventivamente antes que a situação se agrave. E para aqueles que já convivem com essas dores, IDO1-BLOCKER representa a melhor alternativa de tratamento.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Essa pode ser realmente a sua chance de mudança!",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/ido5.png",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "cta",
      text: "QUERO EXPERIMENTAR",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
    {
      type: "testimonialBlock",
      title: "",
      testimonials: [
        {
          quote:
            "Eu agradeço muito ao IDO1-BLOCKER, estava sem aguentar se movimentar , e assim q usei a primeira vez já me deu um grande alívio , meu Deus que benção, muito obrigado 🙏🙏",
          author: "Frederico Mendes",
          image: "/images/dep1.webp",
          rating: 5,
        },
        {
          quote: "Minhas dores de ciático reduziram significativamente. É impressionante como estou me sentindo melhor! Recomendo!",
          author: "Maria Silva",
          image: "/images/dep2.webp",
          rating: 5,
        },
        {
          quote: "Como médico, estou sempre em busca de soluções eficazes e seguras para meus pacientes. O IDO1-BLOCKER tem mostrado resultados promissores em casos de dores neuropáticas. Recomendo a todos os meus pacientes",
          author: "Dr. Francisco Rocha",
          image: "/images/dep3.webp",
          rating: 5,
        },
      ],
    },
    {
      type: "cta",
      text: "FAÇA SEU PEDIDO AGORA",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
    {
      type: "paragraph",
      text: "Dificilmente recomendamos algum produto no nosso site ou revista, mas com as evidências de 12 anos de estudo que esse produto realmente funciona e a satisfação garantida, sentimos que nossos leitores que precisam irão se beneficiar e poderá mudar a sua vida pra melhor.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Além disso, a empresa responsável pela importação e venda do IDO1-BLOCKER no Brasil confia tanto no seu produto, que oferece uma garantia de 100% de satisfação.",
      style: "normal",
    },
    {
      type: "header",
      headline: "Garantía",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "O IDO1-BLOCKER confia tanto no seu tratamento, que oferece uma garantia de 100% de satisfação, ou seja, o cliente pode testar o produto por 90 dias e se não gostar, basta entrar em contato com a empresa por e-mail ou WhatsApp e solicitar a devolução integral do dinheiro pago. Risco zero para o consumidor.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Aproveite somente hoje desconto de até 70% + Frete Grátis nos primeiros 150 frascos a partir de agora!**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "O nosso portal **reservou alguns frascos de IDO1-BLOCKER para nossos leitores.** Você ganha até **70% de desconto + Frete Grátis** e pode parcelar em até 12x.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Atenção essa **promoção é de lançamento, válida apenas enquanto durar o estoque.** Tenha vantagem com nosso link exclusivo e ganha até **70% desconto e parcelamento em até 12x** clicando no link abaixo:",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/idogar1.png",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
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
        image: "/images/idogar1.png",
        price: "R$ 197,00",
        discount: "R$ 97,00", // alterar valoress
        cta: "COMPRAR CON DESCUENTO",
      },
    ],
  },
  comments: {
    enabled: true, // Ativa a seção de comentários
    title: "138 COMENTÁRIOS", // Título da seção
    list: [
      {
        author: "Liliam Amaral", // Nome do autor do comentário
        avatar: "/images/dep4.webp", // Foto do autor
        date: "2 dias atrás", // Data do comentário
        content:
          "Vim testemunhar o milagre, a benção que esse tratamento me proporcionou, milagre que acabou de acontecer aqui comigo. Eu estava deitada com muita dor no nervo ciático, estava com uma compressa de gelo no bumbum que era a única coisa que aliviava, mas só por umas 2 horas depois a dor voltava de novo. Era horrível, nem conseguia dormir direito, não tinha posição, nem deitada, nem em pé, nem sentada. Já havia feito inumeros exercícios e nada resolvia. Foi ai que achei essa materia e consegui fazer o tratamento se passou uma semana e eu ja nao estou sentindo mais nada, que alivio! Deus age de formas multidiferentes. Glórias! Eu nao guentava mais sofrer com essas dores o povo nao entende o quanto que a gente sofre",
        likes: 48, // Número de curtidas
        replies: [
          // Respostas ao comentário
          // {
          //   author: "Dr. Carlos Silva",
          //   date: "1 dia atrás",
          //   content:
          //     "Fico muito feliz em saber, Ana! Continue o tratamento conforme recomendado.",
          // },
        ],
      },
      {
        author: "Bia Cavalcade",
        avatar: "/images/dep5.webp",
        date: "2 dias atrás",
        content:
          "Voltei p deixar comentário: muito grata , usei o nervo cure 2 vezes ao dia , durante 3 dias ate agora. Só tenho a agradecer, estou muittisima bem, obrigada",
        likes: 35,
      },
      {
        author: "Patricia Andrade",
        avatar: "/images/dep6.webp",
        date: "5 dias atrás",
        content:
          "Eu nunca comento mas eu tenho que comentar que realmente acabou com minha dor . Depois de duas noites sem dormir, resolvi usar esse remedio e foi a única coisa que passou a dor! Sério! Espero que vc também se beneficie com os exercícios deste querido doutor! Obrigada !!!",
        likes: 12,
      },
      {
        author: "Fernando Aragão",
        avatar: "/images/dep7.webp",
        date: "6 dias atrás",
        content:
          "Meu avô começou a usar o IDO1-BLOCKER há um mês e os resultados são visíveis. Ele consegue caminhar melhor e se mostra mais feliz e menos reclamão das dores. Estamos muito gratos!",
        likes: 23,
      },
      {
        author: "Gustavinho",
        avatar: "/images/dep8.webp",
        date: "3 dias atrás",
        content:
          "O IDO1-BLOCKER é um divisor de águas para quem, como eu, vivia tomando analgésicos sem ver melhora real. A diferença é notável. Vale cada centavo!",
        likes: 3,
      },
      {
        author: "Teresa Designer de Sobrancelhas",
        avatar: "/images/dep9.webp",
        date: "4 dias atrás",
        content:
          "Adquiri o IDO1-BLOCKER para o meu marido que tem neuropatia periférica. Ele está usando há algumas semanas e já notamos uma grande melhora. É maravilhoso ver ele sem sofrimento.",
        likes: 53,
      },
      {
        author: "André Pinto",
        avatar: "/images/dep10.webp",
        date: "3 dias atrás",
        content:
          "De primeira eu usei não melhorei de imediato, mas deu uns 2 dias senti um alívio nas pernas. Amanhã vou fazer de novo e continuar fazendo até melhorar. Muito obrigado 🙏",
        likes: 19,
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
