import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Edit3, MapPin, Users, Camera, ChevronRight } from "lucide-react";

const userProfile = {
  name: "Alex Chen",
  age: 27,
  bio: "Digital nomad, yoga enthusiast, and startup founder. Looking to connect with like-minded souls.",
  vibes: ["Tech", "Yoga", "Startup", "Travel"],
  photos: [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
  ],
  groups: [
    { id: 1, name: "Morning Yoga Circle", members: 24 },
    { id: 2, name: "Startup Founders Hub", members: 156 },
  ],
  stats: {
    connections: 48,
    groups: 3,
    vibes: 4,
  },
};

const Profile = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="pb-6">
        {/* Header with photo */}
        <motion.div
          className="relative h-72"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img
            src={userProfile.photos[0]}
            alt={userProfile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Edit button */}
          <motion.button
            className="absolute top-12 right-6 w-10 h-10 rounded-full glass-card flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/onboarding/profile")}
          >
            <Edit3 className="w-5 h-5 text-foreground" />
          </motion.button>
          
          {/* Camera button */}
          <motion.button
            className="absolute bottom-24 right-6 w-12 h-12 rounded-full btn-aurora flex items-center justify-center"
            whileTap={{ scale: 0.95 }}
          >
            <Camera className="w-5 h-5 text-primary-foreground" />
          </motion.button>
        </motion.div>

        {/* Profile info */}
        <div className="px-6 -mt-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl font-bold text-foreground mb-1">
              {userProfile.name}, {userProfile.age}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            
            <p className="text-foreground/80 mb-6">{userProfile.bio}</p>
            
            {/* Vibes */}
            <div className="flex flex-wrap gap-2 mb-6">
              {userProfile.vibes.map((vibe) => (
                <span
                  key={vibe}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {vibe}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="glass-card-elevated rounded-2xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-around">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{userProfile.stats.connections}</p>
                <p className="text-sm text-muted-foreground">Connections</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{userProfile.stats.groups}</p>
                <p className="text-sm text-muted-foreground">Groups</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{userProfile.stats.vibes}</p>
                <p className="text-sm text-muted-foreground">Vibes</p>
              </div>
            </div>
          </motion.div>

          {/* Photos grid */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Photos</h2>
            <div className="grid grid-cols-3 gap-2">
              {userProfile.photos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden"
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* My Groups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">My Groups</h2>
            <div className="space-y-3">
              {userProfile.groups.map((group) => (
                <motion.div
                  key={group.id}
                  className="glass-card-elevated rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:ring-1 hover:ring-primary/30 transition-all"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{group.name}</h3>
                      <p className="text-sm text-muted-foreground">{group.members} members</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
