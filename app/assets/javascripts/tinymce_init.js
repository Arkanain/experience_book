$(function () {
  tinyMCE.init({
    selector: "textarea.tinymce",
    menubar: false,
    plugins: "textcolor",
    toolbar: "undo redo | forecolor backcolor | sizeselect | bold italic | fontselect | fontsizeselect | indent | outdent",
    setup: function (ed) {
      ed.on('keydown', function (event) {
        // For backspace on indent field to prevent format troubles
        if(event.keyCode == 8) {
          var element = $(ed.selection.getNode());
          if(element.parents('p').attr('style').indexOf('padding-left') > 0) {
            ed.execCommand('outdent');
            event.preventDefault();
            return false;
          }
        }

        // For tab and shift + tab
        if(event.keyCode == 9) {
          if (event.shiftKey) {
            ed.execCommand('outdent');
          } else {
            ed.execCommand('indent');
          }
          event.preventDefault();
          return false;
        }
      });
    }
  });
});