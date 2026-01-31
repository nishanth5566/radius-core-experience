import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Camera, Plus, Sparkles, X } from "lucide-react";

const PhotosSetup = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const navigate = useNavigate();
  const maxPhotos = 6;

  const handleAddPhoto = (index: number) => {
    // Simulate adding a photo with a placeholder
    const placeholders = [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop",
    ];
    
    if (photos.length < maxPhotos) {
      setPhotos([...photos, placeholders[photos.length % placeholders.length]]);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    navigate("/map");
  };

  const handleSkip = () => {
    navigate("/map");
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
          <div className="flex-1 h-1 rounded-full bg-primary" />
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Add your <span className="text-aurora">photos</span>
          </h1>
          <p className="text-muted-foreground">
            Show your best self to the world
          </p>
        </motion.div>

        {/* AI tip */}
        <motion.div
          className="glass-card rounded-2xl p-4 mb-6 flex items-start gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="text-sm text-foreground font-medium">Pro tip</p>
            <p className="text-xs text-muted-foreground">
              Profiles with 3+ photos get 5× more connections
            </p>
          </div>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(maxPhotos)].map((_, index) => {
            const photo = photos[index];
            const isMain = index === 0;
            
            return (
              <motion.div
                key={index}
                className={`relative ${isMain ? "col-span-2 row-span-2" : ""}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                {photo ? (
                  <div className={`relative overflow-hidden rounded-2xl ${isMain ? "aspect-square" : "aspect-square"}`}>
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      onClick={() => handleRemovePhoto(index)}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-background/80 backdrop-blur flex items-center justify-center"
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </motion.button>
                    {isMain && (
                      <div className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
                        Main
                      </div>
                    )}
                  </div>
                ) : (
                  <motion.button
                    onClick={() => handleAddPhoto(index)}
                    className={`w-full glass-card rounded-2xl flex flex-col items-center justify-center gap-2 transition-all hover:bg-card-elevated ${
                      isMain ? "aspect-square" : "aspect-square"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      {isMain ? (
                        <Camera className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {isMain ? "Add main" : "Add"}
                    </span>
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Photo count */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className={`text-sm ${photos.length >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            {photos.length}/{maxPhotos} photos added
          </span>
        </motion.div>
      </div>

      {/* Fixed bottom CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background to-transparent z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex gap-3">
          <motion.button
            className="flex-1 py-4 rounded-full font-semibold glass-card text-muted-foreground"
            onClick={handleSkip}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Skip for now
          </motion.button>
          
          <motion.button
            className={`flex-1 py-4 rounded-full font-semibold flex items-center justify-center gap-2 ${
              photos.length >= 1
                ? "btn-aurora text-primary-foreground"
                : "glass-card text-muted-foreground cursor-not-allowed"
            }`}
            onClick={handleContinue}
            whileHover={photos.length >= 1 ? { scale: 1.02 } : {}}
            whileTap={photos.length >= 1 ? { scale: 0.98 } : {}}
          >
            Finish
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default PhotosSetup;
