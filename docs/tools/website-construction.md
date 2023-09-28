---
tags: [dev, usage, linux]
---

# 网站构建

## Linux 基础

- cd change directory
  - cd 相对路径（相对于当前工作目录）
    - ../ 表示当前文件夹的父文件夹 （中合路径中的上一个文件夹）anv/.. =0
    - ./ 表示当前文件夹，可忽略
  - cd 绝对路径，以 / 开头； （cd - 上一个文件夹）

文件相关

```bash
mkdir a # 创建目录，名称为a
mkdir -p a/b # 创建目录a和子目录b
mv a /tmp/b # 移动文件或文件夹
cp # 复制(复制目录:cp -r )

rm

find xx
ls # 当前目录的所有内容
ls -l #当前目录内容的更多信息
ll

cd # 显示当前目录下的文件
pwd # 显示目前所在的路径

cat xx  # 查看文件内容(较大文件)
less # 查看大文件，类似vim 方便查找

mount /dev/sdb1 /mnt/usb #挂载外接设备到/mnt/usb

tail -f  access.log # 滚动的方式查看日志
tail -n100 access.log #静态查看某个文件的最后n行
head -n100 access.log #静态查看某个文件的最前n行

grep -rn --color POST access.log #查看 log 中的 post 请求。 对内容进行过滤。参数n则输出具体的行数，用来快速定位
```

网络相关

```bash
netstat -a　#列出所有端口 (包括监听和未监听的)
netstat -lnp|grep 80 # 检查端口使用的状态
netstat -ntpl # 查看所有端口状态
```

vim 编辑文件

```bash
vim a.js
i #insert
esc #退出insert
:q #退出
:wq #保存并退出
```

```bash
sudo -i #　使用root
su - mike # 切换用户，加上 - 是连环境变量一起切换

service #服务管理
service mysql restart
systemctl #兼容service命令
systemctl mysql restart
ps -ef|grep nginx #查看进程/线程状态

#任务管理器
htop

# ssh 连接远程实例
ssh -i xx.pem root@139.196.242.xx

#退出ssh
logout
exit
CTRL + D

# win /linux 传文件/复制文件
scp -P 1007 xx.txt root@192.168.1.1:/tmp
     #端口

wget -c http://www.xxx/xxx.deb #下载文件，支持断点续传
```

### Ubuntu

安装软件 apt-get

```bash
apt install zsh/node/pm2
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

```

### CentOS

安装软件：yum

```bash
 yum install zsh
 curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
 sudo yum install nodejs
 npm install pm2
```

## 部署

首先在服务器开启对应端口的访问（入站出站配置）

### nginx

```bash
# nginx
nginx -s reload # 重新加载配置文件，热重启，修改配置之后需要
vim  nginx.conf
```

单页面应用基本配置栗子：

```
server {
        listen 80;
        # server_name your.domain.com;

        root /home/root/demo;
        index index.html index.htm;

        location / {
                try_files $uri $uri/ /index.html;
        }
        location ^~ /assets/ {
                gzip_static on;
                expires max;
                add_header Cache-Control public;
        }
        error_page 500 502 503 504 /500.html;
        client_max_body_size 20M;
        keepalive_timeout 10;
}

```

#### location 块能否被重复匹配

不可以！一旦一个 location 块被匹配，该块的配置就会被用于处理该请求，其他 location 块的配置将不会被合并或继承。

如果想要复用其他 location 内的配置，可能需要在不同的 location 块中重复相同的配置，或者使用 include 指令来引入共用的配置片段。

#### proxy——pass 的匹配规则

如果 proxy_pass 中的 URL 包含子路径（哪怕是/），则 location 中的路径被替换，即直接使用 proxy_pass。在proxy_pass中谨慎加 /

