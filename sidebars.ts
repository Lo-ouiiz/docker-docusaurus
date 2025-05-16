import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  dockerSidebar: [
    "introduction",
    {
      type: "category",
      label: "Concepts de base",
      items: ["docker-vs-vm", "image-et-conteneur"],
    },
    {
      type: "category",
      label: "Dockerfile",
      items: ["dockerfile-structure", "dockerfile-dockerignore"],
    },
    "commandes",
    {
      type: "category",
      label: "Docker compose",
      items: ["compose-definition", "compose-commandes", "compose-yml"],
    },
    "windows",
  ],
};

export default sidebars;
