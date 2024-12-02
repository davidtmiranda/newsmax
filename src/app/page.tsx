export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <span className="ml-4 text-sm hidden sm:block">MENÚ</span>
          </div>
          <div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              G1
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2">
            <article className="prose lg:prose-lg mx-auto">
              {/* Data e Autor */}
              <div className="text-sm text-gray-500 mb-4">
                Por Dr. Carlos Mendes – Atualizado em 8 de janeiro às 09:45h
              </div>

              {/* Citação em destaque */}
              <blockquote className="elementor-blockquote my-8">
                <p className="elementor-blockquote__content">
                  "A descoberta que está revolucionando a saúde cerebral e
                  memória de milhares de pessoas"
                </p>
                <footer>
                  <cite>Dr. Robert Smith, Neurocientista</cite>
                </footer>
              </blockquote>

              {/* Título Principal */}
              <h1 className="text-3xl font-bold text-primary mb-6">
                Cientistas descobrem fórmula natural que melhora memória e foco
                em 89% dos pacientes
              </h1>

              {/* Conteúdo inicial */}
              <p className="mb-4">
                Uma descoberta revolucionária no campo da neurociência está
                ajudando milhares de pessoas a recuperarem sua memória e clareza
                mental. O estudo, publicado no Journal of Neuroscience, revelou
                que uma combinação específica de nutrientes naturais pode
                melhorar significativamente a função cerebral...
              </p>

              {/* Imagem Principal */}
              <div className="my-8">
                <img
                  src="/images/brain-health.jpg"
                  alt="Pesquisa em neurociência"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Cientistas durante pesquisa no laboratório de neurociência
                </p>
              </div>

              {/* Seções de Conteúdo */}
              <h2 className="text-2xl font-bold text-primary mt-8">
                Como esta descoberta está mudando vidas
              </h2>

              <p className="mt-4">
                Os resultados são impressionantes: 89% dos participantes do
                estudo relataram melhora significativa na memória, concentração
                e clareza mental em apenas 3 semanas...
              </p>
            </article>
          </div>

          {/* Sidebar com informações relacionadas */}
          <aside className="hidden lg:block">
            <div className="sticky top-4 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Destaques da Pesquisa</h2>
              <ul className="space-y-4">
                <li>✓ Melhora da memória em 89% dos casos</li>
                <li>✓ Aumento do foco e concentração</li>
                <li>✓ Proteção contra declínio cognitivo</li>
                <li>✓ 100% natural e sem efeitos colaterais</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
