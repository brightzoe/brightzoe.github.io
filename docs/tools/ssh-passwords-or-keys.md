# SSH 连接服务器的相关知识

SSH (secure shell) 是一种网络协议，用于计算机之间的加密远程登录。

创建在应用层和传输层基础上的安全协议。

## SSH 的特点

可以把所有传输的数据进行加密，这样"中间人"这种攻击方式就不可能实现了，而且也能够防止 DNS 欺骗 和 IP 欺骗。

传输的数据是经过压缩的，所以可以加快传输的速度。

## SSH 的加密

SSH 从安全和性能两方面综合考虑，结合使用了 Public Key/Private key（公钥/私钥） 和 Secret Key（密钥）。

- Public Key/Private key：非对称加密，安全，但效率低，不适合大规模进行数据的加密和解密操作

  默认生成的密钥对文件名：

  ```
  id_rsa // 私钥
  id_rsa.pub // 公钥
  ```

- Secret Key：对称机密，高效，但安全性相对较低，Key 的分发尤其不方便

如何综合使用的？

- 使用公私钥 （非对称加密），用于建立安全通道前在客户端和服务端传输 Secret Key 和进行身份认证。

- 使用 Secret Key （对称加密），用于作为 SSH 会话的安全保证，对数据进行加密和解密。

## 客户端认证方式

经常使用 Password 与 Public Key 的方式。

Password 的方式不再赘述。

### Public Key

基于非对称加密方式。

服务器如何认证你这台客户端可以连接我呢？

服务器上先需要存储一个由客户端生成的密钥对（在`~/.ssh`目录下）的公钥 到自己的密钥库（Authorized Key）。

服务期端会对一段数据通过公钥进行加密，如果客户端可以证明其可以使用私钥对这段数据解密，则可以说明客户端的身份。

通过 Public Key 进行客户端认证的详细过程？

1. 客户端发起一个 Public Key 的认证请求，并发送 RSA Key 的模数作为标识符。
2. 服务器端检查是否存在请求账号的公钥，以及其拥有的访问权限，一般位置在`/.ssh/authorized_keys`。
3. 服务端使用对应的公钥对一个随机的 256 位的字符串进行加密，并发送给客户端。
4. 客户端使用私钥对字符串进行解密，并将其结合 Session ID 生成一个 MD5 值发送给服务端。 结合 Session ID 的目的是为了避免攻击者采用 重放攻击（replay attack）。
5. 服务端采用同样的方式生成 MD5 值 与客户端返回的 MD5 值 进行比较，完成对客户端的认证。

:::tip
针对连接过的服务器，客户端会有一个`known_hosts`文件来记录连接过的服务器信息。每次连接一个新的远程服务器都会增加一份数据在文件里，包括远程机器 ip 以及公钥。

当客户端再次连接一个服务器的时候，会去查找`known_hosts`文件，如果连接过则直接连接，如果没有连接过则会提示之前没连接过，是否要继续连接？如果选择连接，则会把此次连接的服务器信息记录在此文件中，下次就不会提示啦。

:::

## 连接服务器实践

1. 在客户端生成密钥对。

   ```bash
   ssh-keygen -t rsa -f my.pem -C "username@email.com"

   ssh-keygen -t rsa -C "username@email.com" #与上面格式不同，选一即可

   ```

   生成的密钥对在`~/.ssh`目录下。使用 windows 的话，也可以用文件管理器在`C:\Users\username\.ssh`目录下找到。

2. 将生成的公钥文件添加到服务器的密钥库中。

   ```bash
   cat ~/.ssh/id_rsa.pub # 查看文件内容
   vim ~/.ssh/authorized_keys # 复制到服务器的这个位置
   ```

复制公钥内容然后追加到这个文件即可，如果没有这个文件，需要先创建。

3. 在客户端使用私钥连接服务器。

   ```bash
   ssh -i my.pem root@192.168.1.1
   ```

   或者也可以使用 Xshell 等工具，选择 private key 的方式链接。

//todo:

1. 密码与密钥的关系？
2. 密钥 pub,pem 等关系。如何使用
3. 生成密钥仍然需要密码该如何取消密码？
4. linux 文件层级，~ 与/ 的区别？

## Reference

- [SSH 详解 - 不挑食的程序员 - SegmentFault - 掘金](https://juejin.cn/post/6844903501571604488)
- [一文读懂 authorized*keys 和 known_hosts*游语-CSDN 博客\_authorized_keys 文件作用](https://blog.csdn.net/qq_26400953/article/details/105145103)
