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

          if(selection.getSel().anchorOffset == 0 && elem_parent) {
            // When we have indent, when user press backspace, remove indent first before go to prev line
            if ($(elem_parent).css('padding-left') != '0px') {
              ed.execCommand('outdent');
              event.preventDefault();
              return false;
            }
            // Don't break indent of prev line when we concat it with current
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