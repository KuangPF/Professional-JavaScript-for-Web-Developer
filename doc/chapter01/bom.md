## 浏览器对象模型（BOM）

### 定义

BOM 是 Browser Object Model，浏览器对象模型。

上一章节说了，DOM 是操作文档出现的接口，那么可以联想一下， BOM 是为了控制浏览器的行为出现的接口。那么浏览器可以做什么呢，比如可以 alert 一个消息，或者跳转到另一个页面、前进、后退等等，程序还可能需要获取屏幕的大小之类的参数。比如：

``` javascript
location.href = "https://github.com/KuangPF";
```

这个 location 就是 BOM 里的一个对象。又比如：

``` javascript
window.close(); // 关闭当前窗口
```

window 也是 BOM 的一个对象,通过这个对象可以获取窗口位置、确定窗口大小、弹出对话框等等。

### 小结

DOM 是为了操作文档出现的 API，document 是其的一个对象；

BOM 是为了控制浏览器行为出现的 API， window 是其的一个对象。