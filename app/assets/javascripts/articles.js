'use strict';

var form_redactor = function() {
  var form = $('form');
  var element = form.find('#article_text');
  var free_height = form.outerHeight(true) - form.find('.form-group:first').outerHeight(true);
  var textarea_height = free_height - 15;

  element.outerHeight(textarea_height);

  element.ace({
    theme: 'github',
    lang: 'ruby',
    mode: 'ruby'
  });

  var editor = element.data('ace').editor.ace;

  editor.renderer.setShowGutter(false);
  editor.setHighlightActiveLine(false);
  editor.setHighlightGutterLine(false);
  editor.setDisplayIndentGuides(false);
  editor.renderer.setHScrollBarAlwaysVisible(true);
  editor.session.setUseWrapMode(true);
  editor.renderer.setShowPrintMargin(false);
  editor.session.setUseSoftTabs(true);
};

var content_viewer = function() {
  var outer = $('#articles');
  var element = outer.find('#article_text');
  var free_height = outer.outerHeight(true) - outer.find('.row:first').outerHeight(true) - outer.find('hr').outerHeight(true);
  var textarea_height = free_height - 40;

  element.outerHeight(textarea_height);

  element.ace({
    theme: 'github',
    lang: 'ruby',
    mode: 'ruby'
  });

  var editor = element.data('ace').editor.ace;

  editor.renderer.setShowGutter(false);
  editor.setHighlightActiveLine(false);
  editor.setHighlightGutterLine(false);
  editor.setDisplayIndentGuides(false);
  editor.renderer.setHScrollBarAlwaysVisible(true);
  editor.session.setUseWrapMode(true);
  editor.renderer.setShowPrintMargin(false);
  editor.session.setUseSoftTabs(true);
  editor.setReadOnly(true);
  editor.renderer.$cursorLayer.element.style.display = "none";
};