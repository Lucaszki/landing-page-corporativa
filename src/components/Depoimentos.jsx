import { motion } from "framer-motion";

export default function Depoimentos() {
  const depoimentos = [
    { nome: "João Silva", msg: "O site ficou incrível! A WebCraft superou nossas expectativas." },
    { nome: "Maria Souza", msg: "Profissionais dedicados e entregam resultados de qualidade." },
    { nome: "Carlos Pereira", msg: "Recomendo para qualquer empresa que queira crescer online." },
  ];

  return (
    <section id="depoimentos" className="py-20 px-6 max-w-6xl mx-auto text-center bg-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-900 mb-12"
      >
        Depoimentos
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {depoimentos.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <p className="text-gray-600 mb-4">"{d.msg}"</p>
            <h3 className="font-semibold text-gray-800">{d.nome}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
