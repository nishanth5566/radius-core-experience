import { motion } from "framer-motion";
import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Search, MoreVertical, Send, Mic, Image } from "lucide-react";

const conversations = [
  { id: 1, name: "Aria", lastMessage: "That sounds amazing! 🧘", time: "2m", unread: 2, online: true, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop", vibe: "Yoga" },
  { id: 2, name: "Marcus", lastMessage: "Let's catch up at the co-working space", time: "15m", unread: 0, online: true, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", vibe: "Tech" },
  { id: 3, name: "Luna", lastMessage: "I loved that art exhibition!", time: "1h", unread: 0, online: false, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop", vibe: "Art" },
  { id: 4, name: "Morning Yoga Circle", lastMessage: "Session tomorrow at 7am 🌅", time: "2h", unread: 5, online: false, isGroup: true, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop" },
  { id: 5, name: "Kai", lastMessage: "Great hike today!", time: "3h", unread: 0, online: false, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop", vibe: "Fitness" },
];

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const selectedConversation = conversations.find(c => c.id === selectedChat);

  if (selectedChat && selectedConversation) {
    return (
      <MainLayout>
        <div className="flex flex-col h-[calc(100vh-7rem)]">
          {/* Chat header */}
          <motion.div
            className="px-6 pt-12 pb-4 glass-card-elevated"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4">
              <motion.button
                onClick={() => setSelectedChat(null)}
                className="text-muted-foreground hover:text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                ←
              </motion.button>
              <div className="relative">
                <img
                  src={selectedConversation.image}
                  alt={selectedConversation.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30"
                />
                {selectedConversation.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary ring-2 ring-background" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground">{selectedConversation.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {selectedConversation.online ? "Online" : "Offline"}
                </p>
              </div>
              <motion.button
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
              >
                <MoreVertical className="w-5 h-5 text-muted-foreground" />
              </motion.button>
            </div>
          </motion.div>

          {/* Messages area */}
          <div className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Sample messages */}
              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="glass-card rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-foreground">Hey! I saw we both love yoga 🧘</p>
                  <span className="text-xs text-muted-foreground mt-1 block">10:30 AM</span>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-primary rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                  <p className="text-primary-foreground">Yes! I practice every morning. Do you go to any classes?</p>
                  <span className="text-xs text-primary-foreground/70 mt-1 block">10:32 AM</span>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="glass-card rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-foreground">That sounds amazing! 🧘</p>
                  <span className="text-xs text-muted-foreground mt-1 block">10:35 AM</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Message input */}
          <motion.div
            className="px-6 py-4 glass-card-elevated"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <motion.button
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
                whileTap={{ scale: 0.95 }}
              >
                <Image className="w-5 h-5 text-muted-foreground" />
              </motion.button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="input-premium w-full pr-12"
                />
                <motion.button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <Mic className="w-5 h-5 text-muted-foreground" />
                </motion.button>
              </div>
              <motion.button
                className="w-12 h-12 rounded-full btn-aurora flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 text-primary-foreground" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </MainLayout>
    );
  }

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
            Messages
          </h1>
          <p className="text-muted-foreground">Stay connected</p>
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
            placeholder="Search messages..."
            className="input-premium w-full pl-12"
          />
        </motion.div>

        {/* Conversations */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {conversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className="glass-card-elevated rounded-2xl p-4 flex items-center gap-4 cursor-pointer hover:ring-1 hover:ring-primary/30 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                {conversation.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-primary ring-2 ring-background" />
                )}
                {conversation.isGroup && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs text-accent-foreground">
                    👥
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground truncate">{conversation.name}</h3>
                  <span className="text-xs text-muted-foreground">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Chat;
