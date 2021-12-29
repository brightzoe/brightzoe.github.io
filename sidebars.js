/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
	CSS: [
		{
			type: "autogenerated",
			dirName: "css", // 从 docs/CSS 文件夹自动生成侧边栏切片
		},
	],
	JavaScript: [
		{
			type: "autogenerated",
			dirName: "javascript",
		},
	],
	React: [
		{
			type: "autogenerated",
			dirName: "react",
		},
	],
	DataStructure: [
		{
			type: "autogenerated",
			dirName: "data-structure",
		},
	],
	Tools: [
		{
			type: "autogenerated",
			dirName: "tools",
		},
	],
	Business: [
		{
			type: "autogenerated",
			dirName: "business",
		},
	],
};
