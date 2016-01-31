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
          var selection = ed.selection;
          var elem_parent = selection.getSelectedBlocks()[0];

          // If we are at the start of the string
          if(selection.getSel().anchorOffset == 0) {
            // If we have indent in current row remove it first before go to prev row
            if ($(elem_parent).css('padding-left') != '0px') {
              ed.execCommand('outdent');
              event.preventDefault();
              return false;
            }
            // If prev line has indent set it to current line and then concat current and prev row
            else {
              $(elem_parent).css('padding-left', $(elem_parent).prev().css('padding-left'));
            }
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