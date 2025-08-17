import { motion } from "framer-motion";

export default function Contato() {
  return (
    <section id="contato" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Fale Conosco
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input type="text" placeholder="Nome" className="p-3 border rounded-lg" />
        <input type="email" placeholder="Email" className="p-3 border rounded-lg" />
        <textarea placeholder="Mensagem" className="p-3 border rounded-lg"></textarea>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Enviar
        </button>
      </motion.form>
    </section>
  );
}
