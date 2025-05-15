import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  dockerSidebar: [
    "docker-doc/introduction",
    {
      type: "category",
      label: "Concepts de base",
      items: ["docker-doc/docker-vs-vm", "docker-doc/image-et-conteneur"],
    },
    {
      type: "category",
      label: "Dockerfile",
      items: [
        "docker-doc/dockerfile-structure",
        "docker-doc/dockerfile-dockerignore",
      ],
    },
    "docker-doc/commandes",
    {
      type: "category",
      label: "Docker compose",
      items: [
        "docker-doc/compose-definition",
        "docker-doc/compose-commandes",
        "docker-doc/compose-yml",
      ],
    },
    "docker-doc/windows",
  ],
};

export default sidebars;
