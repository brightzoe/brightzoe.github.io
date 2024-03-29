---
sidebar_position: 2
keywords: [upload files 文件上传 分片上传]
---

# 文件上传

上传流程

- 计算 hash 判断是否需要上传，如果服务端存在该文件则秒传成功
- 大文件按一定大小进行分块
- 按一定策略发送各个分片数据块（串行、并行）
- 服务端判断数据上传是否完成，完整则进行数据合成得到原始文件

## 计算文件 hash

- 为什么需要计算文件哈希值？

  相同文件不重复上传，节省数据库资源，以及重复上传时节省时间。文件的 hash 可以理解为一个文件的指纹。后端存储文件使用文件名或文件的大小等都不科学，容易产生同名覆盖或多次存储相同的文件浪费资源的问题。所以在文件上传时，需要先计算文件的 hash，判断后台是否已经存在此文件，如果不存在再重新上传，存在的此文件时直接提示秒传成功。

### 使用`spark-md5`计算一个文件的 hash

`npm install --save spark-md5`

可以使用`SparkMD5.hashBinary(str, raw)`直接对文件的二进制字符串计算 hash ,但在文件体积比较大时，存在卡顿等问题。一般采用对文件进行分片，然后进行增量计算 hash，相对稳定，同时可以统计当前计算 hash 的进度。

```js
import SparkMd5 from 'spark-md5';
//[spark-md5 - npm](https://www.npmjs.com/package/spark-md5)
// 增量计算 hash
const calculateHash = (file, chunkSize) =>
  new Promise((resolve, reject) => {
    let blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice,
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMd5.ArrayBuffer(),
      fileReader = new FileReader();

    fileReader.onload = function (e) {
      spark.append(e.target.result); // Append array buffer
      console.log('current chunk index', currentChunk);
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
    console.log('computed hash', res);
  })
  .catch((e) => {
    console.log(e);
  });
```

> 扩展：可以在上述逻辑中添加计算 hash 的进度：当前计算到的分片数/总分片数

提升计算速度：

- web worker 计算
- 文件切分，抽样计算，但有一定概率遇到不同的文件计算 hash 值相同的情况

## 文件切片

file.slice

```js
function createChunks(file, size = 5 * 1024 * 1024) {
  const res = [];
  let cur = 0;
  while (cur < file.size) {
    res.push(file.slice(cur, cur + size));
    cur += size;
  }
  return res;
}
```

## 断点续传

碰到网络故障等情况，可以从已经上传的部分开始继续上传未完成的部分，而没必要从头开始上传。

实现方式分两种：

- 服务器告知从哪里开始。再次上传时，服务器返回是否上传过完整文件/切片文件，存在的切片数据。
- 浏览器端自行处理

如果上传中断了，服务器先将该文件写为临时文件，等全部上传完再重命名为正式文件。中断后再次上传，根据临时文件的大小，作为在客户端读取文件的偏移量，重新分片上传。

## Reference

- [spark-md5 - npm](https://www.npmjs.com/package/spark-md5)
- [前端通过 spark-md5.js 计算本地文件 md5 - 掘金](https://juejin.cn/post/6844903641527091208)
- [JavaScript 中的二进制数据](https://zhangkai.pro/2020/09/09/binary-data-in-javascript) ArrayBuffer with BinaryString
- [【文件上传那些事儿】- 03 两种计算 hash 的方式 - 掘金](https://juejin.cn/post/6919690643136577550#heading-4) 计算 hash 进一步阅读
