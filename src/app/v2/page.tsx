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
    date: "", // Data de atualização
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
      text: "Eu implorava a Deus para ​m​о​r​r​е​r. A ​d​о​r era tão ​d​е​v​а​ѕ​t​а​d​о​r​а que eu não conseguia nem abraçar meus próprios filhos.",
      author: "revela Gloria Pires em lágrimas.",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Nova solução para dores no nervo ciático, neuropatias, fibromialgia, artrite e artrose.",
      subheadline: "",
      order: 1,
    },
    {
      type: "image",
      src: "/images/gloria1.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Eu perdi muito mais que minha alegria de viver. Perdi minha identidade, minha essência. Havia dias em que eu não conseguia nem mesmo levantar da cama para ir ao banheiro",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Confessa o Gloria Pires, expondo pela primeira vez o drama que quase destruiu sua carreira e família.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "A tragédia pessoal da atriz começou de forma traiçoeira, com uma **simples pontada nas costas.** Como milhões de brasileiros inocentes, ele cometeu o erro fatal de ignorar os primeiros sinais. Com o tempo, **as dоrеѕ se transformaram em uma tortura diária:** choques elétricos percorriam suas pernas, аgulhаdаѕ іmріеdоѕаѕ atacavam suas extremidades, e uma dor dilacerante a impedia até de segurar uma xícara de café.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "No Brasil, **milhões de vítimas sofrem em silêncio com dores crônicas e neuropáticas**, frequentemente sendo ridicularizadas ou tendo seu sofrimento diminuído pela própria classe médica.",
      style: "normal",
    },
    {
      type: "quote",
      text: "É como se um monstro invisível estivesse me devorando por dentro. São choques brutais que atravessam meu corpo inteiro, uma agonia que ninguém consegue compreender",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "**Desabafa o Gloria, com os olhos cheio de lagrimas.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Como um dos maiores nomes do país, **Gloria estava obstinada** a encontrar a cura. Investiu fortunas consultando os melhores especialistas, **tentou absolutamente tudo:** desde remédios convencionais até medicamentos potentes como **pregabalina e gabapentina**, centenas de sessões de fisioterapia e tratamentos alternativos exóticos. Nada surtiu efeito, e os **efeitos colaterais** transformaram sua vida num verdadeiro pesadelo: **tonturas incapacitantes, sonolência extrema, vômitos incontroláveis e fadiga devastadora.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "O fundo do poço veio durante uma **crise de dor.**",
      style: "normal",
    },
    {
      type: "quote",
      text: "Eu senti uma raiva tão profunda que minha pressão estava tão alta que quase desmaiei",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Relembra em prantos. A dor era tão brutal que precisou ser **glorcarregada às pressas para o hospital**. Nem mesmo doses de **morfina conseguiam aliviar totalmente sua dor** – uma realidade aterrorizante que **milhões de brasileiros enfrentam.**",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/gloria2.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "header",
      headline: "Exclusivo: Dr. Fernando Gomes, Renomado Neurocientista PhD pela USP, Revela o Segredo da nova fórmula:",
      // subheadline: "",
      order: 1,
    },
    {
      type: "image",
      src: "/images/drneuro1.jpg",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Em 25 anos de pesquisa sobre dor crônica, nunca testemunhei algo tão promissor. Enquanto outros tratamentos apenas mascaram sua dor, descobrimos algo que finalmente trás o verdadeiro alívio para o seu sofrimento",
      author: "Revela emocionado o renomado especialista, após anos de pesquisa internacional.",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "A Descoberta Que Trouxe a Esperança de Alívio Verdadeiro das Dores para Milhares de Brasileiros:",
      // subheadline: "",
      order: 1,
    },
    {
      type: "quote",
      text: "Imagine seu corpo como uma casa em chamas. Seus nervos estão literalmente pegando fogo neste exato momento devido a uma substância mortal - a enzima IDO1 - que está silenciosamente afetando seu sistema nervoso enquanto você lê este texto.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Esse tratamento age como um esquadrão de bombeiros, combatendo imediatamente este incêndio interno. Os resultados são impressionantes: 89% dos pacientes experimentaram uma transformação milagrosa em suas vidas logo nas primeiras semanas.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Atriz da Globo Gloria Pires Choca o Brasil Após Ter Resultados com o Novo Tratamento",
      // subheadline: "",
      order: 1,
    },
    {
      type: "image",
      src: "/images/gloria3.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Eu já estava perdendo as esperanças. Aqueles choques torturantes nas pernas e formigamentos insuportáveis estavam destruindo minha vida. Não conseguia dormir, não vivia mais. Mas tudo mudou completamente. E o mais incrível: funciona mesmo para quem tem outros problemas de saúde, como fibromialgia, dores crônicas, artrite e artrose. É como renascer!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Tive alívio no primeiro dia, as agulhadas nos pés pararam e eu finalmente consegui respirar aliviada",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Os choques na regiao da cocha e principalmente as dores no nervo ciático diminuiram no primeiro mês, olha depois de ter tentado de tudo e não ter funcionado eu chorei de alegria, pois tinha esquecido o que era viver sem dor.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Já gastei mais de 100 mil reais com consultas, remédios, fisioterapias, ozônioterapia, tudo que você imaginar, e nada tinha resolvido, eu ja estava sem esperanças, mas valeu a pena tentar.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Hoje consigo caminhar, dormir bem, brincar com meus netos, tudo sem sentir dor, fazer as coisas simples do dia a dia, agradeço demais a Deus todos os dias.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "A Triste Verdade Sobre os Tratamentos Convencionais",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Você conhece bem este pesadelo: acordar todos os dias sentindo como se seu corpo estivesse sendo torturado, usar remédios que prometem alívio, mas acabam trazendo apenas mais sofrimento. É um ciclo vicioso e devastador de **analgésicos cada vez mais potentes, anti-inflamatórios, relaxantes musculares que causam efeitos colaterais, e antidepressivos** que sugam sua energia e afetam a sua saúde.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Mas o pesadelo não termina aí. São **consultas caras com especialista** que apenas passam mais e mais remédios. **Intermináveis sessões de fisioterapia** que oferecem apenas “uma gota de alívio num oceano de dor”. **Infiltrações,** acupuntura, tens, uma infinidade de pomadas e emplastros – uma jornada desesperadora em busca de um alívio que parece impossível.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "O mais assustador? De acordo com um estudo divulgado pela Universidade de Michgan, foi relatado que tratamentos tradicionais para dores neuropaticas **apenas mascaram a sua dor**, enquanto a enzima IDO1 continua agindo em seu sistema nervoso. É como tentar sobreviver a um incêndio cobrindo os olhos, enquanto as chamas consomem tudo ao seu redor.",
      style: "normal",
    },
    {
      type: "header",
      headline: "Se Você não Utilizar a Nova Solução, Poderá Sofrer com as Dores pelo Resto da Vida sem Alívio Duradouro",
      // subheadline: "",
      order: 1,
    },
    {
      type: "image",
      src: "/images/moleculas.jpeg",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "quote",
      text: "Ver pacientes que sofriam há décadas voltando a sorrir... isso não tem preço.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Foram anos de dedicação incansável e colaboração com os maiores cientistas da Universidade de São Paulo (USP), em parceria com as universidades do Texas (EUA), Augusta (EUA) e a Newcastle (Reino Unido) até a criação do novo composto que está trazendo o alívio e qualidade de vida que as pessoas tanto precisam.",
      style: "normal",
    },
    {
      type: "quote",
      text: "O que temos aqui é o poder da natureza junto da ciência moderna",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Mas que fórmula é essa? Conheça o Segredo da fórmula para Alívio das Dores mais poderosa atualmente",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "No coração desta revolução está o **1-Metil-triptofano (1-MT)**, uma molécula presente na natureza capaz de agir contra a enzima causadora da dor. Mas o verdadeiro poder vem da sinergia com outros componentes naturais ultra concentrados:",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Palmitoiletanolamida (PEA) e Extrato de Ginkgo Biloba:** É como ter um exército de bombeiros apagando o fogo da inflamação em seu corpo. Os resultados são simplesmente impressionantes – 67% de redução na inflamação dos nervos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Extrato de Ashwagandha e L-Carnitina:** São os guardiões do seu sistema nervoso. Sem eles, seria impossível alcançar o alívio completo.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Coenzima Q10, Betacarotenos:** O combustível que faz sua recuperação acontecer em tempo recorde",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**Ácido Alfa-lipóico D2 e Vitaminas do Complexo B (Em alta concentração):** Imagine seus nervos danificados sendo reconstruídos como uma autoestrada moderna. É exatamente isso que acontece!",
      style: "normal",
    },
    {
      type: "header",
      headline: "100% segura, aprovada por mais de 39 mil pacientes e especialistas",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "O que descobrimos em nosso estudo com 39.470 pacientes que utilizaram todos os dias a nova fórmula:",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**🔬 Resultados Impressionantes:**",
      style: "normal",
    },
    {
      type: "benefits",
      items: [
        { text: "9 a cada 10 pessoas experimentaram um controle significativo de suas dores, melhorando substancialmente sua qualidade de vida de maneira natural.", icon: "check" },
        { text: "92% conseguiram reduzir ou eliminar outros medicamentos", icon: "check" },
        { text: "95% relataram melhora no sono já na primeira semana", icon: "check" },
      ],
    },
    {
      type: "paragraph",
      text: "Milhares de pacientes relataram que, após tentar de tudo, finalmente conseguiram encontrar alívio de verdade. Principalmente melhorando suas noites de sono e acordando sem medo de sentir dor, e conseguindo fazer as tarefas do dia a adia sem interrupções.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Já imaginou você poder estar tratando as suas dores e ter mais agilidade para fazer as tarefas do dia a dia sem preocupações com um tratamento sem riscos para saúde?",
      style: "normal",
    },
    {
      type: "header",
      headline: "O Que Acontece Se Você Ignorar Esse Novo Tratamento?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "**Como neurocientista, preciso alertar: a dor crônica é progressiva, explica Dr.** É como um invasor silencioso que está destruindo seus nervos neste exato momento. A cada dia sem tratamento adequado, a enzima IDO1 continua danificando seus nervos silenciosamente. É como um incêndio devastador – começa pequeno, mas pode destruir sua vida inteira.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Muitos de nossos pacientes relatam o mesmo padrão:",
      style: "normal",
    },
    {
      type: "benefits",
      items: [
        { text: "Primeiro são dores leves que vão e voltam", icon: "check" },
        { text: "Depois, os formigamentos começam a ser mais frequentes", icon: "check" },
        { text: "Os choques elétricos se tornam mais intensos", icon: "check" },
        { text: "O sono fica cada vez mais difícil", icon: "check" },
        { text: "Atividades simples como segurar uma xícara ou amarrar um sapato se tornam desafios", icon: "check" },
        { text: "A ansiedade e depressão começam a aparecer", icon: "check" },
        { text: "Os remédios para dor já não fazem mais efeito", icon: "check" },
      ],
    },
    {
      type: "header",
      headline: "Aonde posso encontrar esse novo tratamento?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Conhecido como **IDO1-BLOCKER**, a formula nasceu nos laboratórios mais avançados do mundo e recebeu o **selo de aprovação da ANVISA com exclusividade.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**O IDO1-BLOCKER é diferente dos outros tratamentos disponíveis no mercado, pois ele não apenas mascara sua dor – e sim ajuda o seu corpo a eliminar a causa raiz do seu sofrimento, trazendo alívio verdadeiro e duradouro.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Pacientes descreveram que é como acordar todas as manhãs sem aquela agonia que rouba a qualidade de vida. Agora isso é possível, e o melhor: sem efeitos colaterais e 100% compatível com seus tratamentos atuais. **A liberdade que os brasileiros tanto sonham agora está ao nosso alcance.**",
      style: "normal",
    },
    {
      type: "quote",
      text: "Quando vi meu pai sorrindo pela primeira vez em meses após começar o tratamento, chorei de alegria. compartilha Margarida S., filha de uma de nossas pacientes. Ela já tinha gastado uma fortuna com médicos e remédios que não resolviam. O IDO1-BLOCKER foi um verdadeiro milagre para nossa família.",
      author: "Margarida S. não conteve as lágrimas ao revelar:",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Gastei mais de 10 mil reais com consultas e remédios que não resolveram nada. Se tivesse conhecido o IDO1-BLOCKER antes, teria economizado tanto dinheiro e sofrimento.",
      author: "Como José Almeida descobriu:",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Se você sofre com dores crônicas, neuropatia, dores no nervo ciático, fibromialgia, formigamentos, agulhadas, queimação, artrite ou artrose, o IDO1-BLOCKER é o tratamento feito para você.",
      order: 1,
    },
    {
      type: "paragraph",
      text: "O **IDO1-BLOCKER** é aprovado pela ANVISA como fitoterápico (RDC N 240/2018), **não exigindo prescrição médica para seu uso**. Isso significa que você pode começar seu tratamento imediatamente, com total segurança e respaldo científico.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Com uma nova fórmula que bloqueia a enzima causadora das dores crônicas, o **IDO1-BLOCKER** se destaca como o tratamento mais avançado disponível hoje para dores crônicas e neuropáticas. **Atualmente não há nenhuma outra solução que se compare em solo brasileiro.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Se você tem entre 20 e 80 anos e sofre com dores nos nervos, artrite, artrose, fibromialgia ou conhece alguém nessa situação, não espere sua condição piorar, pois pode se tornar irreversível. O **IDO1-BLOCKER** é sua chance de transformação, permitindo que você recupere sua qualidade de vida de forma 100% natural e segura.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Não deixe a dor controlar mais a sua vida. Esta é sua oportunidade de mudança!",
      style: "normal",
    },
    {
      type: "cta",
      text: "QUERO EXPERIMENTAR",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
    {
      type: "image",
      src: "/images/ido5.png",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "testimonialBlock",
      title: "",
      testimonials: [
        {
          quote:
            "Como neurologista com 22 anos de experiencia, reconheço a efetividade do IDO1-BLOCKER em meus pacientes, uma fórmula segura e confiável. Se você sofre com dores, formigamentos, choques e queimação, utilize o IDO1-BLOCKER apenas 2 vezes ao dia, uma logo ao acordar e outra ao anoitecer, assim você irá garantir os melhores resultados",
          author: "Dr. Marcos Freitas",
          image: "/images/dep3.webp",
          rating: 5,
        },
        {
          quote: "Eu tenho neuragia pós herpetica, estou sofrendo a 5 anos, perdi minha qualidade de vida, já tomei de tudo o que é remédio de dor usei vários tipos emplastro não resolveu nada ,fiz 6 bloqueio,não o que fazer.🥲 Minha esperança foi o IDO-BLOCKER, melhorei muito, já não estou sofrendo tanto, as dores dá pra suportar e parecem que diminuem a cada dia mais. Uso todos os dias e tambem faço chá de folha de louro.",
          author: "Maria Silva",
          image: "/images/dep2.webp",
          rating: 5,
        },
        {
          quote: "já sofri de tudo, dores nas costas, artrose, tenho diabetes e formigamentos, eu recomendo o IDO-BLOCKER com certeza, está me ajudando muito, não vale a pena ficar a vida toda sofrendo temos de sempre procurar alternativas para nos ajudar.",
          author: "Cristiano Ferreira",
          image: "/images/dep1.webp",
          rating: 5,
        },
      ],
    },
    {
      type: "cta",
      text: "QUERO ALIVIAR MINHAS DORES",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
    {
      type: "quote",
      text: "Como neurologista eu aconselho meus pacientes: Não espere sua condição piorar. Já vi gastarem mais de R$20.000 com tratamentos que não funcionam. O IDO1-BLOCKER custa menos que uma única consulta com especialista e pode transformar sua vida.",
      author: "Dr. Fernando Gomes",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Como Funciona a Compra?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "O **IDO1-BLOCKER** tem componentes únicos e sua fabricação é exclusiva e controlada, **DEVE SER ADQUIRIDO APENAS VIA WEBSITE OFICIAL**, com as evidências de 5 anos de estudo que esse produto realmente funciona, acompanhamento profissional gratuito e a satisfação garantida de 180 dias, o **IDO1-BLOCKER** é a melhor opção de tratamento disponível no mercado.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Ao entrar no site oficial, basta escolher o seu plano ideal de tratamento (é recomendado o plano de 3 a 5 meses), clicar em comprar e adicionar as informações de entrega, o site é 100% seguro e o seu pedido chegara dentro de 2 até no máximo 10 dias.",
      style: "normal",
    },
    {
      type: "header",
      headline: "Garantia de 180 dias + Acompanhamento personalizado.",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Atualmente não existe nada igual no mercado, provando que a empresa responsável pelo **IDO1-BLOCKE** está trazendo qualidade de vida sem precedentes aos brasileiros.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Ao comprar o tratamento, **você conta com 180 dias de garantia incondicional**, caso não fique satisfeito com o produto, a empresa assegura a devolução de 100% do seu dinheiro.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Além disso, **você terá acesso a um profissional que ficará responsável por realizar o seu acompanhament** e tirar todas as dúvidas durante o tratamento.",
      style: "normal",
    },
    {
      type: "quote",
      text: "Estava desacreditada no início, mas a garantia me deu segurança para tentar. Hoje, depois de 4 meses sem dor, só me arrependo de não ter começado antes.",
      author: "Maria Helena de 67 anos",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "cta",
      text: "QUERO EXPERIMENTAR AGORA",
      url: "https://exemplo.com.br/comprar?ref=artigo",
      style: "primary",
      size: "large",
    },
    {
      type: "paragraph",
      text: "**Aproveite somente hoje desconto de até 70% + Frete Grátis nos primeiros 110 frascos a partir de agora!**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "O nosso portal **reservou alguns frascos de IDO1-BLOCKER para nossos leitores**. Você ganha até **70% de desconto + Frete Grátis e pode parcelar em até 12x.**",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Atenção essa **promoção acaba hoje, válida apenas enquanto durar o estoque**. Tenha vantagem com nosso link exclusivo e ganha até **70% desconto e parcelamento em até 12x** clicando no link abaixo:",
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
      text: "QUERO ALIVIAR MINHAS DORES",
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
          "Que benção de Deus! 🙏 tenho certeza que mudará a vida de muita gente.",
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
          "Gente! Saúde é tudo, e eu digo, não vale a pena viver aturando essa dor sem dar uma chance para esse tratamento, eu ja tinha comprado de tudo e ido em varios medicos e estava descrente já pois minha mae nunca teve melhora com nada, e eu chorando querendo ajudar, começou a usar IDO1-BLOCKER faz uma semana e hoje foi o primeiro dia que vi ela sorrindo em meses😭 vale todo o dinheiro do mundo por favor dê uma chance",
        likes: 35,
      },
      {
        author: "Patricia Andrade",
        avatar: "/images/dep6.webp",
        date: "5 dias atrás",
        content:
          "Eu senti raiva ao ponto de ficar tonta e descontrolar minha pressão , senti como se algo tivesse rompido dentro de mim , desde então dores e fadigas nas pernas , no ciático , principalmente do lado esquerdo do corpo, é como choque desde o pé até a cabeça , com isso o intestino estômago tudo ficou comprometido, só Deus na minha vida . to usando esse ido1-blocker e to conseguindo me recuperar ja estou mais aliviado menos anciosa, ontem as fadigas diminuiram muito coisa que nem medicamento tava resolvendo ainda bem graças a Deus",
        likes: 83,
      },
      {
        author: "Fernando Aragão",
        avatar: "/images/dep7.webp",
        date: "6 dias atrás",
        content:
          "Eu estou passando por isso,já fui em dois Neurologista nenhum dos dois descobriu o que é tambem comecei a usar e estou me sentindo melhor, não foi na mesma hora que veio o efeito demorou uns 3 dias os choques e dor nas costas ja diminuiu bem",
        likes: 23,
      },
      {
        author: "Gustavinho",
        avatar: "/images/dep8.webp",
        date: "3 dias atrás",
        content:
          "oi eu tambem consegui, recomendo tambem reduzir o açucar e preparar chá de folha de louro todo dia ajuda muito usar o esse tratamento melhorei bastante",
        likes: 3,
      },
      {
        author: "Teresa Designer de Sobrancelhas",
        avatar: "/images/dep9.webp",
        date: "4 dias atrás",
        content:
          "Eu estou desse jeito e isso aí é de muito tempo tem dia qui tá bem outro dia tá mal só Jesus na causa",
        likes: 53,
      },
      {
        author: "André Pinto",
        avatar: "/images/dep10.webp",
        date: "3 dias atrás",
        content:
          "Explicação maravilhosa! Equipe muito capacitada Parabéns aos envolvidos e a ANVISA",
        likes: 19,
      },
      {
        author: "Vera Lima",
        avatar: "/images/dep20.jpg",
        date: "26 dias atrás",
        content:
          "esse ido1 blocker nao se compara a nada q ja experimentei antes pra dor. Eu sofria tanto com dor no nervo ciático que até pra ir no banheiro era um sacrifício. Comecei a usar faz um mês e parece e até fiquei emocionada melhorei muito. Ainda sinto umas fisgadinhas de vez em quando, mas nada comparado ao que era antes. Não vale a pena ficar sofrendo gente! quem sofre como eu tem que tentar sim.",
        likes: 253,
      },
      {
        author: "Claudia",
        avatar: "/images/dep21.jpg",
        date: "6 dias atrás",
        content:
          "Sou Claudia,já tomei pregabalina entre outros 18 antiflamatorio e nada resolve!fiz 58 fisioterapia ventosas e nada tira a fraqueza das pernas e dores no osso do glúteos irradiando para os músculos das coxas …agora estou tomando esse ido1 bloker.. canela de velho desde ontem e chá..vamos ver se vai dar uma aliviada…",
        likes: 64,
      },
      {
        author: "Conceição",
        avatar: "/images/dep22.jpg",
        date: "5 dias atrás",
        content:
          "Muito bom mesmo, esclarecida. Venho sofrendo de dor dos nervos desde a perna, pé, costas, orelhas, tive crise de dor ciática, deixou mazelas, tive. a zona ficou a dor de queimação e choques nas costas já sofro há uns bons anos nunca fui tratada e sim ignorada enfim. meu neto ficou sabendo e comprou me trouxe esse ido bloker isso foi Deus tocando na minha vida eu oro agradecendo todos os dias pois eu melhorei demais era tudo que eu precisava ter um alivio",
        likes: 23,
      },
      {
        author: "Sebastião Nunes",
        avatar: "/images/dep23.jpg",
        date: "1 dia atrás",
        content:
          "Como esta a tratar?",
        likes: 1,
      },
      {
        author: "José Almeida",
        avatar: "/images/dep24.jpg",
        date: "3 dias atrás",
        content:
          "Eu tenho fibromialgia e sinto dor nos nervos do braço, nervos da coluna etc. Ja tive essa dor de choque e o neurologista particular, disse que era criação da minha mente. Tive ainda que pagar uma fortuna pela consulta . em fim, gente, vale muito mais a pena comprar esse bloker e melhorar q nem eu porque antes gastei mais de 10 mil reais com consultas remedios fisioterapia e nao resolvi e agora tenho alivio",
        likes: 12,
      },
      {
        author: "Francisco Carvalho",
        avatar: "/images/deo25.jpg",
        date: "4 dias atrás",
        content:
          "Vivo nos estados unidos e aqui realmente está sendo muito usado, gente aproveitem para comprar agora entquanto esta barato aqui no brasil porque garanto que daqui a pouco o preço vai aumentar sim",
        likes: 134,
      },
      {
        author: "Eunice Borges",
        avatar: "/images/dep26.jpg",
        date: "2dias atrás",
        content:
          "como faço para comprar?",
        likes: 1,
      },
      {
        author: "Francisca Carvalho",
        avatar: "/images/dep27.jpg",
        date: "4 dias atrás",
        content:
          "entao la na materia tem o link que leva para o site oficial é esse",
        likes: 2,
      },
      {
        author: "Maria Das Dores",
        avatar: "/images/dep28.jpg",
        date: "6 dias atrás",
        content:
          "obrigada",
        likes: 1,
      },
      {
        author: "Marli Andrade",
        avatar: "/images/dep29.jpg",
        date: "6 dias atrás",
        content:
          "Essa dica é que foi de ouro para mim que estou vivendo essa situação brigada Doutor",
        likes: 39,
      },
      {
        author: "Alves Andrade",
        avatar: "/images/dep30.jpg",
        date: "8 dias atrás",
        content:
          "muito bom Deus abençoe a todos aqui que todos possam melhorar estou orando por todos voces",
        likes: 9,
      },
      {
        author: "Zilda Golçalves",
        avatar: "/images/dep31.jpg",
        date: "10 dias atrás",
        content:
          "Boa tarde eu sofri rassenise estou a procura d um tratamento pra ameniza a dor no nervo q secou d mais os pés sinto muito descoforto pr anda e dor e ate fica a perna dura",
        likes: 23,
      },
      {
        author: "Danilo Campos",
        avatar: "/images/dep32.jpg",
        date: "10 dias atrás",
        content:
          "tenho nervo trigemio mas nunca fiz exame sera que funciona pra mim?",
        likes: 3,
      },
      {
        author: "Carla Frois",
        avatar: "/images/dep33.jpg",
        date: "12 dias atrás",
        content:
          "opa, eu tambem tenho, funciona sim",
        likes: 14,
      },
      {
        author: "Marisa Monte",
        avatar: "/images/dep34.jpg",
        date: "12 dias atrás",
        content:
          "obrigada, vou compra",
        likes: 42,
      },
      {
        author: "Sônia Cavalcanti",
        avatar: "/images/dep35.jpg",
        date: "13 dias atrás",
        content:
          "para diabeticos tem algum problema? tomo varios medicamentos tenho medo",
        likes: 87,
      },
      {
        author: "Neide Fonseca",
        avatar: "/images/dep36.jpg",
        date: "32 dias atrás",
        content:
          "então eu tambem sou diabetica tipo 2 tenho neuropatia diabetica de historico familiar minha familia quase toda tem ai nos compramos pra todo mundo e tem sido muito benção nas nossa vidas",
        likes: 52,
      },
      {
        author: "Elsa Maria",
        avatar: "/images/dep37.jpg",
        date: "14 dias atrás",
        content:
          "Estou a 13 dias com dores terríveis.Varias visitas ao pronto socorro para receber morfina….muito sofrimento.",
        likes: 33,
      },
      {
        author: "Raimundo",
        avatar: "/images/dep38.jpg",
        date: "19 dias atrás",
        content:
          "Voltando pra complementar.Quase cinco meses, fazendo fisioterapia, ozonioterapia,muito medicamento.Melhorou,mas ainda tenho dificuldade para caminhar,inchaço,dor e rouxidão vou começar a usar esse tratamento nao tenho nada a perder",
        likes: 194,
      },
      {
        author: "Manoel Correia",
        avatar: "/images/dep39.jpg",
        date: "23 dias atrás",
        content:
          "obrigado doutor, acabou de chegar pra mim aqui e ja vou tomar",
        likes: 104,
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
