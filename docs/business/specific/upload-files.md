---
sidebar_position: 2
keywords: [upload files 文件上传 分片上传]
---

# 文件上传

## 计算文件 hash

- 为什么需要计算文件哈希值？

  相同文件不重复上传，节省数据库资源，以及重复上传时节省时间。
  文件的 hash 可以理解为一个文件的指纹。后端存储文件使用文件名或文件的大小等都不科学，容易产生同名覆盖或多次存储相同的文件浪费资源的问题。所以在文件上传时，需要先计算文件的 hash，判断后台是否已经存在此文件，如果不存在再重新上传，存在的此文件时直接提示秒传成功。

### 使用`spark-md5`计算一个文件的 hash

`npm install --save spark-md5`

可以使用`SparkMD5.hashBinary(str, raw)`直接对文件的二进制字符串计算 hash ,但在文件体积比较大时，存在卡顿等问题。一般采用对文件进行分片，然后进行增量计算 hash，相对稳定，同时可以统计当前计算 hash 的进度。

```js
import SparkMd5 from "spark-md5";
//[spark-md5 - npm](https://www.npmjs.com/package/spark-md5)
// 增量计算 hash
const calculateHash = (file, chunkSize) =>
  new Promise((resolve, reject) => {
    let blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMd5.ArrayBuffer(),
      fileReader = new FileReader();

    fileReader.onload = function (e) {
      spark.append(e.target.result); // Append array buffer
      console.log("current chunk index", currentChunk);
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
      } else {
        let fileHash = spark.end(); //compute hash
        resolve(fileHash);
      }
    };

    fileReader.onerror = function (e) {
      reject(e);
    };

    function loadNext() {
      const start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

    loadNext();
  });

//usage:
//chunkSize = 2097152, // Read in chunks of 2MB
calculateHash(file, chunkSize)
  .then((res) => {
    console.log("computed hash", res);
  })
  .catch((e) => {
    console.log(e);
  });
```

> 扩展：
> 可以在上述逻辑中添加计算 hash 的进度：当前计算到的分片数/总分片数

### 文件切片
blob.slice

## Reference

- [spark-md5 - npm](https://www.npmjs.com/package/spark-md5)
- [前端通过 spark-md5.js 计算本地文件 md5 - 掘金](https://juejin.cn/post/6844903641527091208)
- [Javascript 中的二进制数据](https://zhangkai.pro/2020/09/09/binary-data-in-javascript) ArrayBuffer with BinaryString
- [【文件上传那些事儿】- 03 两种计算 hash 的方式 - 掘金](https://juejin.cn/post/6919690643136577550#heading-4) 计算 hash 进一步阅读
