import type { ComponentType } from "react";
import { registerComponent } from "@plasmicapp/host";
import AppFrame from "./blocks/AppFrame";
import HeroBlock from "./blocks/HeroBlock";
import SectionHeading from "./blocks/SectionHeading";
import GlassCard from "./blocks/GlassCard";
import NavbarBlock from "./blocks/NavbarBlock";
import FeaturesBlock from "./blocks/FeaturesBlock";
import AboutBlock from "./blocks/AboutBlock";
import FooterBlock from "./blocks/FooterBlock";
import { PLASMIC } from "../lib/plasmic";

function registerWithPlasmic(component: ComponentType<any>, meta: any) {
  const metaWithPath = {
    ...meta,
    importPath: `./components-register#${component.displayName || component.name}`,
  };
  registerComponent(component, metaWithPath);
  PLASMIC?.registerComponent(component, metaWithPath);
}

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
