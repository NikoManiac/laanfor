---
title: "【壹译】为什么 CSS 让人沮丧"
date: "2020-03-04"
path: /blog/why-is-css-frustrating
tags: CSS
layout: post
---

> 本文翻译自 https://css-tricks.com/why-is-css-frustrating/

Kevin Powell 有一个话题讨论了这个问题。他相信有很多人认为 CSS 是让人恼火的语言。

> “CSS 和 Javascript 从 0 开始计数一样不直观，但是因为你学会了并且接受了，所以还好。
>
> 真正的问题不在于 CSS。如果你使用很困难或者觉得不直观，这是因为你并不理解如何使用 CSS。
>
> — Kevin Powell (@KevinJPowell) [February 24, 2020](https://twitter.com/KevinJPowell/status/1231979376830484481?ref_src=twsrc^tfw)”

为什么人们喜欢 Javascript 或者其他的编程语言，并且深入的学习它，却在 CSS 上浅尝辄止。当我读到 Jeremy Keith 的 [CSS is simple, but not easy](https://adactio.com/journal/12571)的时候，提醒了我。

> “并像其它的编程语言那样，我们需要理解循环、变量以及一些其它的概念。CSS 理解起来十分简单。也许正因为它获得了“简单”的名声，给人感觉“不复杂”，但是它并不简单，错误的把“简单”理解成“容易”导致了问题。
>
> 我认为这常常发生在一些初学者的身上。听起来简单但是并不容易。当他们去试着使用它的时候，它并不工作。这必定会让人沮丧，因为他们觉得凭借自己的才智，CSS 应当很容易才是。所以开发者开始怪罪语言本身。他们说 CSS 有问题的，所有试着去使 CSS 能够像大部分编程的方式那样去思考。”

很多时候，我和别人一起解决的 CSS 的布局问题时发现，当语言太难理解需要去学习和掌握的时候，CSS 优先级往往很低。也许我们都经历过与浏览器不同的渲染结果作斗争的事情。大多情况下，我们都能解决的问题，但是下一次遇到相似的总是记不住。

事实上，我猜工程师面对的最大的问题以及令他们沮丧最大的原因是：CSS 使你不得不去面对 Web 浏览器。CSS 需要兼容。我们需要考虑不同的设备，用不同的方式去检查网站：移动端、web 端、没有鼠标的情况、没有键盘的情况等等。你不得不使用 JavaScript 处理这些兼容问题。但是很容易去处理。但是你不能不管你的网站布局在手机上无法正常显示。

像[a guide to centering in CSS](https://css-tricks.com/centering-css-complete-guide/) 类似文章存在，并不是因为 CSS 是无法工作的，而是它有太多的变量以至于像一个简单的问题：“如何居中文字？”实际上比看起来复杂的多。这里有很多的上下文缺失。

Brandon Smith 的文章 [CSS is awesome](https://css-tricks.com/css-is-awesome/)的讨论提醒了我，我们应该尊重语言，并且去学习如何使用：

> CSS 之所以很难，是因为属性的内部相互影响。当你设置一个属性的时候，从来都不是设置一件东西。这个东西与其他很多东西相结合、相互影响、相互矛盾，包括那些你自己从来没有设置过的默认设置。
>
> 缓解这一现状的经验法则就是：不要设置你不需要的东西。网页有默认的渲染。书写好的 CSS 应该是利用它而不是覆盖它。如果可以，使用百分比或者视图单位而不是媒体查询。尽量使用`min-widht`带起`width`。思考规范，知道真正的意义是什么，而不是单纯的添加属性让它看起来工作。试着去体会如何解决浏览器布局和大小的问题，在此基础上做出明智的改变和补充。与 CSS 一起工作，而不是反对它。

&end

> “壹译”计划是逼迫自己学习英语的一种方式，翻译难免存在问题，欢迎指正。