$(function() {
  setTimeout(function() {
    // In new/edit page
    if($('#articles iframe')[0]) {
      changeSaveButton($('#article_title')[0]);

      $('#articles iframe').height($('#content').height() - 110);
    }
    // In show page
    else {
      var article_height = $('#articles').height() + 20;

      if($('#content').height() < article_height) {
        $('#content').height(article_height);
      }
    }
  }, 1000);

  window.changeSaveButton = function(selector) {
    tinyMCE.activeEditor.theme.panel.find('toolbar *')[1].disabled(selector.value.trim() == '');
  };

  window.removeMenu = function() {
    return window.innerWidth <= 1100;
  };

  window.removeUserMenu = function() {
    return window.innerWidth <= 600;
  };
});