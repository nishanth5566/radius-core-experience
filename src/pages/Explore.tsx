import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Search, MapPin, Users, Sparkles, Heart } from "lucide-react";

const nearbyPeople = [
  { id: 1, name: "Aria", age: 26, vibes: ["Yoga", "Spiritual"], match: 92, distance: "0.3 km", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { id: 2, name: "Marcus", age: 29, vibes: ["Tech", "Startup"], match: 87, distance: "0.5 km", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" },
  { id: 3, name: "Luna", age: 24, vibes: ["Art", "Music"], match: 85, distance: "0.8 km", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop" },
  { id: 4, name: "Kai", age: 28, vibes: ["Fitness", "Travel"], match: 81, distance: "1.2 km", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop" },
];

const groups = [
  { id: 1, name: "Morning Yoga Circle", members: 24, vibes: ["Yoga", "Spiritual"], city: "Downtown", gradient: "linear-gradient(135deg, hsl(280 60% 50%), hsl(260 70% 60%))" },
  { id: 2, name: "Startup Founders Hub", members: 156, vibes: ["Startup", "Tech"], city: "Tech District", gradient: "linear-gradient(135deg, hsl(35 100% 50%), hsl(45 100% 55%))" },
  { id: 3, name: "Meditation & Healing", members: 42, vibes: ["Spiritual", "Yoga"], city: "Green Park", gradient: "linear-gradient(135deg, hsl(160 60% 45%), hsl(140 70% 55%))" },
  { id: 4, name: "Creative Collective", members: 89, vibes: ["Art", "Music"], city: "Arts Quarter", gradient: "linear-gradient(135deg, hsl(295 80% 50%), hsl(310 80% 60%))" },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"people" | "groups">("people");

  return (
    <MainLayout>
      <div className="px-6 pt-12 pb-6">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-foreground">
            Explore
          </h1>
          <p className="text-muted-foreground">Discover your tribe</p>
        </motion.div>

        {/* Search */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search people or groups..."
            className="input-premium w-full pl-12"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button
            onClick={() => setActiveTab("people")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              activeTab === "people"
                ? "btn-aurora text-primary-foreground"
                : "glass-card text-muted-foreground"
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <Users className="w-4 h-4 inline mr-2" />
            People
          </motion.button>
          <motion.button
            onClick={() => setActiveTab("groups")}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              activeTab === "groups"
                ? "btn-aurora text-primary-foreground"
                : "glass-card text-muted-foreground"
            }`}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="w-4 h-4 inline mr-2" />
            Groups
          </motion.button>
        </motion.div>

        {/* People Near You */}
        {activeTab === "people" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              People Near You
            </h2>
            <div className="space-y-4">
              {nearbyPeople.map((person, index) => (
                <motion.div
                  key={person.id}
                  className="glass-card-elevated rounded-2xl p-4 flex gap-4 cursor-pointer hover:ring-1 hover:ring-primary/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Avatar */}
                  <div className="relative">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {person.match}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-foreground">
                        {person.name}, {person.age}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {person.distance}
                      </span>
                    </div>
                    <div className="flex gap-2 mb-2">
                      {person.vibes.map((vibe) => (
                        <span
                          key={vibe}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {vibe}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-accent">
                      <Heart className="w-3 h-3" />
                      <span>{person.match}% match</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Groups */}
        {activeTab === "groups" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Groups For You
            </h2>
            <div className="space-y-4">
              {groups.map((group, index) => (
                <motion.div
                  key={group.id}
                  className="glass-card-elevated rounded-2xl overflow-hidden cursor-pointer hover:ring-1 hover:ring-primary/30 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient header */}
                  <div
                    className="h-20 relative"
                    style={{ background: group.gradient }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-4 -mt-6 relative">
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {group.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {group.members} members
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {group.city}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {group.vibes.map((vibe) => (
                          <span
                            key={vibe}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {vibe}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        className="px-4 py-2 rounded-full btn-aurora text-sm font-medium text-primary-foreground"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Join
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </MainLayout>
  );
};

export default Explore;
