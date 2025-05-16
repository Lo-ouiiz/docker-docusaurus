import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Docker",
  tagline: "La documentation claire et structurée pour apprendre Docker",
  favicon: "img/favicon.ico",

  //TODO: Change once the vercel app is up
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Docker",
      logo: {
        alt: "Logo",
        src: "img/docker.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "dockerSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/Lo-ouiiz/docker-docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Construit avec Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
