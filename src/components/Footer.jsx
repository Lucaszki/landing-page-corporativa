import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white py-6 text-center"
    >
      &copy; {new Date().getFullYear()} WebCraft. Todos os direitos reservados.
    </motion.footer>
  );
}
