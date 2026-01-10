import { motion } from "framer-motion";

export const RevealText = ({ text, delay = 0 }) => {
  return (
    // Añadimos px-4 (espacio lateral) y py-2 (espacio vertical para las tildes o letras bajas)
    // El -mx-4 compensa el px-4 para que el centrado sea perfecto
    <div className="overflow-hidden inline-block px-6 -mx-6 py-2">
      <motion.span
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1], 
          delay: delay 
        }}
        className="inline-block whitespace-nowrap"
      >
        {text}
      </motion.span>
    </div>
  );
};