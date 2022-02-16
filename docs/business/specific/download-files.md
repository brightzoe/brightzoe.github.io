---
sidebar_position: 1
keywords: [download files 文件下载]
---

# 文件下载

## 针对 get 请求的下载

- 最简单的方式

  创建一个 a 标签，href 属性指向文件地址，设置 download 属性为下载的文件名字。`<a href="http:/your-site/test.png" download="test.png">`

  ```js
  //根据后端提供的文件接口地址，实现文件下载的功能：
  function downloadFile(url, fileName) {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  ```

## Reference

- [`<a>` - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
