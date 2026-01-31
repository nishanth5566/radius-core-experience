import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight } from "lucide-react";

const vibes = [
  { id: "spiritual", label: "Spiritual", emoji: "🌿", gradient: "linear-gradient(135deg, hsl(160 60% 45%), hsl(140 70% 55%))" },
  { id: "fitness", label: "Fitness", emoji: "🏋️", gradient: "linear-gradient(135deg, hsl(10 85% 55%), hsl(25 90% 55%))" },
  { id: "yoga", label: "Yoga", emoji: "🧘", gradient: "linear-gradient(135deg, hsl(280 60% 50%), hsl(260 70% 60%))" },
  { id: "tech", label: "Tech", emoji: "💻", gradient: "linear-gradient(135deg, hsl(200 80% 50%), hsl(220 90% 60%))" },
  { id: "travel", label: "Travel", emoji: "✈️", gradient: "linear-gradient(135deg, hsl(185 100% 45%), hsl(195 100% 55%))" },
  { id: "music", label: "Music", emoji: "🎧", gradient: "linear-gradient(135deg, hsl(320 70% 55%), hsl(340 80% 60%))" },
  { id: "startup", label: "Startup", emoji: "🚀", gradient: "linear-gradient(135deg, hsl(35 100% 50%), hsl(45 100% 55%))" },
  { id: "art", label: "Art", emoji: "🎨", gradient: "linear-gradient(135deg, hsl(295 80% 50%), hsl(310 80% 60%))" },
  { id: "foodie", label: "Foodie", emoji: "🍜", gradient: "linear-gradient(135deg, hsl(25 100% 50%), hsl(15 100% 55%))" },
  { id: "nature", label: "Nature", emoji: "🌄", gradient: "linear-gradient(135deg, hsl(120 50% 45%), hsl(100 60% 50%))" },
  { id: "gaming", label: "Gaming", emoji: "🎮", gradient: "linear-gradient(135deg, hsl(260 70% 55%), hsl(280 80% 60%))" },
  { id: "reading", label: "Reading", emoji: "📚", gradient: "linear-gradient(135deg, hsl(30 60% 45%), hsl(20 70% 50%))" },
];

const VibesSetup = () => {
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
    if (selectedVibes.length >= 3) {
      navigate("/onboarding/photos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />

      <div className="flex-1 relative z-10 flex flex-col px-6 py-8 pb-32">
        {/* Progress indicator */}
        <motion.div
          className="flex gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-1 h-1 rounded-full bg-primary" />
          <div className="flex-1 h-1 rounded-full bg-primary" />
          <div className="flex-1 h-1 rounded-full bg-muted" />
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Choose your <span className="text-aurora">vibes</span>
          </h1>
          <p className="text-muted-foreground">
            Select at least 3 that resonate with you
          </p>
        </motion.div>

        {/* Vibes grid */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {vibes.map((vibe, index) => {
            const isSelected = selectedVibes.includes(vibe.id);
            return (
              <motion.button
                key={vibe.id}
                onClick={() => toggleVibe(vibe.id)}
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.03 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Glow effect when selected */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-50 blur-xl"
                    style={{ background: vibe.gradient }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Card */}
                <motion.div
                  className={`relative w-full h-full rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    isSelected 
                      ? "ring-2 ring-white/30" 
                      : "glass-card hover:bg-card-elevated"
                  }`}
                  style={isSelected ? { background: vibe.gradient } : {}}
                  animate={{ scale: isSelected ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="text-3xl">{vibe.emoji}</span>
                  <span className={`text-xs font-medium ${isSelected ? "text-white" : "text-foreground"}`}>
                    {vibe.label}
                  </span>
                </motion.div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Selected count */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className={`text-sm ${selectedVibes.length >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            {selectedVibes.length}/3 minimum selected
          </span>
        </motion.div>
      </div>

      {/* Fixed bottom CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 ${
            selectedVibes.length >= 3
              ? "btn-aurora text-primary-foreground"
              : "glass-card text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleContinue}
          whileHover={selectedVibes.length >= 3 ? { scale: 1.02 } : {}}
          whileTap={selectedVibes.length >= 3 ? { scale: 0.98 } : {}}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default VibesSetup;
