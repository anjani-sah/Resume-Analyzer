import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoBackground from "./components/VideoBackground";
import UploadSection from "./components/UploadSection";
import ResultsDashboard from "./components/ResultsDashboard";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import type { AnalysisResult } from "./types";

type Section = "home" | "analyze" | "features" | "about" | "results";

function App() {
  const [section, setSection] = useState<Section>("home");
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleResult = (data: AnalysisResult) => {
    setResult(data);
    setSection("results");
  };

  const handleReset = () => {
    setResult(null);
    setSection("analyze");
  };

  const renderSection = () => {
    switch (section) {
      case "home":
        return <Hero onAnalyze={() => setSection("analyze")} />;
      case "analyze":
        return <UploadSection onResult={handleResult} />;
      case "results":
        return result ? (
          <ResultsDashboard result={result} onReset={handleReset} />
        ) : null;
      case "features":
        return <FeaturesSection />;
      case "about":
        return <AboutSection />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <VideoBackground />
      <Navbar
        onNavigate={(s) => setSection(s as Section)}
        currentSection={section}
      />
      <main className="flex-1 w-full flex flex-col items-center">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;