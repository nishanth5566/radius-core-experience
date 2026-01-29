import { motion } from "framer-motion";
import { useState } from "react";

interface MapEntityProps {
  name: string;
  vibe: string;
  distance: string;
  avatar: string;
  position: { x: number; y: number };
  color: "primary" | "secondary" | "accent";
  delay?: number;
}

const colorStyles = {
  primary: {
    ring: "ring-primary/60",
    glow: "shadow-glow-sm",
    bg: "bg-primary/20",
  },
  secondary: {
    ring: "ring-secondary/60",
    glow: "shadow-glow-secondary",
    bg: "bg-secondary/20",
  },
  accent: {
    ring: "ring-accent/60",
    glow: "shadow-glow-accent",
    bg: "bg-accent/20",
  },
};

const MapEntity = ({ 
  name, 
  vibe, 
  distance, 
  avatar, 
  position, 
  color,
  delay = 0 
}: MapEntityProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = colorStyles[color];

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Breathing pulse */}
      <motion.div
        className={`absolute inset-0 rounded-full ${styles.bg}`}
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
          delay: delay * 0.5,
        }}
      />
      
      {/* Avatar container */}
      <motion.div
        className={`relative w-14 h-14 rounded-full ring-2 ${styles.ring} ${styles.glow} overflow-hidden`}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
      >
        <img 
          src={avatar} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Expanded card */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 glass-card-elevated rounded-2xl p-4 min-w-[160px]"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={isExpanded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -10, scale: 0.9, pointerEvents: "none" }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-semibold text-foreground text-center">{name}</p>
        <p className="text-xs text-muted-foreground text-center mt-1">{vibe}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className={`w-2 h-2 rounded-full ${styles.bg} ${styles.ring.replace("/60", "")}`} />
          <span className="text-xs text-primary">{distance}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MapEntity;
