# js中数组去重复简单方法
### 2018-04-17

js数组去重复的方法有很多，但是都显得比较麻烦，比较简单的方法是使用ES6添加的特性set去重。

```
var arr = [1, 2, 3, 3, 4, 4,'5', 5, 'hhh', 'nn', 'hhh'];
var set = new Set(arr);
var new_arr = Array.from(set);
```

打印new_arr的结果为

[1, 2, 3, 4, "5", 5, "hhh", "nn"]

 

注意字符串5和数字5是不一样的。