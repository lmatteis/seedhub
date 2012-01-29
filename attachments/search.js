(function() {
var cx = "013135011952329865909:uypm55ugvg0"; // google custom search id
function search(q, cb){
  $.getJSON("http://ajax.googleapis.com/ajax/services/search/web?v=1.0&callback=?&q="+q+"&rsz=8&start=0&cx="+cx, function(data) {
    cb(data);
  });
}
function addResult(result, $cont) {
  var html = "<h3><a href='"+result.url+"'>"+result.title+"</a></h3>";
  html += "<p>"+result.content+"</p>";

  $cont.append(html);
}
$(function(){

  $("form.search").submit(function(e) {
    var $this = $(this),
        key = $this.find("[name=key]").val(),
        value = $this.find("[name=value]").val(),
        operator = $this.find("[name=operator]").val();
    
    search(key + " " + value, function(data) {
      console.log(data);
      var $sr = $(".search-result");
      $sr.html("");
      var results = data.responseData.results; 
      $.each(results, function(idx, val) {
        addResult(val, $sr);
      });
    });
    e.preventDefault();
    e.stopPropagation();
  });
});
})();
