// @@include('moduls/alert.js')

// window.onload = function () {}

$(document).ready(function () {
  $('.js-modal').on('click',function(){//Открываю модально окно по клику

    $('#lean_overlay').show();
    $('.modal').show();
  });

  $('.close-modal').on('click',function(){//Закрываю модальное окно по клику на крестик
    $('.modal').hide();
    $('#lean_overlay').hide();
  });

  $('.modal__form form').validate({
    rules:{
      name: {
        required: true,
      },
      number: {
        required: true
      },
      check: {
        required: true
      },

    },
    messages: {
      name: {
        required: "Это поле обязательно для заполнения",
      },
      number: {
        required: "Это поле обязательно для заполнения",
      },
      check: {
        required: "",
      }

    }
  })
})
