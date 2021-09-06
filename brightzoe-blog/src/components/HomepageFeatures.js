import React from "react";
import styles from "./HomepageFeatures.module.css";

const ContentProps = {
	title: "Hello from here",
	Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
	description: (
		<div>
			你好，我是 brightzoe, 一枚小小的前端攻城狮。兴趣广泛，好奇心重，热爱交朋友！👋👋
			<p>这里用来记录一些个人笔记以及思考，欢迎来访~</p>
		</div>
	),
};

function Content({ Svg, title, description }) {
	return (
		<div className={styles.flexMain}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<Content {...ContentProps} />
			</div>
		</section>
	);
}
