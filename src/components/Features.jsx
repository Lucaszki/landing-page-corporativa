import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, HeartHandshake, BarChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-purple-500" />,
      title: "Segurança e Performance",
      desc: "Sites rápidos, seguros e otimizados para todos os dispositivos.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-blue-500" />,
      title: "Design Personalizado",
      desc: "Layouts modernos, únicos e totalmente adaptáveis ao seu negócio.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-pink-500" />,
      title: "Suporte Profissional",
      desc: "Acompanhamento constante e manutenção de qualidade.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-yellow-500" />,
      title: "Resultados Reais",
      desc: "Estratégias de SEO e marketing que geram crescimento real.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Nossas Principais Vantagens
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
