import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuroraBackground from "@/components/AuroraBackground";
import Logo from "@/components/Logo";
import { Apple, Mail } from "lucide-react";

const Auth = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSocialLogin = (provider: string) => {
    setIsLoading(provider);
    // Simulate login
    setTimeout(() => {
      setIsLoading(null);
      navigate("/onboarding/profile");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      
      <div className="flex-1 relative z-10 flex flex-col justify-between px-6 py-12">
        {/* Logo and tagline */}
        <motion.div
          className="text-center pt-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Logo size="lg" />
          <motion.p
            className="text-muted-foreground text-lg mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Find your people
          </motion.p>
        </motion.div>
        
        {/* Visual orb */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <motion.div
              className="w-48 h-48 rounded-full animate-breathe-slow"
              style={{ background: "var(--gradient-aurora)" }}
              animate={{ 
                boxShadow: [
                  "0 0 60px hsl(185 100% 60% / 0.4)",
                  "0 0 100px hsl(295 80% 60% / 0.4)",
                  "0 0 60px hsl(185 100% 60% / 0.4)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full opacity-50"
              style={{ background: "var(--gradient-aurora)" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        
        {/* Auth buttons */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Google */}
          <motion.button
            className="w-full py-4 px-6 rounded-2xl glass-card-elevated flex items-center justify-center gap-3 font-medium text-foreground"
            onClick={() => handleSocialLogin("google")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading !== null}
          >
            {isLoading === "google" ? (
              <motion.div
                className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            Continue with Google
          </motion.button>
          
          {/* Apple */}
          <motion.button
            className="w-full py-4 px-6 rounded-2xl glass-card-elevated flex items-center justify-center gap-3 font-medium text-foreground"
            onClick={() => handleSocialLogin("apple")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading !== null}
          >
            {isLoading === "apple" ? (
              <motion.div
                className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <Apple className="w-5 h-5" />
            )}
            Continue with Apple
          </motion.button>
          
          {/* Email divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          
          {/* Email */}
          <motion.button
            className="w-full py-4 px-6 rounded-2xl btn-aurora flex items-center justify-center gap-3 font-medium text-primary-foreground"
            onClick={() => handleSocialLogin("email")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading !== null}
          >
            {isLoading === "email" ? (
              <motion.div
                className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <Mail className="w-5 h-5" />
            )}
            Continue with Email
          </motion.button>
        </motion.div>
        
        {/* Terms */}
        <motion.p
          className="text-center text-muted-foreground text-xs mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          By continuing, you agree to our{" "}
          <span className="text-foreground underline cursor-pointer">Terms</span> and{" "}
          <span className="text-foreground underline cursor-pointer">Privacy Policy</span>
        </motion.p>
      </div>
    </div>
  );
};

export default Auth;
