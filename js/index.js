$(function(){
    var allpost = [];
    var is_404 = false;
    for (var i = 1; i < 100; i++) {
      $.ajax({
        url:'markdown/'+i+'/article.md',
        async:false,
        error:function(xhr,status,error){
          count_404++;
          console.clear();
        },
        success:function(result,status,xhr){
          var post = [];
          post['id'] = i;
          post['article'] = result;
          allpost.push(post);
          count_404 = 0;
        }
      });
      if (count_404 === 10) break;
    }
    var list_html = [];
    var categories_list = [];
    var categoriesname = getParams()['categories'];
    $.each(allpost.reverse(),function(key,value){
      var handledata2 = handledata(value['article']);
      var title = handledata2['headinfo']['title'];
      var categories = handledata2['headinfo']['categories'];
      var date = handledata2['headinfo']['date'];
      if (categoriesname === undefined) {
        list_html.push('<div class="result"><a href="detail.html?id='+value.id+'"><span class="categories">['+categories+']</span>'+title+'<span class="date">('+date+')</span></a></div>');
      }else{
        if (categoriesname === categories) {
          list_html.push('<div class="result"><a href="detail.html?id='+value.id+'"><span class="categories">['+categories+']</span>'+title+'<span class="date">('+date+')</span></a></div>');
        }
      }
      categories_list[key] = categories;
    });
    var set = new Set(categories_list);
    var new_categories = Array.from(set);
    var categoriesclass = getParams()['categories'] === undefined ? 'categories-now' : '';
    $('#categories').append('<a href="index.html" class="'+categoriesclass+'">全部</a>');
    $.each(new_categories,function(i,item){
      var categoriesclass = categoriesname === item ? 'categories-now' : '';
      $('#categories').append('<a href="?categories='+item+'" class="'+categoriesclass+'">'+item+'</a>');
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
