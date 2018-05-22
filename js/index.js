$(function(){
   $.get("list.json",function(data,status){
      var list_html = [];
      $.each(data,function(key,value){
        list_html[key] = '<div class="result"><a href="detail.html?id='+value.id+'">'+value.title+'</a></div>';
      });
      var num_total = list_html.length;
      var items_per_page = 10;
      var initPagination = function() {
        // 创建分页
        $("#Pagination").pagination(num_total, {
          num_edge_entries : 1, //边缘页数
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