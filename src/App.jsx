import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Parceiros from "./components/Parceiros";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Features />
      <Sobre />
      <Servicos />
      <Parceiros />
      <Depoimentos />
      <Contato />
      <Footer />
    </div>
  );
}
