# php保留键随机打乱数组顺序
最近遇到一个需求，把一个数组随机打乱顺序，我们可以用php的shuffle函数，但是这个函数会把数组的键清空建立新的键，那么我们若想保留键只需要利用shuffle函数再做一下处理就可以了。可以自定义一个函数。

```
<?php
function retain_key_shuffle(array &$arr){
  if (!empty($arr)) {
    $key = array_keys($arr);
    shuffle($key);
    foreach ($key as $value) {
      $arr2[$value] = $arr[$value];
    }
    $arr = $arr2;
  }
}
?>
```
通过调用上面的函数就可以获得保留键顺序打乱新的数组了。
```
<?php
$arr = array('a' => 'A', 'b' => 'B');
retain_key_shuffle($arr);
var_export($arr);
?>
```
输出随机打乱顺序后的数组。
