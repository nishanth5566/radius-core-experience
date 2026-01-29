import { motion } from "framer-motion";

interface BreathingOrbProps {
  size?: number;
  color?: "primary" | "secondary" | "accent";
  delay?: number;
  className?: string;
}

const colorMap = {
  primary: {
    main: "hsl(185 100% 60%)",
    glow: "hsl(185 100% 60% / 0.4)",
  },
  secondary: {
    main: "hsl(295 80% 60%)",
    glow: "hsl(295 80% 60% / 0.4)",
  },
  accent: {
    main: "hsl(35 100% 60%)",
    glow: "hsl(35 100% 60% / 0.4)",
  },
};

const BreathingOrb = ({ 
  size = 100, 
  color = "primary", 
  delay = 0,
  className = "" 
}: BreathingOrbProps) => {
  const colors = colorMap[color];

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Glow layer */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      />
      
      {/* Main orb */}
      <motion.div
        className="absolute inset-[15%] rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.main}, transparent 70%)`,
          boxShadow: `0 0 40px ${colors.glow}`,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        }}
      />
      
      {/* Inner highlight */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.3,
          height: size * 0.3,
          left: "25%",
          top: "20%",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default BreathingOrb;
