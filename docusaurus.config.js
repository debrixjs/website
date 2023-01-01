// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Debrix",
  tagline: "Declarative progressive component-based MVVM JavaScript library",
  url: "https://docs.debrix.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "./plugins/docusaurus-plugin-inject",
      {
        headTags: [
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossorigin: "",
            },
          },
          {
            tagName: "link",
            attributes: {
              rel: "stylesheet",
              type: "text/css",
              href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=optional",
            },
          },
        ],
        preBodyTags: [],
        postBodyTags: [],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/debrixjs/website/tree/main/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/debrixjs/website/tree/main/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Debrix",
        logo: {
          alt: "Debrix Logo",
          src: "/img/logo.svg",
          // srcDark: "/img/logo-dark.svg"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://playground.debrix.dev",
            label: "Playground",
            position: "right",
          },
          {
            href: "https://github.com/debrixjs/debrix",
            "aria-label": "GitHub",
            position: "right",
            className: "github-icon",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        logo: {
          src: "/img/logo.svg",
          // srcDark: "/img/logo-dark.svg",
          height: 64,
          width: 64,
        },
        links: [
          {
            label: "Documentation",
            to: "/docs/intro",
          },
          {
            label: "Blog",
            to: "/blog",
          },
          {
            label: "GitHub",
            href: "https://github.com/debrixjs",
          },
          {
            label: "Packages",
            href: "https://www.npmjs.com/search?q=debrix",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
