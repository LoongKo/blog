$(function(){
   function getParams(url) {
     var theRequest = new Object();
     if (!url)
        url = location.href;
     if (url.indexOf("?") !== -1){
        var str = url.substr(url.indexOf("?") + 1) + "&";
        var strs = str.split("&");
        for (var i = 0; i < strs.length - 1; i++){
            var key = strs[i].substring(0, strs[i].indexOf("="));
            var val = strs[i].substring(strs[i].indexOf("=") + 1);
            theRequest[key] = val;
        }
     }
     return theRequest;
   }
   $.get("list.json",{v:Math.random()},function(data,status){
      var list_html = [];
      var tag = [];
      var tagname = getParams()['tag'];
      $.each(data,function(key,value){
        if (tagname === undefined) {
          list_html.push('<div class="result"><a href="detail.html?id='+value.id+'"><span class="tags">['+value.tag+']</span>'+value.title+'</a></div>');
        }else{
          if (tagname === value.tag) {
            list_html.push('<div class="result"><a href="detail.html?id='+value.id+'"><span class="tags">['+value.tag+']</span>'+value.title+'</a></div>');
          }
        }
        tag[key] = value.tag;
      });
      var set = new Set(tag);
      var new_tag = Array.from(set);
      var tagclass = getParams()['tag'] === undefined ? 'tag-now' : '';
      $('#tag').append('<a href="index.html" class="'+tagclass+'">全部</a>');
      $.each(new_tag,function(i,item){
        var tagclass = tagname === item ? 'tag-now' : '';
        $('#tag').append('<a href="?tag='+item+'" class="'+tagclass+'">'+item+'</a>');
      });
      var num_total = list_html.length;
      var items_per_page = 10;
      var initPagination = function() {
        // 创建分页
        $("#Pagination").pagination(num_total, {
          num_edge_entries : 2, //边缘页数
          num_display_entries : 2, //主体页数
          callback : pageselectCallback, //回调函数
          items_per_page:items_per_page, //每页显示多少项
          prev_text : '上一页',
          next_text : '下一页'
        });
      }();
   
      function pageselectCallback(page_index, jq){
        var max_num = Math.min((page_index+1) * items_per_page, num_total);
        $("#Searchresult").empty();
        for(var i=page_index*items_per_page;i<max_num;i++){
          $("#Searchresult").append(list_html[i]);
        }
        return false;
      }
    });

});
