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
       
        $(window).mouseup(function (e){
          modal.removeClass('modal--visible');
        });
        
        






$('body').append('<button class="btn_up"/>');

$('.btn_up').click(function(){
  $('body').animate({'scrollTop': 0}, 1000);
  $('html').animate({'scrollTop': 0}, 1000);
}); 

$('window').scroll(function(){
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.btn_up').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.btn_up').fadeOut();
  }
});

}); 