import type { ReactNode } from "react";
import VideoBackground from "../../components/VideoBackground";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface AppFrameProps {
  children?: ReactNode;
  showBackgroundVideo?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  currentSection?: "home" | "analyze" | "features" | "about" | "results";
  className?: string;
}

export default function AppFrame({
  children,
  showBackgroundVideo = true,
  showNavbar = true,
  showFooter = true,
  currentSection = "home",
  className = "",
}: AppFrameProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden flex flex-col bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${className}`.trim()}>
      {showBackgroundVideo ? <VideoBackground /> : null}
      {showNavbar ? <Navbar onNavigate={() => undefined} currentSection={currentSection} /> : null}
      <main className="relative z-10 flex-1">{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
}
