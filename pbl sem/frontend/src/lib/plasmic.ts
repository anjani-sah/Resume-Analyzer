import { initPlasmicLoader } from "@plasmicapp/loader-react";

const projectId = import.meta.env.VITE_PLASMIC_PROJECT_ID?.trim();
const apiToken = import.meta.env.VITE_PLASMIC_API_TOKEN?.trim();

export const hasPlasmicCredentials = Boolean(projectId && apiToken);
export const plasmicDefaultComponent =
  import.meta.env.VITE_PLASMIC_DEFAULT_COMPONENT?.trim() || "Home";

export const PLASMIC = hasPlasmicCredentials
  ? initPlasmicLoader({
      projects: [
        {
          id: projectId!,
          token: apiToken!,
        },
      ],
      preview: true,
    })
  : null;
