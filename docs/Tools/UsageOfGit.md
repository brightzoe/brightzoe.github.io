# Git 使用

所有的版本控制系统，只能跟踪文本文件的改动，比如 txt,以及所有的程序代码。版本控制系统可以告诉你每次的改动，比如在哪里添加了一个单词，在哪里删除了一个单词。而图片/视频等二进制文件，可以由版本控制系统管理，但没法跟踪文件的变化，只能知道图片大小改变，但具体改了什么是不知道的。

Word 是二进制格式，并不是文本文件，版本控制系统没办法跟踪 Word 文件的改动。使用版本控制系统，要以纯文本方式编写文件，若没有历史遗留问题，使用标准的 UTF-8 编码。

## 常用命令

### 配置

`git config --list` //查看当前配置

`git config --global --edit` //编辑全局配置

`git config --global alias.st status`设置别名

### 一些基本操作

`git init` 初始化仓库

`git add xx.txt` 添加工作区的文件到暂存区;

`git rm xx.txt` 删除工作区文件

`git checkout -- file` 丢弃工作区的修改（用版本库的修改替换工作区版本）

`git commit -m "add a file"` 提交修改到本地版本库;`git commit -a -m"xxxx"`添加并提交

`git status` 掌握工作区状态

`git diff xx.txt` Show changes between commits, commit and working tree, etc

- 一般是把文件暂存在缓冲区前查看在工作区做了哪些修改

`git log (--online/--graph)` 查看提交日志；`git relog`查看所有的命令记录

`git reset --hard <commit—id>` 回退到某个版本。上一个版本:head^

`git reset` 既可以回退版本，也可以把暂存区的修改回退到工作区

`git remote add origin git@github.com:brightzoe/learngit.git`本地仓库关联远程库

`git remote set-url origin URL` 修改远程地址

`git push (-u) origin master`本地库推送到远程，把本地的 master 分支和远程的 master 分支关联，可简化为 git push

### 分支

`git branch` 查看分支

`git branch xx`创建分支

`git checkout/switch <name>`切换分支

`git checkout -b <name>` or `git switch -c <name> `创建并改切换分支

`git checkout -b <branchName> <remoteBranchName>` 拉远程一个新分支下来（本地创建新分支，并给他设定远程分支）

`git branch -d <name>`删除分支;强制删除把 d 改成 D

`git branch --set-upstream-to=origin/branchName branchName ` 建立本地分支和远程分支的关联

`git merge <name>` 合并某分支到当前分支

- 通常，合并分支时，如果可能，Git 会用 Fast forward 模式，但这种模式下，删除分支后，会丢掉分支信息。
  如果要强制禁用 Fast forward 模式，Git 就会在 merge 时生成一个新的 commit，这样，从分支历史上就可以看出分支信息。

`git merge --no-ff -m "xxxx" <name>` 禁用 FF 的合并分支

