import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  elevated?: boolean;
  children: React.ReactNode;
}

const GlassCard = ({ 
  elevated = false, 
  children, 
  className,
  ...props 
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        elevated ? "glass-card-elevated" : "glass-card",
        "rounded-3xl p-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
