import { PlasmicCanvasHost } from "@plasmicapp/host";
import "../plasmic/components-register";

export default function PlasmicStudioHost() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <PlasmicCanvasHost />
    </div>
  );
}
