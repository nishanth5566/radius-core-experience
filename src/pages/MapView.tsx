import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MapEntity from "@/components/MapEntity";
import GlassCard from "@/components/GlassCard";

// Mock data for map entities
const entities = [
  { 
    id: 1, 
    name: "Alex", 
    vibe: "Adventure · Active", 
    distance: "0.3 mi", 
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    position: { x: 25, y: 30 },
    color: "primary" as const
  },
  { 
    id: 2, 
    name: "Jordan", 
    vibe: "Creative · Mindful", 
    distance: "0.5 mi", 
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    position: { x: 65, y: 25 },
    color: "secondary" as const
  },
  { 
    id: 3, 
    name: "Sam", 
    vibe: "Social · Foodie", 
    distance: "0.7 mi", 
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    position: { x: 45, y: 55 },
    color: "accent" as const
  },
  { 
    id: 4, 
    name: "Riley", 
    vibe: "Night Owl · Chill", 
    distance: "1.2 mi", 
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    position: { x: 75, y: 60 },
    color: "primary" as const
  },
  { 
    id: 5, 
    name: "Morgan", 
    vibe: "Romantic · Creative", 
    distance: "0.9 mi", 
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    position: { x: 20, y: 65 },
    color: "secondary" as const
  },
];

const MapView = () => {
  const [radiusSize, setRadiusSize] = useState(1);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStartExploring = () => {
    toast({
      title: "Exploring nearby",
      description: `Finding people within ${radiusSize.toFixed(1)} miles of you...`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 60% / 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Header */}
      <motion.header
        className="relative z-20 pt-12 pb-4 px-6 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo size="sm" />
        <motion.button
          className="glass-card px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/discover")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Edit Vibes
        </motion.button>
      </motion.header>
      
      {/* Map container */}
      <div className="flex-1 relative z-10 px-6">
        {/* Radius indicator */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
          style={{
            width: `${radiusSize * 280}px`,
            height: `${radiusSize * 280}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
        
        {/* Center point (You) */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 w-16 h-16 rounded-full bg-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <div className="w-16 h-16 rounded-full bg-gradient-aurora flex items-center justify-center ring-4 ring-background shadow-glow-md">
              <span className="text-2xl">✨</span>
            </div>
          </div>
          <motion.p
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            You
          </motion.p>
        </motion.div>
        
        {/* Map entities */}
        <div className="absolute inset-0">
          {entities.map((entity, index) => (
            <MapEntity
              key={entity.id}
              {...entity}
              delay={0.6 + index * 0.15}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom panel */}
      <motion.div
        className="relative z-20 px-6 pb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <GlassCard elevated className="mb-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Your Radius</h3>
              <p className="text-sm text-muted-foreground">
                {entities.length} people nearby
              </p>
            </div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              animate={{
                boxShadow: ["0 0 0 0 hsl(185 100% 60% / 0)", "0 0 0 8px hsl(185 100% 60% / 0.1)", "0 0 0 0 hsl(185 100% 60% / 0)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Live
            </motion.div>
          </div>
          
          {/* Radius slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0.1 mi</span>
              <span className="text-foreground font-medium">{radiusSize.toFixed(1)} mi</span>
              <span>5 mi</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={radiusSize}
              onChange={(e) => setRadiusSize(parseFloat(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, hsl(185 100% 60%) 0%, hsl(185 100% 60%) ${(radiusSize / 5) * 100}%, hsl(240 10% 20%) ${(radiusSize / 5) * 100}%, hsl(240 10% 20%) 100%)`,
              }}
            />
          </div>
        </GlassCard>
        
        <motion.button
          className="btn-aurora w-full py-4 text-lg font-semibold text-primary-foreground"
          onClick={handleStartExploring}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Exploring
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MapView;
