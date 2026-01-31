import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { 
  User, 
  Shield, 
  MapPin, 
  Bell, 
  Lock, 
  LogOut, 
  Trash2, 
  ChevronRight,
  Moon,
  Eye,
  UserX,
  HelpCircle
} from "lucide-react";

const settingsGroups = [
  {
    title: "Account",
    items: [
      { id: "profile", label: "Edit Profile", icon: User, path: "/onboarding/profile" },
      { id: "privacy", label: "Privacy Controls", icon: Shield },
      { id: "location", label: "Location Visibility", icon: MapPin, toggle: true },
    ],
  },
  {
    title: "Preferences",
    items: [
      { id: "notifications", label: "Notifications", icon: Bell },
      { id: "dark-mode", label: "Dark Mode", icon: Moon, toggle: true, defaultOn: true },
      { id: "visibility", label: "Profile Visibility", icon: Eye },
    ],
  },
  {
    title: "Safety",
    items: [
      { id: "blocked", label: "Blocked Users", icon: UserX },
      { id: "security", label: "Account Security", icon: Lock },
    ],
  },
  {
    title: "Support",
    items: [
      { id: "help", label: "Help Center", icon: HelpCircle },
    ],
  },
];

const Settings = () => {
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    location: true,
    "dark-mode": true,
  });

  const handleToggle = (id: string) => {
    setToggleStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <MainLayout>
      <div className="px-6 pt-12 pb-6">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-foreground">
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your account</p>
        </motion.div>

        {/* Settings groups */}
        <div className="space-y-8">
          {settingsGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1 }}
            >
              <h2 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                {group.title}
              </h2>
              <div className="glass-card-elevated rounded-2xl overflow-hidden">
                {group.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      className={`w-full p-4 flex items-center justify-between hover:bg-card-elevated transition-colors ${
                        itemIndex !== group.items.length - 1 ? "border-b border-border" : ""
                      }`}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.label}</span>
                      </div>
                      
                      {item.toggle ? (
                        <motion.div
                          className={`w-12 h-7 rounded-full p-1 cursor-pointer transition-colors ${
                            toggleStates[item.id] ? "bg-primary" : "bg-muted"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToggle(item.id);
                          }}
                        >
                          <motion.div
                            className="w-5 h-5 rounded-full bg-white shadow-lg"
                            animate={{ x: toggleStates[item.id] ? 20 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </motion.div>
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logout and Delete */}
        <motion.div
          className="mt-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="w-full p-4 rounded-2xl glass-card-elevated flex items-center justify-center gap-3 text-foreground font-medium hover:bg-card-elevated transition-colors"
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </motion.button>
          
          <motion.button
            className="w-full p-4 rounded-2xl glass-card flex items-center justify-center gap-3 text-destructive font-medium hover:bg-destructive/10 transition-colors"
            whileTap={{ scale: 0.98 }}
          >
            <Trash2 className="w-5 h-5" />
            Delete Account
          </motion.button>
        </motion.div>

        {/* App version */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          RADIUS v1.0.0
        </motion.p>
      </div>
    </MainLayout>
  );
};

export default Settings;
