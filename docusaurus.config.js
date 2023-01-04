module.exports = {
  title: "Home Assistant Voice Portal",
  tagline:
    "All you need to start contributing to voice control for Home Assistant",
  url: "https://voice.home-assistant.io",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "home-assistant", // Usually your GitHub org/user name.
  projectName: "voice.home-assistant", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Voice Portal",
      logo: {
        alt: "Home Assistant",
        src: "img/logo-pretty.svg",
        srcDark: "img/logo-pretty.svg",
      },
      items: [
        { to: "/docs/overview", label: "Overview", position: "left" },
        { to: "/docs/intents", label: "Intents", position: "left" },
        { to: "/docs/contributing", label: "Contributing", position: "left" },
      ],
    },
    footer: {
      logo: {
        alt: "Home Assistant",
        src: "img/logo-white.svg",
        href: "https://www.home-assistant.io",
      },
      style: "dark",
      links: [
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/home-assistant/voice.home-assistant",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/hass_devs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Home Assistant. Built with Docusaurus.`,
    },
    image: "img/default-social.png",
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/home-assistant/voice.home-assistant/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};
