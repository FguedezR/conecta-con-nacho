import { motion } from "framer-motion";

export const RevealText = ({ text, delay = 0 }) => {
  return (
    <div className="overflow-hidden inline-block">
      <motion.span
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: delay }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
};