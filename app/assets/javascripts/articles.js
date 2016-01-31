$(function() {
  function changeHeight(height) {
    setTimeout(function() {
      var article_height = $('#articles').height();

      if(height == article_height) {
        if($('#content').height() < article_height) {
          $('#content').height(article_height + 20);
        }
      }
      else {
        changeHeight(article_height);
      }
    }, 250);
  }

  changeHeight($('#articles').height());
});