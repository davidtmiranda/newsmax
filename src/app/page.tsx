import { headers } from "next/headers";
import { BotPageContent } from "../config/botPage";
// Importando os componentes necessários para construir a página
// Pense nestes imports como peças de LEGO que vamos usar para montar nossa página
import ClientLayout from "../components/ClientLayout"; // Layout base da página
import Comments from "../components/Comments"; // Seção de comentários
import Header from "../components/Header"; // Cabeçalho da página
import MainContent from "../components/MainContent"; // Conteúdo principal
import Sidebar from "../components/Sidebar"; // Barra lateral
import { CtaProvider } from "../contexts/CtaContext"; // Gerenciador dos botões de ação
import { AdvertorialContent } from "../types/advertorial"; // Define a estrutura do conteúdo

// Move the content object outside the component to avoid re-renders
const realUserContent: AdvertorialContent = {
  // Aqui começamos a definir todo o conteúdo da página
  // Este é o local onde você vai fazer a maioria das suas edições
  meta: {
    date: "Por Bernardo Galvão – Actualizado hoy", // Data de atualização
    author: "Dr. Carlos Silva", // Nome do autor
    category: "Saúde e Bem-estar", // Categoria do artigo
  },

  // Link para onde o botão de compra vai direcionar
  ctaUrl: "https://nervefix.store/es/",

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
      text: "Al eliminar mis dolores, recuperé mi voluntad de vivir!",
      author: "Raul Gil",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline:
        "El presentador del TELEVISIÓN es destacado en todo México, tras revelar la fórmula que curó sus dolores nerviosos.",
      subheadline:
        "Raul Gil cuenta que no podía dormir debido a dolores, punzadas y choques insoportables en las piernas, pies y manos, pero a través de especialistas descubrió la nueva fórmula que está ayudando a miles de personas a eliminar los dolores del nervio ciático, neuropatías y fibromialgia, sin ejercicios e incluso eliminando la necesidad de tomar medicamentos.",
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
      text: "Antes de encontrar el tratamiento que cambió su vida, Raul Gil no soportaba más los dolores que nunca cesaban y que parecían choques eléctricos y punzadas en las piernas, pies, manos y muchas veces en la espalda.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**El dolor neuropático**, causado por el nervio ciático o por neuropatía diabética/periférica, es un tormento que afecta a millones de Mexicanos que se sienten aislados y sufren en silencio, ya que la enfermedad destruye la salud física, el bienestar, y muchas veces incluso la alegría de vivir.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Muchas veces, incomprendidos por los médicos, los pacientes con dolores neuropáticos reciben recetas con medicamentos convencionales para el dolor, que no funcionan.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Los tratamientos para los dolores en los nervios a menudo se basan en el uso de medicamentos como gabapentina, pregabalina, antidepresivos y anticonvulsivantes, que ofrecen solo un alivio temporal y vienen con una lista enorme de efectos secundarios, como somnolencia, mareos e incluso dependencia.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Consciente de estos desafíos, Raul estaba determinado a encontrar una solución definitiva y sostenible para eliminar sus dolores.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "En un episodio grave, el querido presentador enfrentó un momento de crisis intensa, donde los dolores en todo el cuerpo se volvieron tan fuertes e insoportables que tuvo que ir al hospital para recibir morfina.",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/UTI.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "paragraph",
      text: "Al ser llevado de urgencia al hospital, los médicos confirmaron que su situación era crítica y que un procedimiento de emergencia sería necesario, debido al descubrimiento de que sus nervios estaban completamente inflamados y comprimidos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Era como si cada nervio de su cuerpo estuviera gritando por ajuda. Raul estaba en un ponto en el que el dolor era tan intenso que incluso los medicamentos más fuertes, como la morfina, parecían no hacer efecto.",
      style: "normal",
    },
    {
      type: "quote",
      text: "Prefiero morir que seguir sintiendo este dolor, gritaba él.",
      author: "Relata Carmen, la esposa de Raul Gil",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Raul Gil, entonces, fue sometido a una cirugía en los nervios periféricos y el ciático. Este procedimento tenía como objetivo desinflamar temporalmente y aliviar la presión sobre los nervios afectados, proporcionando alivio del dolor por un tiempo.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "En el hospital, sus familiares oraban por su vida…",
      style: "normal",
    },
    {
      type: "header",
      headline:
        "Raul Gil entonces llama al Dr. Lair Ribeiro para ayudar a encontrar la solución para su problema:",
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
      text: "Muchos pacientes compran medicamentos para el dolor pensando que es dolor en las articulaciones, ¡cuando el problema real son los nervios!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "La verdad es que tus nervios están inflamados, comprimidos y dañados, y la condición solo empeora si tienes hernia de disco, neuropatía diabética o has sufrido alguna lesión.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Él entonces destaca lo ineficaces que son los medicamentos utilizados hoy en día, y que los ejercicios y la fisioterapia solo ayudan a detener el dolor en el momento, pero tampoco resuelven el problema.",
      style: "quote",
    },
    {
      type: "paragraph",
      text: "Pero, al final, destaca la solución para el problema de los dolores en los nervios.",
      style: "quote",
    },
    {
      type: "quote",
      text: "¡Pero hay solución!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "En el foro de medicina en Suiza, al que asistí, se presentó el nuevo descubrimiento de una sustancia que hace que los nervios se recuperen de forma natural.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Es capaz de actuar en la raíz del problema y eliminar la inflamación, la compresión, regenerar completamente tus nervios y hacerlos hasta 5 veces más resistentes al dolor.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "De todo lo que existe hoy en día, creo que solo esta fórmula será capaz de brindar alivio a tus dolores de forma permanente, porque actúa en la raíz del problema.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline:
        "Mientras muchos sufren, otros no se conforman con esta situación…",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Después de sufrir tanto tiempo, Raul Gil decidió buscar alternativas que realmente ofrecieran soluciones efectivas para sus dolores en los nervios.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Relató que las personas no comprendían la magnitud de su sufrimiento, no podía realizar las tareas simples del día a día y se sentía frustrado, triste y ansioso con los numerosos tratamientos que no funcionaban.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Dijo que los tratamientos disponibles en el mercado Mexicanos son complicados e están llenos de efeitos negativos para el cuerpo.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Entonces Raul comenzó a realizar algunos tratamientos americanos recomendados, y cuanto más buscaba por tratamientos alternativos,",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "más conocía sobre nuevas técnicas aún poco conocidas.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Fue al discutir con el Dr. Lair Ribeiro que Raul Gil descubrió que otros portadores de la enfermedad estaban experimentando beneficios sorprendentes con el nuevo tratamiento que aún no estaba disponible en México.",
      style: "normal",
    },
    {
      type: "header",
      headline: "Encontré la esperanza que estaba buscando…",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Descubriendo este nuevo tratamiento basado en los descubrimientos del Dr. Lair Ribeiro y desarrollado por investigadores estadounidenses y europeos, se demostró que el compuesto tenía el poder extraordinario de regenerar nervios dañados de manera totalmente natural y sin efectos secundarios adversos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Tras los relatos de más de 42 mil personas, la nueva fórmula demostró ser capaz de recuperar la funcionalidad del sistema nervioso de manera integral.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Esto significaba no solo el alivio de los dolores insoportables, sino también la liberación de los medicamentos y la superación del problema, permitiendo que las personas volvieran a realizar actividades cotidianas sin las limitaciones impuestas por el dolor.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "¡Este tratamiento innovador y mucho más accesible generó una nueva esperanza para la población Mexicano y en todo el mundo!",
      style: "normal",
    },
    {
      type: "header",
      headline:
        "Pero, ¿será que la fórmula es todo eso? ¡Compruébalo tú mismo!",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Pues bien, después de ser anunciada, la fórmula tuvo una repercusión inmediata en Estados Unidos, Europa y también en Mexicano. Millones de personas estaban desesperadas por acceder al tratamiento, incluyendo a Raul, quien compartió su experiencia con el producto:",
      style: "normal",
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
      text: "Siendo 100% sincero, estaba desesperado y encontré alivio en mi cuerpo desde el primer uso.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Esos dolores en el muslo izquierdo, que parecían una descarga eléctrica, comenzaron a disminuir.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Mi pierna tenía pinchazos y se sentía pesada, sentía una horrible quemazón en los tobillos, pero en pocos días ya estaba mucho mejor.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Después, lo que se detuvo fue la sensación de quemazón en las palmas de las manos, en la parte inferior de los pies cerca de los dedos y en la lengua. Sinceramente, lloré de alegría porque eso fue un alivio para mi alma.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Es una sensación indescriptible poder despertar y no tener miedo de sentir dolor. Mi médico dijo que nunca había visto una recuperación así.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "quote",
      text: "Ahora puedo dormir bien y hacer cosas simples que el dolor me impedía antes, como caminar por el parque y jugar con mis nietos. Me siento libre, independiente y he recuperado mi felicidad. ¡HE GANADO ESTA BATALLA!",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "header",
      headline: "Entiende los recursos que no funcionan y sus peligros",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "La mayoría de las personas y médicos creían que la única forma de controlar los dolores en los nervios era a través de medicamentos fuertes, ejercicios variados y cirugías costosas.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Todas estas alternativas prometen mucho, pero a menudo fallan en tratar la causa raíz del problema, trayendo efectos secundarios, altos costos, y en algunos casos, riesgos mayores que la propia condición original.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Contudo, a virada de jogo veio com a descoberta compartilhada por Dr. Lair Ribeiro, um avanço liderado por uma equipe de pesquisadores que finalmente conseguiu desenvolver uma fórmula capaz de atacar diretamente a inflamação, compressão e danos aos nervos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Después de años de estudios y pruebas, esta fórmula demostró no solo ser eficaz, sino también 100% segura para uso continuo, sin los temidos efectos secundarios associados a los métodos tradicionales.",
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
      text: "Después de más de una década de investigación y colaboración internacional, hemos encontrado una composición única que rejuvenece los nervios dañados, alivia la inflamación y descompresión, de forma natural y sostenible.",
      author: "",
      image: "/images/dr-roberto.jpg",
      highlight: true,
    },
    {
      type: "paragraph",
      text: "Esta fue una victoria no solo para Raul Gil, sino para todos aquellos que sufren en aislamiento y en silencio con dolores neuropáticos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "El éxito de esta fórmula probada y comprobada combina los mejores ativos e logra proporcionar alivio casi inmediato a tu organismo.",
      style: "quote",
    },
    {
      type: "paragraph",
      text: "**9 de cada 10 personas** que usaron NERVEVIX experimentaron un control significativo de sus dolores, mejorando sustancialmente su calidad de vida de manera natural.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "header",
      headline: "Pero, ¿qué fórmula es esta?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Popularmente conocida como NERVEVIX, la fórmula tiene en su composición varios activos, entre ellos:",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Omega-3, Curcumina y Magnesio: En conjunto con otros elementos, son responsables de eliminar la inflamación de los nervios y reducir la presión que sufren.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Vitaminas del Complejo B, K2 y Vitamina D: Indispensables en la fórmula, desempeñan un papel esencial en la nutrición y recuperación del funcionamiento saludable del sistema nervioso.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: " Ácido Alfa-lipoico y Coenzima Q10: Son agentes activos responsables de estimular al cuerpo para regenerar y proteger los nervios de todos los daños. Hacen que los nervios sean resistentes, evitando que causen más dolor.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Descubriendo este nuevo tratamiento basado en los descubrimientos del Dr. Lair Ribeiro y desarrollado por investigadores estadounidenses y europeos, se demostró que el compuesto tenía el poder extraordinario de regenerar nervios dañados de manera totalmente natural y sin efectos secundarios adversos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "**La nueva fórmula ha demostrado hasta un 98% de efectividad** en el tratamiento de dolores neuropáticos.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "La nueva fórmula ha ganado gran reconocimiento por su eficacia y seguridad.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Los pacientes informaron que lograron encontrar el alivio que necesitaban, redescubriendo los pequeños placeres de la vida al sentarse y caminar sin dolor, disfrutar de un sueño tranquilo y superar la ansiedad y la depresión.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "¿Te imaginas poder tratar tus dolores y tener más agilidad para realizar las tareas diarias sin preocupaciones con un tratamiento sin riesgos para la salud?",
      style: "quote",
    },
    {
      type: "paragraph",
      text: "¡Ahora eso es posible!",
      style: "quote",
    },
    {
      type: "header",
      headline: "¿Dónde puedo encontrar este tratamiento?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "Su nombre es NERVEVIX. Este tratamiento ha sido un parteaguas en el tratamiento de los dolores en los nervios, funcionando como un activo biofuncional innovador y sirviendo tanto para quienes sufren de dolores en el nervio ciático como para quienes tienen neuropatías diabéticas, periféricas y alcohólicas.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Si sufres de dolores, quemazón, hormigueos, punzadas, choques y entumecimiento en las piernas, pies, espalda, manos o incluso en la cara, se recomienda altamente utilizar NERVEVIX para recuperarte de manera natural.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "header",
      headline: "¿La fórmula necesita receta médica?",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "De acuerdo con las directrices de COFEPRIS, NERVEVIX no requiere receta médica para su uso.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Clasificado como un producto fitoterápico 100% natural, está disponible para la venta sin restricciones, siguiendo la norma RDC Nº 240/2018.",
      style: "normal",
    },
    {
      type: "paragraph",
      text: "Esto significa que NERVEVIX es seguro, no tiene contraindicaciones y puede ser utilizado por cualquier persona que sufra de dolores neuropáticos, sin necesidad de receta médica.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "NERVEVIX se destaca por ser la solución más eficaz y poderosa disponible hoy para el alivio y tratamiento de los dolores en los nervios.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Los informes de los pacientes muestran que 9 de cada 10 personas que usaron NERVEVIX experimentaron un control significativo de sus dolores, mejorando sustancialmente su calidad de vida de manera natural.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Si estás en el rango de edad de 20, 40, 60 años o más, y sufres de dolores neuropáticos o conoces a alguien que sufre, es crucial actuar preventivamente antes de que la situación empeore. Y para aquellos que ya conviven con estos dolores, NERVEVIX representa la mejor alternativa de tratamiento.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "¡Esta puede ser realmente tu oportunidad de cambio!",
      style: "normal",
    },
    {
      type: "image",
      src: "/images/nervefix5.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "cta",
      text: "QUIERO EXPERIMENTAR",
      url: "https://nervefix.store/es/",
      style: "primary",
      size: "large",
    },
    {
      type: "testimonialBlock",
      title: "",
      testimonials: [
        {
          quote:
            "Agradezco mucho a NERVEVIX, no podía soportar moverme, y tan pronto como lo usé por primera vez, ya me dio un gran alivio. Dios mío, qué bendición, muchas gracias 🙏🙏",
          author: "Juan Hernández",
          image: "/images/dep1.webp",
          rating: 5,
        },
        {
          quote:
            "Mis dolores ciáticos han disminuido significativamente. ¡Es impresionante cómo me estoy sintiendo mejor! ¡Lo recomiendo!",
          author: "Rosa Morales",
          image: "/images/dep2.webp",
          rating: 5,
        },
        {
          quote:
            "Como médico, siempre estoy en busca de soluciones eficaces y seguras para mis pacientes. NERVEVIX ha mostrado resultados prometedores en casos de dolores neuropáticos. Lo recomiendo a todos mis pacientes.",
          author: "Dr. Francisco González",
          image: "/images/dep3.webp",
          rating: 5,
        },
      ],
    },
    {
      type: "cta",
      text: "HAZ TU PEDIDO AHORA",
      url: "https://nervefix.store/es/",
      style: "primary",
      size: "large",
    },
    {
      type: "paragraph",
      text: "Difícilmente recomendamos algún producto en nuestro sitio o revista, pero con las evidencias de 12 años de estudio que demuestran que este producto realmente funciona y la satisfacción garantizada, sentimos que nuestros lectores que lo necesiten se beneficiarán y podrán cambiar su vida para mejor.",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Además, la empresa responsable de la importación y venta de NERVEVIX en México confía tanto en su producto que ofrece una garantía de satisfacción del 100%.",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "header",
      headline: "Garantía",
      // subheadline: "",
      order: 1,
    },
    {
      type: "paragraph",
      text: "**NERVEVIX confía tanto en su tratamiento que ofrece una garantía del 100% de satisfacción**, es decir, el cliente puede probar el producto durante 90 días y, si no está satisfecho, solo debe contactar a la empresa por correo electrónico o WhatsApp y solicitar la devolución integral del dinero pagado. **Riesgo cero para el consumidor**.",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "¡Aprovecha **solo hoy descuento de hasta el 70% + Envío Gratis** en los primeros 150 frascos a partir de ahora!",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Nuestro portal ha reservado algunos frascos de NERVEVIX para nossos leitores. Obtienes hasta el 70% de descuento + Envío Gratis y puedes pagar en hasta 12 cuotas.",
      style: "normal",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "paragraph",
      text: "Atención, esta promoção é de lançamento, válida solo mientras dure el stock. Aprovecha con nuestro enlace exclusivo y obtén hasta el 70% de descuento y pago en hasta 12 cuotas haciendo clic en el enlace a continuación:",
      style: "quote",
      clickableWords: ["NERVEVIX"],
    },
    {
      type: "image",
      src: "/images/nervefix2.webp",
      alt: "Demonstração do tratamento",
      caption: "",
      position: "center",
    },
    {
      type: "cta",
      text: "QUERO EXPERIMENTAR AGORA",
      url: "https://nervefix.store/es/",
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
        image: "/images/nervefix2.webp",
        price: "R$ 197,00",
        discount: "R$ 97,00", // alterar valores
        cta: "COMPRAR CON DESCUENTO",
      },
    ],
  },
  comments: {
    enabled: true, // Ativa a seção de comentários
    title: "138 COMENTARIOS", // Título da seção
    list: [
      {
        author: "Isabel Rodriguez", // Nome do autor do comentário
        avatar: "/images/dep4.webp", // Foto do autor
        date: "2 dias atrás", // Data do comentário
        content:
          "Vine a testificar el milagro, la bendición que este tratamiento me proporcionó, un milagro que acaba de ocurrir aquí conmigo. Estaba acostada con mucho dolor en el nervio ciático, tenía una compresa de hielo en el glúteo que era lo único que aliviaba, pero solo por unas 2 horas, luego el dolor volvía de nuevo. Era horrible, ni siquiera podía dormir bien, no encontraba posición, ni acostada, ni de pie, ni sentada. Ya había hecho innumerables ejercicios y nada resolvía. Fue entonces cuando encontré este artículo y logré hacer el tratamiento, ha pasado una semana y ya no siento nada, ¡qué alivio! Dios actúa de maneras múltiples. ¡Glorias! Ya no soportaba más sufrir con estos dolores, la gente no entiende cuánto sufrimos. ",
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
        author: "Laura Martínez",
        avatar: "/images/dep5.webp",
        date: "2 dias atrás",
        content:
          "Volví para dejar un comentario: muy agradecida, usé NERVEVIX 2 veces al día durante 3 días hasta ahora. Solo tengo que agradecer, estoy muy bien, gracias.",
        likes: 35,
      },
      {
        author: "Patricia Pérez",
        avatar: "/images/dep6.webp",
        date: "5 dias atrás",
        content:
          "Nunca comento, pero tengo que decir que realmente acabó con mi dolor. Después de dos noches sin dormir, decidí usar este medicamento y fue lo único que alivió el dolor. ¡En serio! ¡Espero que tú también te beneficies con los consejos de este querido doctor! ¡Gracias!",
        likes: 12,
      },
      {
        author: "Arturo Vargas",
        avatar: "/images/dep7.webp",
        date: "6 dias atrás",
        content:
          "Mi abuelo comenzó a usar NERVEVIX hace un mes y los resultados son visibles. Ahora puede caminar mejor y se muestra más feliz y menos quejumbroso con el dolor. ¡Estamos muy agradecidos!",
        likes: 23,
      },
      {
        author: "Javier Jiménez",
        avatar: "/images/dep8.webp",
        date: "3 dias atrás",
        content:
          "NERVEVIX para quienes, como yo, vivían tomando analgésicos sin ver una mejora real. La diferencia es notable. ¡Vale cada centavo!",
        likes: 3,
      },
      {
        author: "Teresa Sánchez",
        avatar: "/images/dep9.webp",
        date: "4 dias atrás",
        content:
          "Adquirí NERVEVIX para mi marido que tiene neuropatía periférica. Él lo ha estado usando durante unas semanas y ya hemos notado una gran mejora. Es maravilloso verlo sin sufrimiento.",
        likes: 53,
      },
      {
        author: "Andrés Peña",
        avatar: "/images/dep10.webp",
        date: "3 dias atrás",
        content:
          "La primera vez que lo usé, no mejoré de inmediato, pero después de unos 2 días sentí alivio en las piernas. Mañana lo usaré de nuevo y continuaré usándolo hasta mejorar. Muchas gracias.",
        likes: 19,
      },
    ],
    allowNewComments: false, // Desativa a criação de novos comentários
  },
};

// Esta é a função principal que monta toda a página
// Você não precisa mexer aqui a menos que queira mudar a estrutura da página
export default async function Home() {
  // Await headers() call
  const headersList = await headers();
  const isVisitorBot = headersList.get("x-is-bot") === "true";

  // Select content based on visitor type
  const content = isVisitorBot ? BotPageContent : realUserContent;

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
