const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "brightzoe's blog",
  tagline: "Learning by doing",
  url: "https://brightzoe.top",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false, //customize the presence/absence of a trailing slash at the end of URLs/links, and how static HTML files are generated
  organizationName: "brightzoe", // Usually your GitHub org/user name.
  projectName: "brightzoe.github.io", // Usually your repo name.
  themes: [
    "@codesandbox/sandpack-docusaurus",
    "@docusaurus/theme-live-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
      },
    ],
  ],

  presets: [
    //预设:将某些插件和主题一起使用
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          //@docusaurus/plugin-content-docs
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/brightzoe/brightzoe.github.io/edit/main",
          showLastUpdateTime: true,
          sidebarCollapsed: true,
          // options for remark-admonitions
          admonitions: {},
          breadcrumbs: false,
        },
        blog: {
          //@docusaurus/plugin-content-blog
          showReadingTime: true,
          editUrl: "https://github.com/brightzoe/brightzoe.github.io/edit/main",
          // blogSidebarTitle: '全部博文',
          blogSidebarCount: 6,
          feedOptions: {
            type: "all",
            copyright: `版权所有 © ${new Date().getFullYear()} brightzoe's blog`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: {
          //@docusaurus/plugin-content-pages
        },
        sitemap: {
          //@docusaurus/plugin-content-sitemap
          changefreq: "weekly",
          priority: 0.5,
        },
        // gtag: {
        //   //@docusaurus/plugin-google-gtag
        //   trackingID: "G-Y9R1END50H",
        //   // Optional fields.
        //   anonymizeIP: true, // Should IPs be anonymized?
        // },
      },
    ],
  ],
  plugins: ["@docusaurus/plugin-ideal-image"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "brightzoe",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
          width: 40,
          height: 40,
        },
        items: [
          { to: "/docs/fe-basic/html", label: "FE Basic", position: "left" },
          { to: "/docs/react", label: "React", position: "left" },
          // {
          //   to: "/docs/data-structure",
          //   label: "数据结构与算法",
          //   position: "left",
          // },
          { to: "/docs/business", label: "业务", position: "left" },
          {
            to: "/docs/tools/chrome-devtools",
            label: "工具",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/brightzoe",
            // label: "GitHub",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "优秀博客推荐",
            items: [
              {
                label: "Ashes Born's Blog",
                href: "https://sadofriod.github.io/",
              },
              {
                label: "Overreacted - Dan Abramov",
                href: "https://overreacted.io/",
              },
            ],
          },
          {
            title: "  ",
            items: [],
          },
          {
            title: "优秀博客推荐",
            items: [
              {
                label: "Ashes Born's Blog",
                href: "https://sadofriod.github.io/",
              },
              {
                label: "Overreacted - Dan Abramov",
                href: "https://overreacted.io/",
              },
            ],
          },
        ],
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} brightzoe's blog`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};
