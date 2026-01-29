import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import Logo from "@/components/Logo";
import VibeOrb from "@/components/VibeOrb";

const vibes = [
  { id: "adventure", label: "Adventure", emoji: "🌄", gradient: "linear-gradient(135deg, hsl(185 100% 45%), hsl(185 100% 60%))" },
  { id: "chill", label: "Chill", emoji: "🌊", gradient: "linear-gradient(135deg, hsl(220 80% 50%), hsl(260 70% 60%))" },
  { id: "creative", label: "Creative", emoji: "✨", gradient: "linear-gradient(135deg, hsl(295 80% 50%), hsl(320 80% 60%))" },
  { id: "social", label: "Social", emoji: "🎉", gradient: "linear-gradient(135deg, hsl(35 100% 50%), hsl(15 100% 55%))" },
  { id: "mindful", label: "Mindful", emoji: "🧘", gradient: "linear-gradient(135deg, hsl(160 60% 45%), hsl(185 70% 55%))" },
  { id: "foodie", label: "Foodie", emoji: "🍜", gradient: "linear-gradient(135deg, hsl(10 85% 55%), hsl(35 100% 55%))" },
  { id: "nightowl", label: "Night Owl", emoji: "🦉", gradient: "linear-gradient(135deg, hsl(260 60% 40%), hsl(280 70% 55%))" },
  { id: "active", label: "Active", emoji: "⚡", gradient: "linear-gradient(135deg, hsl(45 100% 55%), hsl(35 100% 60%))" },
  { id: "romantic", label: "Romantic", emoji: "💫", gradient: "linear-gradient(135deg, hsl(340 80% 55%), hsl(320 70% 60%))" },
];

const Discover = () => {
  const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
  const navigate = useNavigate();

  const toggleVibe = (id: string) => {
    setSelectedVibes(prev => 
      prev.includes(id) 
        ? prev.filter(v => v !== id)
        : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedVibes.length > 0) {
      navigate("/map");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      
      {/* Header */}
      <motion.header
        className="relative z-10 pt-12 pb-6 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo size="sm" />
      </motion.header>
      
      {/* Main content */}
      <div className="flex-1 relative z-10 flex flex-col px-6 pb-32">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-3">
            What's your <span className="text-aurora">vibe</span>?
          </h1>
          <p className="text-muted-foreground text-lg">
            Select the energies that resonate with you
          </p>
        </motion.div>
        
        {/* Vibe grid */}
        <div className="grid grid-cols-3 gap-6 justify-items-center">
          {vibes.map((vibe, index) => (
            <VibeOrb
              key={vibe.id}
              label={vibe.label}
              emoji={vibe.emoji}
              gradient={vibe.gradient}
              selected={selectedVibes.includes(vibe.id)}
              onClick={() => toggleVibe(vibe.id)}
              delay={0.3 + index * 0.05}
            />
          ))}
        </div>
        
        {/* Selected count */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedVibes.length > 0 ? 1 : 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-muted-foreground">
            {selectedVibes.length === 0 
              ? "Select at least one vibe" 
              : `${selectedVibes.length} vibe${selectedVibes.length > 1 ? 's' : ''} selected`
            }
          </span>
        </motion.div>
      </div>
      
      {/* Fixed bottom CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
            selectedVibes.length > 0 
              ? "btn-aurora text-primary-foreground" 
              : "glass-card text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleContinue}
          whileHover={selectedVibes.length > 0 ? { scale: 1.02 } : {}}
          whileTap={selectedVibes.length > 0 ? { scale: 0.98 } : {}}
        >
          Find Your People
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Discover;
