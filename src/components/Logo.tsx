import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const Logo = ({ size = "md", animated = true }: LogoProps) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  const Component = animated ? motion.div : "div";

  return (
    <Component
      className={`font-bold tracking-tight ${sizes[size]}`}
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      animate={animated ? { opacity: 1, y: 0 } : undefined}
      transition={animated ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
    >
      <span className="text-aurora">RADIUS</span>
    </Component>
  );
};

export default Logo;
