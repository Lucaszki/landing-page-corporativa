import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-h-screen flex flex-col justify-center items-center px-6 text-center">
      
      {/* Título animado */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-6"
      >
      Conectando Tecnologia e Negócios
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg max-w-2xl mb-8"
      >
        Transformamos ideias em experiências digitais modernas, rápidas e responsivas.
      </motion.p>

      {/* Botão CTA */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contato"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        Saiba Mais
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.a>

      {/* Bloco de ícones abaixo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl"
      >
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
          {/* Ícone SVG simples */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Desenvolvedores</h3>
          <p>Sites e apps modernos, responsivos e seguros.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Empresas</h3>
          <p>Fortaleça sua presença online e conquiste clientes.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Parceiros</h3>
          <p>Conecte sua marca a novas oportunidades de negócio.</p>
        </div>
      </motion.div>
    </section>
  );
}
