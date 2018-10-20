# blog

## 自己利用一些js插件写的自用博客

主要是自己写markdown文章，然后通过[marked.js](https://github.com/markedjs/marked)插件转成html，最后利用github pages展示出来。[demo](hhttps://loongko.github.io/blog)

markdown文件是在线用[marked.js](https://github.com/markedjs/marked)插件解析的，不像hexo等方式在本地已经生成了静态的html文件，所以性能上肯定是hexo的方式比较好，我也推荐hexo的方式，本人的主要博客就是用hexo搭建的，[LoongKo](https://loongko.github.io)。

唯一的好处是可以直接在github页面图形化操作新建文章文件，写文章内容以及发布，主要写这个东西的原因纯属兴趣，想试试而已o(^▽^)o

写博客步骤：


1.打开markdown文件夹新建一个文件夹，文件夹名字为纯数字，逐渐递增，最好相邻，间隔不能超过10。因为读取markdown文件夹名字是通过for循环一直增加i的，i就是markdown文章文件夹名字，通过js读取文件夹没什么好的办法，知道的麻烦告诉我一声吧o(^▽^)o，然后如果连续10次都读取不到文件就判断读完了，所以间隔不要超过10，本来是连续文件夹名字数字最好的但是考虑到写错了或者中间删除文章所以增加10次读取，总没有连续删除十篇连号的文章的情况吧。

3.接下来在新建的文件夹里面新建一个article.md文件，打开它就可以写文章啦，里面头部信息，title，date和categories是必填的

4.可以参照之前写的
