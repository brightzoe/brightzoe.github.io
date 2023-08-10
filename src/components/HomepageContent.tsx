import React from 'react';
import styles from './HomepageContent.module.css';
import DocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';

const ContentProps = {
  title: 'Hello from here',
  Svg: DocusaurusMountain,
  description: (
    <>
      <p>
        你好，我是 brightzoe,
        一枚小小的前端攻城狮。兴趣广泛，好奇心重，热爱交朋友！👋👋
      </p>
      <p>这里用来记录一些个人笔记以及思考，欢迎来访~</p>
    </>
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
        <div>{description}</div>
      </div>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
    </div>
  );
}

export default function HomepageContent() {
  return (
    <div className="container">
      <Content {...ContentProps} />
    </div>
  );
}
