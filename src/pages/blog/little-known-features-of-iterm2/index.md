---
title: "【壹译】鲜为人知的iTerm2特性"
date: "2020-03-03"
path: /blog/little-known-features-of-iterm2
tags: iTerm2
layout: post
---

> 本文翻译自https://banga.github.io/blog/2020/03/02/little-known-features-of-iterm2.html

iTerm2 有着大量的鲜为人知的特性使得开发变得容易。

## 智能选择

当你在巨大的代码库上开发的时候，有很多场景需要在 GitHub 上打开 commit 记录，或者在 Phabricator 中 reversions。这通常需要粘贴复制一个独特的 URL，并且在浏览器中打开。例如，你也许想要通过一次点击在 Github 上打开 hasses 或者 PRs。你可以使用 iTerm2 识别出任意的 id，并使用[Smati Selections](https://www.iterm2.com/documentation-smart-selection.html)的`Command-clicked`来使用自定义的 actions。

下面有两个例子：

### 在 GitHub 上打开 commit

![](https://i.loli.net/2020/03/03/YOyxINt8Dl7kQWV.gif)

为了使 Command-clicking 能够在 GitHub 上打开 commit hash，需要做如下操作：

1. 安装[hub](https://github.com/github/hub)
2. 在 iTerm2 的设置里`Profiles -> Advanced -> Smart Selection -> Edit`
3. 点击按钮`+`添加新的规则设置 `Regular Expression`为`[0-9a-f]{8,40}`
4. 点击`Edit Actions...`并添加新的 action
5. 设置`Action`为`Run Command...`
6. 设置`Parameter`为`cd "\d" && /usr/local/bin/hub browse -- commit/\0`,如果你的`hub`安装在不同的目录，你需要设置成你的安装目录。

一旦完成，`Command-click`会打开在 GitHub 上的仓库。你也可以自定义打开 GitHub 上的 PRs and Issues。

### 在 Phabricator 中打开 revisions

1. 在 iTerm2 的设置里`Profiles -> Advanced -> Smart Selection -> Edit`
2. 点击按钮`+`添加新的规则设置 `Regular Expression`为`[0-9a-f]{8,40}`
3. 点击`Edit Actions...`并添加新的 action
4. 设置`action`为`Open URL...`
5. 设置`Parameter`为`https://secure.phabricator.com/\0`或者你的组织的 URL。

## 动态的配置文件

如果你在进行的工作在某些特殊的场景下需要启动多个 terminal seesion，在各个环境中切换会让人烦躁。iTerm2 的[动态配置](https://www.iterm2.com/documentation-dynamic-profiles.html)文件允许你可以创建依赖其它配置文件的自定义配置文件。你可以使用它创建不同级别的配置文件在不同环境中共享你公公的配置。

例如，如果你的项目总是需要运行`npm run build` 、 `npm run server`、`npm run worker` 在开发期间。你可以使用动态配置使得启动 iTerm2 的时候运行以上的命令，如下：

1. 在你的 terminal 中，通过运行`uuidgen`生成 4 个 GUID，并复制。

2. 创建文件`~/Library/Application Support/iTerm2/DynamicProfiles` 内容如下（需要替换`<...>`）:

   ```json
   {
     "Profiles": [
       {
         "Name": "Development",
         "Guid": "<guid1>",
         "Dynamic Profile Parent Name": "Default",
         "Working Directory": "<path-to-your-project>",
         "Custom Directory": "Yes"
       },
       {
         "Name": "Build",
         "Guid": "<guid2>",
         "Dynamic Profile Parent Name": "Development",
         "Initial Text": "npm run build"
       },
       {
         "Name": "Server",
         "Guid": "<guid3>",
         "Dynamic Profile Parent Name": "Development",
         "Initial Text": "npm run server"
       },
       {
         "Name": "Worker",
         "Guid": "<guid4>",
         "Dynamic Profile Parent Name": "Development",
         "Initial Text": "npm run worker"
       }
     ]
   }
   ```

3. 重启 iTerm2

这里的配置会在 iTerm2 中作为动态配置。随后你可以使用这些配置启动 session，来创建`window arrangement`，然后按`Command-Shift-S`保存。然后你可以随时使用`Command-Shift-R`来启动所有的 seesions 或者告诉 iTerms 当 arrangement 打开的时候启动。查看[ https://blog.andrewray.me/how-to-create-custom-iterm2-window-arrangments/](https://blog.andrewray.me/how-to-create-custom-iterm2-window-arrangments/)了解更多关于 window arrangements 的介绍。

> “壹译”计划是逼迫自己学习英语的一种方式，翻译难免存在问题，欢迎指正。
