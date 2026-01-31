import { ReactNode } from "react";
import BottomTabBar from "@/components/BottomTabBar";
import AuroraBackground from "@/components/AuroraBackground";

interface MainLayoutProps {
  children: ReactNode;
  hideTabBar?: boolean;
}

const MainLayout = ({ children, hideTabBar = false }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      <main className="flex-1 relative z-10 pb-28">
        {children}
      </main>
      {!hideTabBar && <BottomTabBar />}
    </div>
  );
};

export default MainLayout;
