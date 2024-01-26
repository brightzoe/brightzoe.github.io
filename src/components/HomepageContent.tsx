import React from 'react';
import DocusaurusMountain from '@site/static/img/undraw_docusaurus_mountain.svg';

const contents = {
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

export default function HomepageContent() {
  return (
    <div className="container p-10 flex flex-col md:flex-row items-center">
      <DocusaurusMountain
        className="w-full md:w-2/5 rounded-lg"
        title={contents.title}
      />
      <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
        <h2 className="text-3xl font-bold">{contents.title}</h2>
        <div className="mt-4">{contents.description}</div>
      </div>
    </div>
  );
}
