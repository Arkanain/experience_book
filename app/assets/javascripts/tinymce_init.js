$(function () {
  tinyMCE.init({
    selector: "textarea.tinymce",
    menubar: false,
    plugins: ["textcolor", "paste"],
    toolbar: "undo redo | forecolor backcolor | sizeselect | bold italic | fontselect | fontsizeselect | indent | outdent",
    paste_postprocess: function(plugin, args) {
      // Change pasted text font-style and font-family to default editor settings
      $(args.node).find('span').each(function(index, element) {
        element.style['font-size'] = '16px';
        element.style['font-family'] = 'Arial';
      });
    },
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