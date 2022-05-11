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

  上面的方式简单，但是如果文件地址 url 如果是不同域的，a 标签的 download 属性不生效，无法自定义文件的名字。

- 文件转成二进制流前端生成下载连接

  ```js
  function downloadFile(path, name) {
    axios
      .get({
        url: path,
        method: "get",
      })
      .then((res) => {
        const blob = new Blob([res.data], { type: res.headers["content-type"] });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
  }
  ```

业务中遇到的是大文件下载且需要自定义文件名，服务器文件地址又是不同域的。可以用上面转成二进制流下载并重命名文件。

但这样会耗费比较大的浏览器内存，需要前端完全接收完文件再生成前端下载地址，速度慢且容易崩溃。

最后采取的方式是在请求接口中传递一个文件名参数给后端，后端返回使用这个文件名重命名的文件。这个文件名参数添加在了`Content-Disposition`这个响应头上，`Content-Disposition:attachment;filenamefilename=xx.tar.gz`，这样就实现了自定义文件名的需求。

另外此处还遇到传递中文文件名，下载文件名乱码，响应头`Content-Disposition`的内容乱码，服务器端没有处理好正确解码方式的问题。

## Reference

- [`<a>` - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
- [前端常见问题和技术解决方案 - 掘金](https://juejin.cn/post/7088144745788080142#heading-36)
