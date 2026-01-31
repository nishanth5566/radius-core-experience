import { motion } from "framer-motion";
import { MapPin, Compass, MessageCircle, User, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const tabs: TabItem[] = [
  { id: "map", label: "Map", icon: MapPin, path: "/map" },
  { id: "explore", label: "Explore", icon: Compass, path: "/explore" },
  { id: "chat", label: "Chat", icon: MessageCircle, path: "/chat" },
  { id: "profile", label: "Profile", icon: User, path: "/profile" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

const BottomTabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Gradient fade above bar */}
      <div className="h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Tab bar */}
      <div className="glass-card-elevated px-2 py-3 mx-4 mb-4 rounded-2xl">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const active = isActive(tab.path);
            const Icon = tab.icon;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={cn(
                  "relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                  active ? "text-primary" : "text-muted-foreground"
                )}
                whileTap={{ scale: 0.9 }}
              >
                {/* Active background glow */}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                
                <motion.div
                  animate={{ scale: active ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Icon className={cn("w-6 h-6 relative z-10", active && "drop-shadow-[0_0_8px_hsl(var(--primary))]")} />
                </motion.div>
                
                <span className={cn(
                  "text-[10px] font-medium relative z-10 transition-opacity",
                  active ? "opacity-100" : "opacity-70"
                )}>
                  {tab.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomTabBar;
