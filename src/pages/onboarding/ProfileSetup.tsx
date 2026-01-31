import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import { ArrowRight, Calendar, User2, Users } from "lucide-react";

const genders = [
  { id: "male", label: "Male", icon: "♂" },
  { id: "female", label: "Female", icon: "♀" },
  { id: "non-binary", label: "Non-binary", icon: "⚧" },
  { id: "prefer-not", label: "Prefer not to say", icon: "○" },
];

const ProfileSetup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();
  
  const maxBioLength = 150;
  const isValid = name.trim().length >= 2 && parseInt(age) >= 18 && gender;

  const handleContinue = () => {
    if (isValid) {
      navigate("/onboarding/vibes");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      
      <div className="flex-1 relative z-10 flex flex-col px-6 py-8">
        {/* Progress indicator */}
        <motion.div
          className="flex gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex-1 h-1 rounded-full bg-primary" />
          <div className="flex-1 h-1 rounded-full bg-muted" />
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
            Tell us about <span className="text-aurora">yourself</span>
          </h1>
          <p className="text-muted-foreground">
            Let's create your profile
          </p>
        </motion.div>
        
        {/* Form */}
        <div className="flex-1 space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <User2 className="w-4 h-4" />
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="input-premium w-full"
            />
          </motion.div>
          
          {/* Age */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="18+"
              min="18"
              max="100"
              className="input-premium w-full"
            />
            {age && parseInt(age) < 18 && (
              <motion.p
                className="text-destructive text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                You must be 18 or older to use RADIUS
              </motion.p>
            )}
          </motion.div>
          
          {/* Gender */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Gender
            </label>
            <div className="grid grid-cols-2 gap-3">
              {genders.map((g) => (
                <motion.button
                  key={g.id}
                  onClick={() => setGender(g.id)}
                  className={`p-4 rounded-2xl glass-card text-left transition-all ${
                    gender === g.id 
                      ? "border-primary bg-primary/10 ring-1 ring-primary" 
                      : "hover:bg-card-elevated"
                  }`}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-2xl mb-1 block">{g.icon}</span>
                  <span className={`text-sm font-medium ${gender === g.id ? "text-primary" : "text-foreground"}`}>
                    {g.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-muted-foreground">
                About Me (optional)
              </label>
              <span className={`text-xs ${bio.length >= maxBioLength ? "text-destructive" : "text-muted-foreground"}`}>
                {bio.length}/{maxBioLength}
              </span>
            </div>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, maxBioLength))}
              placeholder="A little bit about yourself..."
              rows={3}
              className="input-premium w-full resize-none"
            />
          </motion.div>
        </div>
        
        {/* Continue button */}
        <motion.button
          className={`w-full py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 mt-8 ${
            isValid 
              ? "btn-aurora text-primary-foreground" 
              : "glass-card text-muted-foreground cursor-not-allowed"
          }`}
          onClick={handleContinue}
          whileHover={isValid ? { scale: 1.02 } : {}}
          whileTap={isValid ? { scale: 0.98 } : {}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Continue
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileSetup;
