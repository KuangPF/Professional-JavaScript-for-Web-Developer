## JavaScript 简史

### 1. JavaScript 发布背景
在 Web 技术日益流行的时候，大概在 1995 年左右，人们对客户端脚本语言的需求越来越强烈。举一个例子，在当时的表单验证完全是由后台来完成的，而在那个时候绝大多数因特网用户都使用速度仅为 28.8kbit/s 的“猫”（调制解调器）上网，想象一下，当你填写完一个表单，单击“提交”按钮，然后等待 30 秒钟，最终服务器返回消息说有一个必填字段没有填好...,我想你砸电脑的心都有了(那是电脑应该挺贵的...估计不舍得砸)。也正是由于这样的问题，当时的  [Netscape](https://zh.wikipedia.org/wiki/%E7%B6%B2%E6%99%AF) 决定开发一种脚本语言来处理这种简单的脚本验证。

好，JavaScript 大佬来了。

当时就职于 Netscape 公司的布兰登·艾奇（Brendan Eich），开始着手为计划于 1995 年 2 月发布的Netscape Navigator 2 开发一种名 为LiveScript 的脚本语言——该语言将同时在浏览器和服务器中使用（它在服务器上的名字叫 LiveWire）。为了赶在发布日期前完成 LiveScript 的开发，Netscape 与 Sun 公司建立了一个开发联盟。在 Netscape Navigator 2 正式发布前夕，Netscape 为了搭上媒体热炒 Java 的顺风车，临时把 LiveScript 改名为 JavaScript。现在知道为什么叫 JavaScript 了吧，也知道与 Java 的关系了吧，就是上了 Java 的车嘛，蹭了一下热度。也正是由于这个原因，布兰登·艾奇（Brendan Eich）就成为了 JavaScript 之父。

也正是由于 JavaScript 1.0 获得了巨大成功，Netscape 随即在 Netscape Navigator 3 中又发布了 JavaScript 1.1，Web 虽然羽翼未丰，但用户关注度却屡创新高。在这样的背景下，Netscape 把自己定位为市场领袖型公司，但是市场总告诉我们一个规律：不能一家独大。此时微软决定向与 Navigator 竞争的自家产品 Internet Explorer 浏览器投入更多资源，没错，就是大名鼎鼎的IE，虽然现在微软自己都放弃了IE，不过当时还是老大哥的。在 Navigator 3 发布后不久，微软就在其 Internet Explorer 3中加入了名为 JScript 的 JavaScript 实现（命名为 JScript 是为了避开与 Netscape 有关的授权问题），由于 windows 系统自带 IE 浏览器，再加上了 JScript ，想象一下，Internet Explorer 3 对 Navigator 3的冲击有多大，两家之间的竞争会有多强烈。

微软推出其 JavaScript 实现意味着有了两个不同的 JavaScript 版本：Netscape Navigator 中的JavaScript、Internet Explorer 中的JScript。与 C 及其他编程语言不同，当时还没有标准规定 JavaScript 的语法和特性，两个不同版本并存的局面已经完全暴露了这个问题。随着业界担心的日益加剧，JavaScript的标准化问题被提上了议事日程。

1997 年，以 JavaScript 1.1 为蓝本的建议被提交给了欧洲计算机制造商协会（ECMA，European Computer Manufacturers Association）。该协会指定 39 号技术委员会（TC39，Technical Committee #39）负责“标准化一种通用、跨平台、供应商中立的脚本语言的语法和语义”（http://www.ecma
international.org/memento/TC39.htm）。TC39 由来自 Netscape、Sun、微软、Borland 及其他关注脚本语言发展的公司的程序员组成，他们经过数月的努力完成了 ECMA-262——定义一种名为 ECMAScript（发音为“ek-ma-script”）的新脚本语言的标准。

第二年，ISO/IEC（International Organization for Standardization and International ElectrotechnicalCommission，国标标准化组织和国际电工委员会）也采用了 ECMAScript 作为标准（即 ISO/IEC-16262）。自此以后，浏览器开发商就开始致力于将 ECMAScript 作为各自 JavaScript 实现的基础，也在不同程度上取得了成功。

### 2. 总结：

* ##### JavaScript1.0 发布时间

1995年

* ##### JavaScript之父

布兰登·艾奇（Brendan Eich）

* ##### ECMAScript

这个会在后再进行一个详细地介绍，说简单一点，ECMAScript 就是新脚本语言的一种标准，然后各个浏览器厂商就根据这个标准进行开发。

* ##### TC39

这个其实挺有意思的，想象一下，现在的 **ECMAScript 2015**，**ECMAScript 2016**， **ECMAScript 2017** 就是 ECMAScript 标准，那么这些标准是由哪些人指定的呢，毫无疑问，就是TC39成员，这些成员主要是各大浏览器厂商的程序员，他们就坐在一起开一下会，然后讨论一下在下一代 ECMAScript 标准中要添加什么样的特性等等，从而就形成新的 ECMAScript 标准。但实际发布 ECMAScript 标准有一套严格的流程，并不是像开个会这么简单，这样描述是为了理解 ECMAScript 标准。 按现在的规定，每年6月就会发布新一代的 ECMAScript 标准。