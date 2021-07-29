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
  $('.modal__form form').validate({
    rules: {
      name: {
        required: true
      },
      number: {
        required: true
      },
      check: {
        required: true
      }
    },
    messages: {
      name: {
        required: "Это поле обязательно для заполнения"
      },
      number: {
        required: "Это поле обязательно для заполнения"
      },
      check: {
        required: ""
      }
    }
  });
});