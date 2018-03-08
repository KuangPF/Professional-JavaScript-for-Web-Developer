## <script> 标签

对于我们来说 `<script>` 标签是比较熟悉的，他最大的作用就是加载 JavaScript 代码，其中有两种方式，**内联方式**和**外置方式** 。所谓的内联方式就是在 html 文件中通过 `<script> </script>` 直接引入，而外置方式就是将 JavaScript 代码写在外部的一个文件里面，在 html 文件中通过 `<script>` 标签的 src 属性引入。这两种方式，外置方式明显好于内联方式，主要表现在已下几点：

* **可维护性**：外置 Javascript 文件可以被多个页面调用而不用在每个页面上反复地书写.如果有需要改变的部分,你只需要在一处修改即可.所以外置JavaScript 导致代码工作量减少,进而使得维护手续也更加方便。

* **关注点分离**：将 JavaScript 封装在外部的.js文件遵循了关注点分离的法则.总体来说,分离 HTML,CSS 和 JavaScript 从而让我们更容易操纵他们.而且如果是多名开发者同步工作的话,这样也更方便。

* **表现性**：外置 JavaScript 文件可以被浏览器缓存住,但是内联 JavaScript 在每次页面加载的哦时候都会被重新加载。

### <script> 标签属性

* **async**：可选。表示应该立即下载脚本，下载完以后立即执行，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本。只对外部脚本文件有效。
* **charset**：可选。表示通过 src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值，因此这个属性很少有人用。
* **defer** ：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。IE7 及更早版本对嵌入脚本也支持这个属性。
* **language** ：已废弃。原来用于表示编写代码使用的脚本语言（如 JavaScript 、 JavaScript1.2或 VBScript ）。大多数浏览器会忽略这个属性，因此也没有必要再用了。
* **src** ：可选。表示包含要执行代码的外部文件。
* **type** ：可选。可以看成是 language 的替代属性；表示编写代码使用的脚本语言的内容类型（也称为 MIME 类型）。虽然 text/javascript 和 text/ecmascript 都已经不被推荐使用，但人们一直以来使用的都还是 text/javascript 。实际上，服务器在传送 JavaScript 文件时使用的 MIME 类型通常是 application/x–javascript ，但在 type 中设置这个值却可能导致脚本被忽略。另外，在非IE浏览器中还可以使用以下值： application/javascript 和 application/ecmascript 。考虑到约定俗成和最大限度的浏览器兼容性，目前 type 属性的值依旧还是 text/javascript 。不过，这个属性并不是必需的，如果没有指定这个属性，则其默认值仍为text/javascript 。

### <script> 标签 加载 JavaScript 的顺序

<script> </script> 标签一般放在 html 中的两个位置。

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>script 标签</title>
  <script type="text/javascript" src="./js/01.js"></script>
  <script type="text/javascript" src="./js/02.js"></script>
</head>

<body>
  <!-- content -->
  <script type="text/javascript" src="./js/03.js"></script>
</body>

</html>
```

##### 放在 head 里面

这种做法的目的就是把所有外部文件（包括 CSS 文件和 JavaScript 文件）的引用都放在相同的地方。可是，在文档的 `<head>` 元素中包含所有 JavaScript 文件，意味着必须等到全部 JavaScript 代码都被下载、解析和执行完成以后，才能开始呈现页面的内容（浏览器在遇到 `<body>` 标签时才开始呈现内容）。这种做法在用户体验方面明显很差。

为了避免这个问题，就需要将 JavaScript 引用放在 `<body>` 元素中页面内容的后面，例如引入 03.js 文件。

##### 放在 body 底部

将 JavaScript 引用放在 `<body>` 元素中页面内容的后面一般是开发当中推荐的写法。

### 延迟加载

`<script>` 标签定义了 defer 属性，这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在 `<script>` 元素中设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行（会下载，但不会执行）。

``` html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>script 标签</title>
  <script defer="defer" type="text/javascript" src="./js/01.js"></script>
  <script defer="defer" type="text/javascript" src="./js/02.js"></script>
</head>

<body>
  <!-- content -->
  <script type="text/javascript" src="./js/03.js"></script>
</body>

</html>
```
01.js 和 02.js 将延迟到浏览器遇到 </html> 标签后再执行 。HTML5 规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于 DOMContentLoaded 事件执行。在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件触发前执行，因此最好只包含一个延迟脚本。

### 异步加载

HTML5 为 <script> 元素定义了 async 属性。这个属性与 defer 属性类似，都用于改变处理脚本的行为。同样与 defer 类似， async 只适用于外部脚本文件，并告诉浏览器立即下载文件。但与 defer 不同的是，标记为 async 的脚本并不保证按照指定它们的先后顺序执行，一旦下载完后立即执行，即尽快执行。例如：

``` html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>script 标签</title>
  <script async type="text/javascript" src="./js/01.js"></script>
  <script async type="text/javascript" src="./js/02.js"></script>
</head>

<body>
  <!-- content -->
  <script type="text/javascript" src="./js/03.js"></script>
</body>

</html>
```
02.js 可能会在 01.js 之前执行，确保两者之间互不依赖非常重要。另外一点需要注意的是指定 async 属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。为此，建议异步脚本不要在加载期间修改 DOM。

### 建议
建议的方式是把 `<script>` 写在 `<body>` 底部，如果需要使用百度谷歌分析或者不蒜子等独立库时可以使用 async 属性，若你的 `<script>` 标签必须写在`<head>` 头部内可以使用 defer 属性防止页面加载阻塞。