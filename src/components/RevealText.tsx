import { motion } from "framer-motion";

// Definimos qué tipos de datos recibe el componente
interface Props {
  text: string;     // Obligatorio: siempre será un texto
  delay?: number;   // Opcional: si no se envía, será un número (ya lo inicializas a 0)
}

export const RevealText = ({ text, delay = 0 }: Props) => {
  return (
    <div className="overflow-hidden inline-block px-6 -mx-6 py-2">
      <motion.span
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.33, 1, 0.68, 1], 
          delay: delay 
        }}
        className="inline-block whitespace-nowrap font-zalando font-bold"
      >
        {text}
      </motion.span>
    </div>
  );
};