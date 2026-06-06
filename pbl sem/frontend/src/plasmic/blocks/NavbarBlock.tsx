import Navbar from "../../components/Navbar";

interface NavbarBlockProps {
  currentSection?: "home" | "analyze" | "features" | "about" | "results";
}

export default function NavbarBlock({ currentSection = "home" }: NavbarBlockProps) {
  return <Navbar onNavigate={() => undefined} currentSection={currentSection} />;
}
