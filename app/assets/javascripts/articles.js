$(function() {
  window.changeSaveButton = function(selector) {
    tinyMCE.activeEditor.theme.panel.find('toolbar *')[1].disabled(selector.value.trim() == '');
  };
});