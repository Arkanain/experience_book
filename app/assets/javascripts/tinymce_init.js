$(function () {
  tinyMCE.init({
    selector: "textarea.tinymce",
    menubar: false,
    statusbar: false,
    plugins: ["textcolor", "paste", "save"],
    toolbar: "save | undo redo | forecolor backcolor | sizeselect | bold italic | fontselect | fontsizeselect",
    invalid_elements : 'pre',
    paste_postprocess: function(plugin, args) {
      // Change pasted text font-style and font-family to default editor settings
      $(args.node).find('span').each(function(index, element) {
        element.style['font-size'] = '16px';
        element.style['font-family'] = 'Arial';
      });
    },
    setup: function (ed) {
      ed.on('keydown', function (event) {
        var element = $(ed.selection.getStart());
        var padding_left = parseInt(element.css('padding-left'), 10);

        // remove data attribute which are blocked changes for padding
        element.removeAttr('data-mce-style');

        // For backspace on indent field to prevent format troubles
        if (event.keyCode == 8 && padding_left > 0) {
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
      });
    }
  });
});

//$('iframe').contents().find('p').each(function(i, e) {
//  $(e).css('padding-left', 0);
//  $(e).removeAttr('data-mce-style');
//});