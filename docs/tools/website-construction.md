# 网站构建

## Linux 基础

- cd change directory
  - cd 相对路径（相对于当前工作目录）
    - ../ 表示当前文件夹的父文件夹 （中合路径中的上一个文件夹）anv/.. =0
    - ./ 表示当前文件夹，可忽略
  - cd 绝对路径，以 / 开头； （cd - 上一个文件夹）

```bash
pwd # 显示目前所在的路径
ls # 显示当前目录下的文件
cp # 复制(复制目录:cp -r )

sudo -i #　使用root

# 网络相关
netstat -a　#列出所有端口 (包括监听和未监听的)
netstat -lnp|grep 80 # 检查端口使用的状态

netstat -ntpl # 查看所有端口状态

# vim 编辑文件
vi a.js
i #insert
esc #退出insert
:q #退出
:wq #保存并退出

#任务管理器
htop

# ssh 连接远程实例
ssh -i xx.pem root@139.196.242.xx

#退出ssh
logout
exit
CTRL + D

# win /linux 传文件/复制文件
scp -P 1007 xx.txt root@vote.brightzoe.top:~
     #端口

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
curl https://get.acme.sh | sh

#ssl证书 验证域名  acme.sh
acme.sh --issue --standalone -d vote.brightzoe.top

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

## Reference

- [Hexo 博客 GitHub Pages + CODING 静态网站双部署 | Asurada's Zone](https://asurada.zone/post/Deploy-Hexoblog-To-Codingnet-And-GitHub/)
- [Nginx 从入门到实践，万字详解！ - 掘金](https://juejin.cn/post/6844904144235413512#heading-0)
- [半小时搞会 CentOS 入门必备基础知识 - 掘金](https://juejin.cn/post/6844904080972709901#heading-0)
- [Linux 基础 — Linux Tools Quick Tutorial](https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html)
