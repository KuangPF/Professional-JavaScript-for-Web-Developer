## 文档对象模型（DOM）

### 1. 什么是文档对象模型

文档对象模型（DOM，Document Object Model）是针对 XML 但经过扩展用于 HTML 的应用程序编程接口（API，Application Programming Interface）。DOM 把整个页面映射为一个多层节点结构。HTML或 XML 页面中的每个组成部分都是某种类型的节点，这些节点又包含着不同类型的数据。看下面这个 HTML 页面：
``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Dom</title>
</head>
<body>
  <div>hello,javascript</div>
</body>
</html>
```
在 DOM 中，这个页面可以通过下图所示的分层节点图表示。

![1-2](https://github.com/KuangPF/Professional-JavaScript-for-Web-Developer/blob/master/img/chapter01/1-2.png)

通过 DOM 创建的这个表示文档的树形图，开发人员获得了控制页面内容和结构的主动权。借助 DOM 提供的 API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。
