import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import Logo from "@/components/Logo";
import BreathingOrb from "@/components/BreathingOrb";

const Entry = () => {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleBegin = () => {
    if (!showInput) {
      setShowInput(true);
    } else if (email) {
      navigate("/discover");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <AuroraBackground />
      
      {/* Floating orbs decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <BreathingOrb 
          size={180} 
          color="primary" 
          delay={0.2}
          className="absolute -left-20 top-1/4" 
        />
        <BreathingOrb 
          size={120} 
          color="secondary" 
          delay={0.5}
          className="absolute right-10 top-1/3" 
        />
        <BreathingOrb 
          size={80} 
          color="accent" 
          delay={0.8}
          className="absolute left-1/4 bottom-1/4" 
        />
      </div>
      
      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-md w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <Logo size="xl" />
        
        {/* Tagline */}
        <motion.p
          className="mt-6 text-xl text-muted-foreground font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Find your people.
          <br />
          <span className="text-foreground">Within your radius.</span>
        </motion.p>
        
        {/* Divider line */}
        <motion.div
          className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        
        {/* Email input - reveals on click */}
        <motion.div
          className="w-full space-y-4"
          initial={{ opacity: 0, height: 0 }}
          animate={showInput ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-premium text-center"
            initial={{ y: 20 }}
            animate={showInput ? { y: 0 } : { y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          className="btn-aurora mt-8 px-12 py-4 text-lg font-semibold text-primary-foreground"
          onClick={handleBegin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {showInput ? "Continue" : "Begin"}
        </motion.button>
        
        {/* Subtle hint */}
        <motion.p
          className="mt-8 text-sm text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Your vibe, your radius, your people
        </motion.p>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default Entry;
