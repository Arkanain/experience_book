$(function () {
  tinyMCE.init({
    selector: "textarea.tinymce",
    content_css : '/assets/tinymce_custom.css',
    menubar: false,
    statusbar: false,
    plugins: ["textcolor", "paste", "save"],
    toolbar: "save | undo redo | forecolor backcolor | sizeselect | bold italic underline | fontselect | fontsizeselect",
    formats: {
      bold: { inline: 'span', 'classes': 'bold' },
      italic: { inline: 'span', 'classes': 'italic' },
      underline: { inline: 'span', 'classes': 'underline', exact: true }
    },
    invalid_elements : 'pre, strong',
    valid_children : '-p[strong|pre]',
    paste_postprocess: function(plugin, args) {
      // Change pasted text font-style and font-family to default editor settings
      $(args.node).find('span').each(function(index, element) {
        element.style['font-size'] = '16px';
        element.style['font-family'] = 'Arial';
      });
    },
    save_onsavecallback: function() {
      if(!this.theme.panel.find('toolbar *')[1].disabled()) {
        $('form').submit();
      }
    },
    setup: function (ed) {
      ed.on('NodeChange', function(event) {
        changeSaveButton($('#article_title')[0]);
        event.preventDefault();
        return false;
      });
      ed.on('keydown', function (event) {
        var element = $(ed.selection.getStart());
        var padding_left = parseInt(element.css('padding-left'), 10);

        // remove data attribute which are blocked changes for padding
        element.removeAttr('data-mce-style');

        // For backspace on indent field to prevent format troubles
        if(event.keyCode == 8 && padding_left > 0) {
          element.css('padding-left', padding_left - 30);
          event.preventDefault();
          return false;
        }

        // For tab(increased padding-left) and shift + tab(decreased padding-left)
        if(event.keyCode == 9) {
          element.css('padding-left', padding_left + (event.shiftKey ? -30 : 30));
          event.preventDefault();
          return false;
        }

        if(event.metaKey && event.keyCode == 37) {
          var range = ed.selection.getRng();
          var first_node = element.siblings(':first')[0];
          var next_node = element.next()[0];

          // cmd + shift + arrow left
          if(event.shiftKey) {
            if(first_node == next_node) {
              range.setEnd(range.startContainer, range.startOffset);
              range.setStart(range.startContainer, 0);
            }
            else {
              range.setStart(first_node, 0);
            }

            event.preventDefault();
            return false;
          }
          // cmd + arrow left
          else {
            var container = first_node == next_node ? range.startContainer : first_node;

            range.setStart(container, 0);
            range.setEnd(container, 0);

            event.preventDefault();
            return false;
          }
        }

        if(event.metaKey && event.keyCode == 39) {
          var range = ed.selection.getRng();
          var last_node = element.siblings(':last')[0];
          var prev_node = element.prev()[0];

          // cmd + shift + right arrow
          if(event.shiftKey) {
            if(last_node == prev_node) {
              range.setStart(range.startContainer, range.startOffset);
              range.setEnd(range.startContainer, ed.selection.getStart().textContent.length);
            }
            else {
              range.setEnd(last_node, 1);
            }

            event.preventDefault();
            return false;
          }
          // cmd + right arrow
          else {
            if(last_node == prev_node) {
              range.setStart(range.startContainer, range.startContainer.length);
              range.setEnd(range.startContainer, range.startContainer.length);
            }
            else {
              range.setStart(last_node, last_node.textContent.length);
              range.setEnd(last_node, last_node.textContent.length);
            }

            event.preventDefault();
            return false;
          }
        }
      });
    }
  });
});