export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-purple-600">SUA EMPRESA</h1>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><a href="#sobre" className="hover:text-purple-600">Sobre</a></li>
          <li><a href="#servicos" className="hover:text-purple-600">Serviços</a></li>
          <li><a href="#depoimentos" className="hover:text-purple-600">Depoimentos</a></li>
          <li><a href="#contato" className="hover:text-purple-600">Contato</a></li>
        </ul>
        <a
          href="#contato"
          className="hidden md:inline bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Solicitar Orçamento
        </a>
      </div>
    </nav>
  );
}
