const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "brightzoe's blog",
		tagline: "Learning by doing",
		url: "https://brightzoe.github.io",
		baseUrl: "/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "brightzoe", // Usually your GitHub org/user name.
		projectName: "brightzoe.github.io", // Usually your repo name.
		themes: ["@codesandbox/sandpack-docusaurus"],

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						// Please change this to your repo.
						editUrl: "https://github.com/brightzoe/brightzoe.github.io",
						showLastUpdateTime: true,
						sidebarCollapsed: false,
					},
					blog: {
						showReadingTime: true,
						// Please change this to your repo.
						editUrl: "https://github.com/brightzoe/brightzoe.github.io",
					},
					theme: {
						customCss: require.resolve("./src/css/custom.css"),
					},
					sitemap: {
						changefreq: "weekly",
						priority: 0.5,
						trailingSlash: false,
					},
				}),
			],
		],
		plugins: ["@docusaurus/plugin-ideal-image"],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				tableOfContents: {
					minHeadingLevel: 3,
					maxHeadingLevel: 5,
				},
				navbar: {
					title: "brightzoe's blog",
					logo: {
						alt: "My Site Logo",
						src: "img/logo.svg",
					},
					items: [
						{ to: "/docs/CSS/layout", label: "HTML & CSS", position: "left" },
						{ to: "/docs/JavaScript/scriptTag", label: "JavaScript", position: "left" },
						{ to: "/docs/React/hooks", label: "React", position: "left" },
						{ to: "/docs/DataStructure/README", label: "数据结构与算法", position: "left" },
						{ to: "/docs/Business/README", label: "业务使用", position: "left" },
						{ to: "/docs/Tools/chromeDevTools", label: "工具技巧", position: "left" },
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
						// {
						// 	title: "More",
						// 	items: [
						// 		{
						// 			label: "Blog",
						// 			to: "/blog",
						// 		},
						// 		{
						// 			label: "GitHub",
						// 			href: "https://github.com/brightzoe",
						// 		},
						// 	],
						// },
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
				googleAnalytics: {
					trackingID: "UA-192447848-1",
					// Optional fields.
					anonymizeIP: true, // Should IPs be anonymized?
				},
			}),
	}
);
