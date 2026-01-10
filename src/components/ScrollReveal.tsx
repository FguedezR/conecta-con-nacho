import { motion } from "framer-motion";

export const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      // 'once: true' asegura que la animación no se revierta al hacer scroll hacia arriba
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1], 
        delay: delay 
      }}
    >
      {children}
    </motion.div>
  );
};