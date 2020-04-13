 /*document.addEventListener("DOMContentLoaded", function(event) { 
    const modal = document.querySelector('.modal');
    const modalBtn = document.querySelectorAll('[data-toggel=modal]');
    const closeBtn = document.querySelector('.modal__close')
    const toggelModal = () => {
        modal.classList.toggle('modal--visible');
    }

    modalBtn.forEach(element => {
        element.addEventListener('click', toggelModal);
    });

    closeBtn.addEventListener('click', toggelModal);
 
  document.addEventListener("keydown", function(event) {
    if (event.key === 'Escape') {
        modal.classList.remove('modal--visible');
    }
  });

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.remove('modal--visible');
    }
  }
   });
 // слушатель событий EventListener
*/

$(document).ready(function (){

        
    var modal = $('.modal'),
           modalBtn = $('[data-toggel=modal]'),
           closeBtn = $('.modal__close');
      modalBtn.on('click', function(){
          
        modal.toggleClass('modal--visible');
    });
        closeBtn.on('click', function(){
          modal.removeClass('modal--visible');;
        });

             


        $(document).keydown(function() {
                if (event.key === 'Escape') {
                modal.removeClass('modal--visible');
             }
        });
       
       // $(window).mouseup(function (e){
        //  modal.removeClass('modal--visible');
       // });
        
        
$('body').append('<button class="btn_up"/>');

$('.btn_up').click(function(){
  $('body').animate({'scrollTop': 0}, 1000);
  $('html').animate({'scrollTop': 0}, 1000);
}); 

$('window').scroll(function(){
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.btn_up').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.btn_up').fadeOut();
  }
});



  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() +30 +bullets.width()+30)
  bullets.css('left', prev.width() +30 )


  new WOW().init();

  // Валидация формы
 
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // Строчное правило {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // Правило объект
      userEmail: {
        required: true,
        email: true
      }
    }, // Правило сообщений
    messages: {
      userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв"
    },
      userPhone: "Телефон обязателен",
      
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длинее  15 букв"
    },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com"
      }
    }
  });
  // Маска для ввода телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7 (___) __-__-___"});
  }); 




