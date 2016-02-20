$(function() {
  setTimeout(function() {
    // In new/edit page
    if($('#articles iframe')[0]) {
      changeSaveButton($('#article_title')[0]);

      $('#articles iframe').height($('#content').height() - 110);
    }
  }, 1000);

  window.changeSaveButton = function(selector) {
    tinyMCE.activeEditor.theme.panel.find('toolbar *')[1].disabled(selector.value.trim() == '');
  };
});