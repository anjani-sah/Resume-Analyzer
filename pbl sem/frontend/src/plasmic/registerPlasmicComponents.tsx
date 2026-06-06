import type { ComponentType, ReactNode } from "react";
import { registerComponent } from "@plasmicapp/host";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import VideoBackground from "../components/VideoBackground";
import { PLASMIC } from "../lib/plasmic";

interface AppFrameProps {
  children?: ReactNode;
  showBackgroundVideo?: boolean;
  showNavbar?: boolean;
  showFooter?: boolean;
  currentSection?: "home" | "analyze" | "features" | "about" | "results";
  className?: string;
}

function AppFrame({
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

interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  className?: string;
}

function HeroBlock({
  title = "Where your resume meets its true potential.",
  subtitle = "Upload your resume, find out your potential in seconds.",
  ctaLabel = "Get Started",
  className = "",
}: HeroBlockProps) {
  return (
    <section
      className={`relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 min-h-[80vh] ${className}`.trim()}
    >
      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h1>
      <p className="animate-fade-rise-delay text-[hsl(var(--muted-foreground))] text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
        {subtitle}
      </p>
      <button
        className="animate-fade-rise-delay-2 liquid-glass rounded-full px-12 py-4 text-base text-[hsl(var(--foreground))] mt-10 hover:scale-[1.03] transition-transform cursor-pointer"
      >
        {ctaLabel}
      </button>
      <div className="animate-fade-rise-delay-2 flex flex-wrap justify-center gap-10 mt-16 text-center">
        {[
          { value: "5", label: "Domains" },
          { value: "37+", label: "Skills" },
          { value: "15", label: "Roles" },
          { value: "<3s", label: "Speed" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              className="text-2xl sm:text-3xl font-normal text-[hsl(var(--foreground))]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {stat.value}
            </div>
            <div className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5 tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

function SectionHeading({
  title = "Section title",
  description = "Short supporting copy for this section.",
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={`${isCentered ? "text-center" : "text-left"} ${className}`.trim()}>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl leading-[0.95] tracking-[-1px] font-normal"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        {title}
      </h2>
      <p className={`text-sm sm:text-base text-[hsl(var(--muted-foreground))] mt-4 leading-relaxed ${isCentered ? "max-w-lg mx-auto" : "max-w-2xl"}`.trim()}>
        {description}
      </p>
    </div>
  );
}

interface GlassCardProps {
  title?: string;
  body?: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

function GlassCard({
  title = "Card title",
  body = "Add supporting content here.",
  children,
  align = "left",
  className = "",
}: GlassCardProps) {
  const isCentered = align === "center";

  return (
    <div className={`liquid-glass rounded-2xl p-6 min-w-0 ${className}`.trim()}>
      <div className={isCentered ? "text-center" : "text-left"}>
        <div
          className="text-xl font-normal text-[hsl(var(--foreground))] mb-2"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
        </div>
        <div className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
          {body}
        </div>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}

interface NavbarBlockProps {
  currentSection?: "home" | "analyze" | "features" | "about" | "results";
}

function NavbarBlock({ currentSection = "home" }: NavbarBlockProps) {
  return <Navbar onNavigate={() => undefined} currentSection={currentSection} />;
}

function FeaturesBlock() {
  return <FeaturesSection />;
}

function AboutBlock() {
  return <AboutSection />;
}

function FooterBlock() {
  return <Footer />;
}

let didRegister = false;

function registerWithPlasmic(component: ComponentType<any>, meta: any) {
  const metaWithPath = {
    ...meta,
    importPath: `./registerPlasmicComponents#${component.displayName || component.name}`,
  };
  registerComponent(component, metaWithPath);
  PLASMIC?.registerComponent(component, metaWithPath);
}

export function registerPlasmicComponents() {
  if (didRegister) {
    return;
  }

  didRegister = true;

  registerWithPlasmic(AppFrame, {
    name: "ResumekaroAppFrame",
    displayName: "Resumekaro App Frame",
    section: "Resumekaro",
    props: {
      children: { type: "slot" },
      showBackgroundVideo: { type: "boolean" },
      showNavbar: { type: "boolean" },
      showFooter: { type: "boolean" },
      currentSection: {
        type: "choice",
        options: ["home", "analyze", "features", "about", "results"],
      },
      className: { type: "class" },
    },
  });

  registerWithPlasmic(HeroBlock, {
    name: "ResumekaroHero",
    displayName: "Resumekaro Hero",
    section: "Resumekaro",
    props: {
      title: { type: "string" },
      subtitle: { type: "string" },
      ctaLabel: { type: "string" },
      className: { type: "class" },
    },
  });

  registerWithPlasmic(SectionHeading, {
    name: "ResumekaroSectionHeading",
    displayName: "Resumekaro Section Heading",
    section: "Resumekaro",
    props: {
      title: { type: "string" },
      description: { type: "string" },
      align: { type: "choice", options: ["left", "center"] },
      className: { type: "class" },
    },
  });

  registerWithPlasmic(GlassCard, {
    name: "ResumekaroGlassCard",
    displayName: "Resumekaro Glass Card",
    section: "Resumekaro",
    props: {
      title: { type: "string" },
      body: { type: "string" },
      children: { type: "slot" },
      align: { type: "choice", options: ["left", "center"] },
      className: { type: "class" },
    },
  });

  registerWithPlasmic(NavbarBlock, {
    name: "ResumekaroNavbar",
    displayName: "Resumekaro Navbar",
    section: "Resumekaro Blocks",
    props: {
      currentSection: {
        type: "choice",
        options: ["home", "analyze", "features", "about", "results"],
      },
    },
    styleSections: false,
  });

  registerWithPlasmic(FeaturesBlock, {
    name: "ResumekaroFeaturesSection",
    displayName: "Resumekaro Features Section",
    section: "Resumekaro Blocks",
    props: {},
    styleSections: false,
  });

  registerWithPlasmic(AboutBlock, {
    name: "ResumekaroAboutSection",
    displayName: "Resumekaro About Section",
    section: "Resumekaro Blocks",
    props: {},
    styleSections: false,
  });

  registerWithPlasmic(FooterBlock, {
    name: "ResumekaroFooter",
    displayName: "Resumekaro Footer",
    section: "Resumekaro Blocks",
    props: {},
    styleSections: false,
  });
}
