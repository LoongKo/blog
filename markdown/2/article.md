---
title: html局部打印
date: 2016-12-08
categories: html
tags: html
---
html页面局部打印的小栗子

只要修改点击打印的按钮和打印的div区域的id就行啦

```
<!DOCTYPE html>
<html>
<head>
  <title>print test page</title>
  <meta charset="utf-8">
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js">
</script>
<script type="text/javascript">
//貌似要jq 1.6版本以上才支持prop函数
  $(document).ready(function(){
    var print_click = "print"; //打印的按钮的id
    $("#" + print_click).bind("click", function(){
      var print_id = "print_content"; //要打印的div的id
      var k = $("#" + print_id).prop("outerHTML");
      $("body *").hide();
      $("body").append(k);
      window.print();
      $("body *").show();
      $("body #" + print_id + ":last").remove()
    })
  })
</script>
</head>
<body>
<div>
  <div>不需要打印</div>
  <div id="print_content">打印的内容</div>
  <button id="print">打印</button>
</div>
</body>
</html>
```
