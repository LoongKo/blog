// $(function(){
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
          theRequest[key] = decodeURI(val);
      }
   }
   return theRequest;
  }
  function handledata(data){
    var start_string = '---';
    var end_string = '---';
    var separator = ':';
    var start = data.indexOf(start_string) + start_string.length;
    var stop = data.indexOf(end_string,start);
    var headinfo = data.substring(start,stop).trim();
    var headinfo2 = headinfo.split("\r\n");
    var headinfo_arr = [];
    $.each(headinfo2,function(index,value){
      headinfo_arr[value.substring(0,value.indexOf(separator)).trim()] = value.substring(value.indexOf(separator)+separator.length).trim();
    });
    var arr = [];
    arr['headinfo'] = headinfo_arr;
    arr['content'] = data.substring(stop + end_string.length).trim();
    return arr;
  }
// });