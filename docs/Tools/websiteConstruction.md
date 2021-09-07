## 多路部署

DNS 解析可以配置规则，在目前国内访问国外网络存在些问题的情况，可以考虑将域名解析到不同的 IP 上。

如何双线部署网站？ DNS 解析的服务商，如 DNSPOD,阿里云解析都可以设置智能解析，但目前根据境外境内分别解析，都是收费的。另外了解到这种多线部署的方式，可以将大流量的网站分流，解决流量过大的压力。

前两天尝试将此博客，在境外解析到 github,境内解析到 CODING。这样，国内用户访问，就会访问 CODING 上部署的内容，在境外访问就会访问到 github 上部署的内容。目前取消托管到 CODING 上了，由于静态网站部署不支持选择目录，以及选择分支，更新后自动部署的设置也有些问题，暂时放弃了。

## Linux 基础

### Ubuntu

安装软件 apt-get

`apt install zsh/node/pm2`

### Centos

安装软件：yum

```bash
 yum install zsh
 curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
 sudo yum install nodejs
 npm install pm2
```

## reference:

1.  Hexo 博客 GitHub Pages + CODING 静态网站双部署 https://asurada.zone/post/Deploy-Hexoblog-To-Codingnet-And-GitHub/
