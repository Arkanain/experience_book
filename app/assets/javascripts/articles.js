// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
  var article_height = $('#articles').height();

  if($('#content').height() < article_height) {
    $('#content').height(article_height + 20);
  }
});