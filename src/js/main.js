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
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 10,
 
      },
      userEmail: {
        required: true,
        email: true
      }
      
    }, // Правило сообщений
    errorElement: "div",
    messages: {
      userName: {

      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длинее 15 символов"
    },
      userPhone: {
        required:"Телефон обязателен",
        minlength: "Не верный номер ",
        
       
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Не верный email"
      }
    }
  });



  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: {
        required: true,
        minlength: 10,
        
      },
      userQuestion: {
        required: true,
        maxlength: 40,
      },
     
    },
    errorElement: "div",
    messages: {
      userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длинее 15 символов"
    },
      userPhone: {
        required:"Телефон обязателен",
        minlength: "Не верный номер ",
        
      },
      userQuestion:{
        required: "Заполните поле",
        maxlength: "Сообщение не более 40 символов"

      }
      
    }
  

  });

 

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 10,
        
      },
    },
    errorElement: "div",
    messages: {
      userName: {
      required: "Заполните поле",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длинее  15 букв"
    },
    userPhone: {
      required:"Телефон обязателен",
      minlength: "Не верный номер ",
      
    },

     
    }
    

  });
  
  // Маска для ввода телефона

  $('[type=tel]').mask('+7(000) 00-00-000');

// Подключение карты


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.927263, 30.359172],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/placeholder.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.geoObjects
        .add(myPlacemark)
        
});
  }); 




