import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Sobre a WebCraft
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-600 max-w-3xl mx-auto"
      >
        Somos especialistas em transformar ideias em experiências digitais. Criamos sites, aplicativos e soluções online que ajudam empresas a crescer e se destacar no mercado.
      </motion.p>
    </section>
  );
}
