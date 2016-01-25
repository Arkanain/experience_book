$(function() {
  var article_height = $('#articles').height();

  if($('#content').height() < article_height) {
    $('#content').height(article_height + 20);
  }
});