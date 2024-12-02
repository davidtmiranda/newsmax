# Tutorial: Como Criar Páginas de Advertorial

Este guia vai te ajudar a criar páginas de advertorial sem precisar entender programação.

## Índice

1. [Estrutura Básica](#estrutura-básica)
2. [Tipos de Seções](#tipos-de-seções)
3. [Exemplos Práticos](#exemplos-práticos)

## Estrutura Básica

Para criar uma página, você precisa fornecer:

- Metadados (data, autor, categoria)
- URL do CTA (link principal)
- Seções de conteúdo

### Exemplo Básico:

Vou criar um arquivo de tutorial em markdown explicando de forma simples como criar páginas usando este sistema.

### [docs/TUTORIAL.md]

````markdown
# Tutorial: Como Criar Páginas de Advertorial

Este guia vai te ajudar a criar páginas de advertorial sem precisar entender programação.

## Índice

1. [Estrutura Básica](#estrutura-básica)
2. [Tipos de Seções](#tipos-de-seções)
3. [Exemplos Práticos](#exemplos-práticos)

## Estrutura Básica

Para criar uma página, você precisa fornecer:

- Metadados (data, autor, categoria)
- URL do CTA (link principal)
- Seções de conteúdo

### Exemplo Básico:

```json
{
  "meta": {
    "date": "Atualizado em 8 de janeiro às 09:45h",
    "author": "Dr. Carlos Silva",
    "category": "Saúde e Bem-estar"
  },
  "ctaUrl": "https://exemplo.com.br/comprar",
  "sections": [
    // Seções vão aqui
  ]
}
```
````

## Tipos de Seções

### 1. Títulos (Header)

```json
{
  "type": "header",
  "headline": "Título Principal da Página",
  "subheadline": "Subtítulo opcional"
}
```

### 2. Parágrafos

```json
{
  "type": "paragraph",
  "text": "Seu texto aqui...",
  "style": "normal", // Opções: "normal", "highlight", "quote"
  "clickableWords": ["palavra1", "frase completa"] // Palavras que serão links
}
```

### 3. Imagens

```json
{
  "type": "image",
  "src": "/images/sua-imagem.jpg",
  "alt": "Descrição da imagem",
  "caption": "Legenda da imagem",
  "position": "center" // Opções: "left", "center", "right"
}
```

### 4. Citações

```json
{
  "type": "quote",
  "text": "Texto da citação aqui",
  "author": "Nome do autor",
  "image": "/images/autor.jpg", // Opcional
  "highlight": true // Opcional, destaca a citação
}
```

### 5. Lista de Benefícios

```json
{
  "type": "benefits",
  "items": [
    { "text": "Primeiro benefício", "icon": "check" },
    { "text": "Segundo benefício", "icon": "star" }
  ]
}
```

### 6. Botão de CTA

```json
{
  "type": "cta",
  "text": "CLIQUE AQUI PARA COMPRAR",
  "style": "primary", // Opções: "primary", "secondary"
  "size": "large" // Opções: "small", "medium", "large"
}
```

## Dicas Importantes

1. **Palavras Clicáveis**: Para fazer palavras específicas virarem links:

```json
{
  "type": "paragraph",
  "text": "Este produto revolucionário está transformando vidas.",
  "clickableWords": ["revolucionário", "transformando vidas"]
}
```

2. **Ordem das Seções**: Use `order` para controlar a ordem:

```json
{
  "type": "paragraph",
  "text": "Primeiro parágrafo",
  "order": 1
}
```

3. **Imagens**: Sempre inclua descrições nas imagens:

```json
{
  "type": "image",
  "src": "/images/produto.jpg",
  "alt": "Foto do produto sendo usado",
  "caption": "Resultados após 7 dias de uso"
}
```

## Exemplos Práticos

### Exemplo de Página Completa

```json
{
  "meta": {
    "date": "Atualizado em 8 de janeiro às 09:45h",
    "author": "Dr. Carlos Silva"
  },
  "ctaUrl": "https://exemplo.com.br/comprar",
  "sections": [
    {
      "type": "header",
      "headline": "Nova Descoberta Para Dores nas Articulações",
      "subheadline": "Método natural aprovado por especialistas"
    },
    {
      "type": "paragraph",
      "text": "Uma descoberta revolucionária está transformando a vida de milhares de brasileiros.",
      "clickableWords": ["descoberta revolucionária"]
    },
    {
      "type": "image",
      "src": "/images/produto.jpg",
      "alt": "Produto em uso",
      "position": "center"
    },
    {
      "type": "cta",
      "text": "QUERO EXPERIMENTAR AGORA",
      "style": "primary",
      "size": "large"
    }
  ]
}
```

## Observações Finais

- Mantenha os textos claros e diretos
- Use imagens de boa qualidade
- Distribua CTAs ao longo do conteúdo
- Inclua depoimentos e provas sociais
- Sempre revise o conteúdo antes de publicar

Para mais informações ou dúvidas, consulte a equipe técnica.

```

Este tutorial fornece uma base sólida para que pessoas sem conhecimento técnico possam criar páginas de advertorial facilmente. O arquivo deve ser colocado na pasta `docs` do projeto e pode ser expandido conforme necessário.

Made changes.
```
