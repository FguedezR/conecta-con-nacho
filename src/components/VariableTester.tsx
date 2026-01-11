import { useState } from "react";
import { motion } from "framer-motion";

export default function VariableTester() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="w-full bg-[#0d0d0d] rounded-[3rem] p-8 md:p-20 overflow-hidden border border-white/5">
      <div className="flex justify-between items-center mb-16">
        <div className="flex flex-col">
          <span className="text-nacho-lima font-bold uppercase tracking-[0.3em] text-[10px]">
            Variable Font Engine
          </span>
          <span className="text-white/20 text-[10px] uppercase tracking-widest mt-1">
            Interpolating: Weight 100 — 900
          </span>
        </div>
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="bg-nacho-lima text-nacho-azul px-8 py-3 rounded-full font-bold text-xs uppercase hover:bg-white transition-colors"
        >
          {isPaused ? "Play Engine" : "Pause Engine"}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        {/* PALABRA 1: ROMAN VARIABLE */}
        <motion.p
          style={{ fontFamily: "'Zalando Sans Variable', sans-serif" }}
          animate={isPaused ? {} : {
            fontVariationSettings: [
              "'wght' 100", 
              "'wght' 900", 
              "'wght' 100"
            ],
            letterSpacing: ["0.05em", "-0.02em", "0.05em"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear" // 'linear' o 'easeInOut' para ese efecto respiración
          }}
          className="text-6xl md:text-[7vw] leading-none text-nacho-blanco text-center select-none"
        >
          Zalando Sans
        </motion.p>
        
        {/* PALABRA 2: ITALIC VARIABLE */}
        <motion.p
          style={{ 
            fontFamily: "'Zalando Sans Variable', sans-serif",
            fontStyle: "italic" 
          }}
          animate={isPaused ? {} : {
            fontVariationSettings: [
              "'wght' 900", 
              "'wght' 100", 
              "'wght' 900"
            ],
            letterSpacing: ["-0.02em", "0.05em", "-0.02em"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-6xl md:text-[7vw] leading-none text-nacho-lima text-center select-none"
        >
          SemiExpanded
        </motion.p>
      </div>

      <div className="mt-20 flex justify-between items-center border-t border-white/10 pt-8">
        <div className="text-white/20 text-[10px] font-bold tracking-[0.3em]">VERSION 1.0</div>
        <div className="flex gap-4">
             <div className="w-2 h-2 rounded-full bg-nacho-lima animate-pulse"></div>
             <div className="w-2 h-2 rounded-full bg-nacho-azul"></div>
        </div>
      </div>
    </div>
  );
}