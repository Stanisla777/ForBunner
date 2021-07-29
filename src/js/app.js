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

})
