import { motion } from "framer-motion";

const parceiros = [
  "/logos/empresa1.png",
  "/logos/empresa2.png",
  "/logos/empresa3.png",
  "/logos/empresa4.png",
  "/logos/empresa5.png",
];

export default function Parceiros() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 mb-12"
        >
          Nossos Clientes
        </motion.h2>

        <div className="overflow-x-auto flex gap-8 py-6">
          {parceiros.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow flex items-center justify-center"
            >
              <img src={logo} alt={`Cliente ${i + 1}`} className="max-h-16 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
