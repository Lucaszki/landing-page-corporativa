import { motion } from "framer-motion";

export default function Servicos() {
  const servicos = [
    { titulo: "Desenvolvimento Web", desc: "Sites modernos, responsivos e de alta performance." },
    { titulo: "Aplicativos Mobile", desc: "Apps nativos e híbridos para Android e iOS." },
    { titulo: "SEO & Marketing Digital", desc: "Atraia mais clientes e aumente sua presença online." },
  ];

  return (
    <section id="servicos" className="py-20 px-6 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center text-gray-900 mb-12"
      >
        Nossos Serviços
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicos.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-purple-600 mb-2">{s.titulo}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