![分支策略 来源廖雪峰的博客](https://cdn.jsdelivr.net/gh/brightzoe/img/20191229195951.png)

`git pull` 抓取远程分支的新提交

### 标签

`git tag <name>`打标签，默认是打在最新提交的 commit 上。`git tag -d <name>`删除标签

`git tag v0.9 f52c633` 给历史 commit 打标签

`git tag -a <tagname> -m "xxxx"`可以指定标签信息

`git show <tagname>`查看标签信息

- 创建的标签都只存储在本地，不会自动推送到远程。

`git push origin <tagname>` 推动标签到远程 `git push origin --tags`推动所有标签到远程

`git push origin :refs/tags/<tagname>` 先删除本地标签后，此命令删除远程标签

## 注意事项

- git push 的时候有时忽略一些文件夹,注意有没有传上去。有时忽略的文件也会意外的加入版本控制里面,都要注意。

- ssh 方式与 https 方式的不同?

  区别在于对内容的安全管理。使用 https 方式，每次需要验证用户身份信息，添加 ssh-key 后用 ssh 方式则信任当前用户不用再输用户名和密码。没有设置 ssh 前默认用 https 方式，设置了 ssh 后可以更改为 remote 地址(`git remote set-url origin [url]`)，使用 ssh 方式连接,通过 ssh 协议的传输速度最快。具体添加 ssh 的方式不再赘述。

- 忽略特殊文件比如明文密码？

  .gitignore 文件 [Templates in Github](https://github.com/github/gitignore)

- fork 后修改，如何同步源的更新？

  `git remote add upstream <url>`配置上游仓库

  `git fetch upstream`抓取上游仓库（所有分支）的更新

  `git rebase upstream/master`合并

  `git push (origin master)`推送到远程仓库

- `git rebase` 与 `git merge` 的区别

  `git rebase` 的 log 记录更清晰，`git merge` 会生成一条新的 merge commit
  ![git rebase与git merge from stackoverflow](https://i.loli.net/2020/09/06/lGR3ByZYIw8Qfnt.png)

- `git pull` 与 `git fetch` 的区别

  `git pull` = `git fetch` + `git merge`

  ![git流程图](https://i.loli.net/2020/09/06/iO3DlgQRjBXCrM2.png)

## 如何 Pull Request

在哪些情况下可以直接使用 master branch 来提交 Pull Request:

- 你只想为主项目贡献某一处代码，贡献完自己的 repo 就可以扔的那种。
- 你打算为主项目长期贡献代码，而且希望追随原项目的主线开发，不保留自己的特性。
- 你打算为主项目长期贡献代码，默认 master branch 追随原项目主线，把自己的特性放到别的 branch 中。

在哪种情况下应该使用 feature branch 来提交 Pull Request:

- 想用 master branch 完全来做自己的开发。在这种情形下:会从上游库合并更新，但是这些 merge 本身的 commits 显然不可能作为返还到上游库的 Pull Request 的一部分。
- 存在自己的（未被 merge 或者不想被 merge 到上游库的）commits。

> 鉴于 Git 的分布式开发哲学，每一个库均可以看作是一个独立的项目，显然是后一种（为每一个新特性建立一个专门的主题 branch 来向主项目推送 Pull Request）的贡献方式更可取。

## PR 与 MR

Pull Request 与 Merge Request 有区别吗？本质没啥区别，都是请求别人合并你的代码。

#### 一种理解

PR 指的是在不同仓库之间，请求其他人合并你的代码的行为。比如在 GitHub 上,向开源仓库贡献代码，需要自己先 fork 仓库，提交了相应的 commit ，然后提交合并请求到被 fork 的仓库，如上面“如何 Pull Request”所述。

MR 指的是在相同仓库，不同分支之间，请求将当前分支的代码合并到公共分支的行为。例如在公司中，和其他同事合作开发同一项目，大家在同一仓库的不同分支进行开发，在开发完之后，需要提交 MR 到公共分支。

> Merge or pull requests are created in a git management application and ask an assigned person to merge two branches. Tools such as GitHub and Bitbucket choose the name pull request since the first manual action would be to pull the feature branch. Tools such as GitLab and Gitorious choose the name merge request since that is the final action that is requested of the assignee.

上面是 GitLab 官方的说明，PR 与 MR 只是同一种行为的不同叫法。
在其他人合并你的代码时需要执行的命令：

```git
git pull

git merge
```

只是在这两个命令中取了不同的单词来命名。PR 与 MR 都可以直接理解为请求其他人合并你的代码的行为，包含同一仓库的不同分支之间以及不同仓库的之间的操作，无需纠结他们的区别。

## Reference

- [Git Cheat Sheet](https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf)
- [Git 官网](https://git-scm.com/)
- [Learn Git Branching](https://learngitbranching.js.org/)
- [Git 教程，廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/896043488029600)
- [GitHub 官方文档](https://help.github.com/cn)
- [如何参与开源项目并贡献代码](http://www.qtcn.org/bbs/simple/?t53628.html)
- [Pull Request 与 Merge Request 的区别\_azl397985856 的专栏-CSDN 博客](https://blog.csdn.net/azl397985856/article/details/106088794)
