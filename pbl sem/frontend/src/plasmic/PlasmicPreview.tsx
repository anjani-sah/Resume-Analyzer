import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC, hasPlasmicCredentials, plasmicDefaultComponent } from "../lib/plasmic";
import "./components-register";

function getRequestedComponent() {
  const params = new URLSearchParams(window.location.search);
  return params.get("component") || plasmicDefaultComponent;
}

export default function PlasmicPreview() {
  const component = getRequestedComponent();

  if (!hasPlasmicCredentials || !PLASMIC) {
    return (
      <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] px-6 py-16">
        <div className="max-w-2xl mx-auto liquid-glass rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-[hsl(var(--muted-foreground))] mb-3">
            Plasmic Preview
          </div>
          <h1
            className="text-3xl font-normal mb-3"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Missing Plasmic credentials
          </h1>
          <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
            Add VITE_PLASMIC_PROJECT_ID and VITE_PLASMIC_API_TOKEN to frontend/.env.local,
            then open this page again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} suspenseFallback={<div className="p-6">Loading...</div>}>
      <PlasmicComponent component={component} />
    </PlasmicRootProvider>
  );
}
