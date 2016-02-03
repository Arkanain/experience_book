$(function() {
  setTimeout(function() {
    // In new/edit page
    if($('#articles iframe')[0]) {
      $('#articles iframe').height($('#content').height() - 110);
    }
    // In show page
    else {
      var article_height = $('#articles').height() + 20;

      if($('#content').height() < article_height) {
        $('#content').height();
      }
    }
  }, 1000);
});