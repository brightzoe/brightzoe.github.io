import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Note: type annotations allow type checking and IDEs autocompletion
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: "brightzoe's blog",
  tagline: 'Learning by doing',
  url: 'https://brightzoe.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  // Even if you don't use internalization,F you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  favicon: 'img/favicon.ico',
  trailingSlash: true, //customize the presence/absence of a trailing slash at the end of URLs/links, and how static HTML files are generated
  organizationName: 'brightzoe', // Usually your GitHub org/user name.
  projectName: 'brightzoe.github.io', // Usually your repo name.
  themes: [
    // '@codesandbox/sandpack-docusaurus',
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          //@docusaurus/plugin-content-docs
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/brightzoe/brightzoe.github.io/edit/main',
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          // options for remark-admonitions
          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'deep'],
            // extendDefaults: true,
          },
          breadcrumbs: false,
        },
        blog: {
          //@docusaurus/plugin-content-blog
          showReadingTime: true,
          editUrl: 'https://github.com/brightzoe/brightzoe.github.io/edit/main',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `版权所有 © ${new Date().getFullYear()} brightzoe's blog`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        pages: {
          //@docusaurus/plugin-content-pages
        },
        sitemap: {
          //@docusaurus/plugin-content-sitemap
          // @ts-ignore
          changefreq: 'weekly',
          priority: 0.5,
        },
        // gtag: {
        //   //@docusaurus/plugin-google-gtag
        //   trackingID: "G-Y9R1END50H",
        //   // Optional fields.
        //   anonymizeIP: true, // Should IPs be anonymized?
        // },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
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
      title: 'brightzoe',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        width: 40,
        height: 40,
      },
      items: [
        {
          label: 'FE Basic',
          position: 'left',
          items: [
            { to: '/docs/fe-basic/html', label: 'HTML' },
            { to: '/docs/fe-basic/css', label: 'CSS' },
            { to: '/docs/fe-basic/javascript', label: 'JavaScript' },
            { to: '/docs/fe-basic/typescript-basic', label: 'TypeScript' },
            { to: '/docs/react', label: 'React' },
            { to: '/docs/vue', label: 'Vue' },
            { to: '/docs/fe-basic/fe-engineering', label: '工程化' },
          ],
        },
        { to: '/docs/business', label: '业务', position: 'left' },
        {
          to: '/docs/algorithm',
          label: '算法',
          position: 'left',
        },
        {
          to: '/docs/design-patterns',
          label: '设计模式',
          position: 'left',
        },

        {
          to: '/docs/tools/chrome-devtools',
          label: '工具',
          position: 'left',
        },
        {
          to: '/blog',
          activeBasePath: 'blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/brightzoe',
          // label: "GitHub",
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          label: "Ashes Born's Blog",
          href: 'https://sadofriod.github.io/',
        },
        {
          label: 'Overreacted - Dan Abramov',
          href: 'https://overreacted.io/',
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} brightzoe's blog`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    // './plugins/tags/plugins.ts',
    async function TailwindCSS(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(
            require('tailwindcss'),
            require('autoprefixer'),
          );
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