[nginx 在访问链接末尾不加斜杠导致的自动重定向 | WONDER's Notes](https://wonderlust91.github.io/2023/05/01/nginx%E5%9C%A8%E8%AE%BF%E9%97%AE%E9%93%BE%E6%8E%A5%E6%9C%AB%E5%B0%BE%E4%B8%8D%E5%8A%A0%E6%96%9C%E6%9D%A0%E5%AF%BC%E8%87%B4%E7%9A%84%E8%87%AA%E5%8A%A8%E9%87%8D%E5%AE%9A%E5%90%91/#%E6%89%A9%E5%B1%95%E7%9F%A5%E8%AF%86)

#### nginx CORS

```nginx.conf
#
# Wide-open CORS config for nginx
#

server{
  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Credentials' 'true';
  add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
  add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
  location /api/{
    if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Allow-Origin' '$http_origin';
      #
      # Om nom nom cookies
      #
      add_header 'Access-Control-Allow-Credentials' 'true';
      add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';

      #
      # Custom headers and headers various browsers *should* be OK with but aren't
      #
      add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';

      #
      # Tell client that this pre-flight info is valid for 20 days
      #
      add_header 'Access-Control-Max-Age' 1728000;
      add_header 'Content-Type' 'text/plain charset=UTF-8';
      add_header 'Content-Length' 0;
      return 204;
    }
  }

}

```

也可以抽出单独文件并 include 进来。

```conf
  location / {
      root      /var/html;
      # preflight対応
      include conf.d/pf.conf;
  }
```

```pf.conf
  if ($request_method = 'OPTIONS') {
  add_header 'Access-Control-Allow-Origin' '*';
  add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
  add_header 'Access-Control-Allow-Credentials' 'true';
  add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
  add_header 'Access-Control-Max-Age' 1728000;
  add_header Content-Type 'text/plain charset=UTF-8';
  add_header Content-Length 0;
  return 204;
}
```

- [Wide open nginx CORS configuration :: Michiel Kalkman — Software | Security | Product | Design](https://michielkalkman.com/snippets/nginx-cors-open-configuration/)
- [【覚書】Nginx で複数の CORS と preflight に対応する - Qiita](https://qiita.com/Toshinori_Hayashi/items/851f795b10e7cdcc202a)

#### 实际问题

做的项目要给客户演示，由于公司内网的关系，针对服务器的某一端口开通了外网映射。但项目中使用的 put/delete 请求被内网网关限制，通过外网地址访问时 使用 PUT/DELETE 请求被限制，报错：net::ERR_CONNECTION_RESET 。

建立在网关规则没法修改，后端也不支持把 put/delete 请求修改为 post 的前提下，如何解决此问题？

解决方案：

- 前端请求根据不同方法加 header ，nginx 根据 header 中某个变量的值修改 method

  在前端代码请求中，将 put/delete 请求修改为 post ，添加对应的 request header

  nginx 配置

  ```
  server {
    listen       3000;
    server_name  your-domain.com;
  	set $method $request_method;
        if ($http_X_HTTP_Method_Override ~* 'DELETE') {
          set $method DELETE;
        }

  	if ($http_X_HTTP_Method_Override ~* 'PUT') {
          set $method PUT;
        }

        proxy_method $method;
    location / {
        proxy_pass http://localhost:3001;
    }
  }

  ```

  可参考 [用域名访问接口, get 和 post 请求均正常,而 put 和 delete 请求均无法正常使用\_相约黄昏后 007 的博客-CSDN 博客\_put 请求被拦截](https://blog.csdn.net/weixin_53458434/article/details/118673550)

- 如果项目代码中有 node 中间层也可以用 node 来解决，目前使用了 koa

  ```js
  app.use(async (ctx, next) => {
    //将put/delete 请求替换回来 'x-http-method-override': 'PUT'，解决内外网映射无法使用put/delete请求的问题
    if (ctx.request.header['x-http-method-override']) {
      ctx.request.method = ctx.request.header['x-http-method-override'];
    }
    await next();
  });
  ```

### pm2

```bash
# pm2 nodejs 的进程管理工具,也可以管理其他linux进程
pm2 start xx.js -- args for xx.js   #重启机器后就没有了
pm2 list
pm2 show/stop/restart id
pm2 save #save后,再重启机器不会丢失
pm2 resurrect #重启进程
pm2 startup #配置为开机自启动 pm2 unstartup
```

### https

```bash
# ssl 证书
curl https://get.acme.sh | sh -s email=brightzoe@qq.com

#ssl证书 验证域名  acme.sh
acme.sh --issue --standalone -d 7.brightzoe.top

# 命令未找到，使用绝对路径验证域名
/root/.acme.sh/acme.sh --issue --standalone -d 7.brightzoe.top

#设置https
const https = require('https')
const fs = require('fs')


https.createServer({
  key:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.key'),
  cert:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.cer'),
  app
},(req,res)=>{
  res.end('hello')
}).listen(443,()=>{
  console.log(443)
})
```

## 多路部署

DNS 解析可以配置规则，在目前国内访问国外网络存在些问题的情况，可以考虑将域名解析到不同的 IP 上。

如何双线部署网站？ DNS 解析的服务商，如 DNSPOD,阿里云解析都可以设置智能解析，但目前根据境外境内分别解析，都是收费的。另外了解到这种多线部署的方式，可以将大流量的网站分流，解决流量过大的压力。

前两天尝试将此博客，在境外解析到 github,境内解析到 CODING。这样，国内用户访问，就会访问 CODING 上部署的内容，在境外访问就会访问到 github 上部署的内容。目前取消托管到 CODING 上了，由于静态网站部署不支持选择目录，以及选择分支，更新后自动部署的设置也有些问题，暂时放弃了。

## 使用的一些工具

- Vercel 部署静态网站，运行 python/node/go/ruby 脚本，充当服务器。零配置部署，访问速度快，构建快。

## Reference

- [Hexo 博客 GitHub Pages + CODING 静态网站双部署 | Asurada's Zone](https://asurada.zone/post/Deploy-Hexoblog-To-Codingnet-And-GitHub/)
- [Nginx 从入门到实践，万字详解！ - 掘金](https://juejin.cn/post/6844904144235413512#heading-0)
- [半小时搞会 CentOS 入门必备基础知识 - 掘金](https://juejin.cn/post/6844904080972709901#heading-0)
- [Linux 基础 — Linux Tools Quick Tutorial](https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html)

```

```
