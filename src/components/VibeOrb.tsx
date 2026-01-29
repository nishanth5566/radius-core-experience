import { motion } from "framer-motion";

interface VibeOrbProps {
  label: string;
  emoji: string;
  gradient: string;
  selected?: boolean;
  onClick: () => void;
  delay?: number;
}

const VibeOrb = ({ 
  label, 
  emoji, 
  gradient, 
  selected = false, 
  onClick, 
  delay = 0 
}: VibeOrbProps) => {
  return (
    <motion.button
      className="flex flex-col items-center gap-3 group"
      onClick={onClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: [0.34, 1.56, 0.64, 1] 
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-24 h-24 rounded-full cursor-pointer"
        animate={selected ? {
          scale: [1, 1.1, 1.05],
          boxShadow: [
            `0 0 30px ${gradient.includes("185") ? "hsl(185 100% 60% / 0.4)" : gradient.includes("295") ? "hsl(295 80% 60% / 0.4)" : "hsl(35 100% 60% / 0.4)"}`,
            `0 0 50px ${gradient.includes("185") ? "hsl(185 100% 60% / 0.6)" : gradient.includes("295") ? "hsl(295 80% 60% / 0.6)" : "hsl(35 100% 60% / 0.6)"}`,
            `0 0 40px ${gradient.includes("185") ? "hsl(185 100% 60% / 0.5)" : gradient.includes("295") ? "hsl(295 80% 60% / 0.5)" : "hsl(35 100% 60% / 0.5)"}`,
          ],
        } : {}}
        transition={{ duration: 0.4 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
          style={{
            background: gradient,
            filter: "blur(20px)",
          }}
          animate={selected ? { opacity: 0.6 } : {}}
          transition={{ duration: 0.3 }}
        />
        
        {/* Main orb */}
        <div
          className="relative w-full h-full rounded-full flex items-center justify-center text-3xl"
          style={{
            background: gradient,
            border: selected ? "2px solid rgba(255,255,255,0.5)" : "2px solid rgba(255,255,255,0.1)",
          }}
        >
          <motion.span
            animate={selected ? { scale: [1, 1.2, 1.1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {emoji}
          </motion.span>
        </div>
        
        {/* Selection ring */}
        {selected && (
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-primary/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      
      <motion.span
        className={`text-sm font-medium transition-colors duration-300 ${
          selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {label}
      </motion.span>
    </motion.button>
  );
};

export default VibeOrb;
