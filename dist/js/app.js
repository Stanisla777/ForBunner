"use strict";

$(document).ready(function () {
  $('.js-modal').on('click', function () {
    $('#lean_overlay').show();
    $('.modal').show();
  });
  $('.close-modal').on('click', function () {
    $('.modal').hide();
    $('#lean_overlay').hide();
  });
});