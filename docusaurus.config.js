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
  themes: ["@codesandbox/sandpack-docusaurus", "@docusaurus/theme-live-codeblock"],

  presets: [
    //预设:将某些插件和主题一起使用
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          //@docusaurus/plugin-content-docs
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/brightzoe/brightzoe.github.io",
          showLastUpdateTime: true,
          sidebarCollapsed: false,
        },
        blog: {
          //@docusaurus/plugin-content-blog
          showReadingTime: true,
          editUrl: "https://github.com/brightzoe/brightzoe.github.io",
          // blogSidebarTitle: '全部博文',
          blogSidebarCount: 6,
          feedOptions: {
            type: "all",
            copyright: `版权所有 © ${new Date().getFullYear()} Facebook, Inc.`,
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
          trailingSlash: false,
        },
        googleAnalytics: {
          //@docusaurus/plugin-google-analytics
          trackingID: "UA-192447848-1",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  plugins: [
    "@docusaurus/plugin-ideal-image",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      tableOfContents: {
        //todo:toc层级是否生效？
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: "brightzoe's blog",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "/docs/css/layout", label: "HTML & CSS", position: "left" },
          {
            to: "/docs/javascript/basic/data-types",
            label: "JavaScript",
            position: "left",
          },
          { to: "/docs/react", label: "React", position: "left" },
          {
            to: "/docs/data-structure",
            label: "数据结构与算法",
            position: "left",
          },
          { to: "/docs/business", label: "业务使用", position: "left" },
          {
            to: "/docs/tools/chrome-devtools",
            label: "工具技巧",
            position: "left",
          },
          { to: "/blog", label: "碎碎谈", position: "left" },
          {
            href: "https://github.com/brightzoe",
            label: "GitHub",
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
        copyright: `Copyright © ${new Date().getFullYear()} brightzoe's blog, Inc.`,
      },
      // 				algolia: {
      // 					apiKey: 'YOUR_API_KEY',
      // 					indexName: 'YOUR_INDEX_NAME',
      //
      // 					// Optional: see doc section below
      // 					contextualSearch: true,
      //
      // 					// Optional: see doc section below
      // 					appId: 'YOUR_APP_ID',
      //
      // 					// Optional: Algolia search parameters
      // 					searchParameters: {},
      //
      // 					//... other Algolia params
      // 				},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};
