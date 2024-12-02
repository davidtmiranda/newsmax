export default function Header() {
  return (
    <header className="header-highlight">
      <nav className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <button className="flex items-center text-lg px-4 py-2 text-white hover:text-gray-200">
            <span className="mr-2">≡</span> Menu
          </button>
        </div>
        <div className="header-title">BEM ESTAR</div>
        <div className="w-20"></div>
      </nav>
    </header>
  );
}
