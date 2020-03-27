 document.addEventListener("DOMContentLoaded", function(event) { 
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


/*$(document).ready(function (){

    var modal = $('.modal'),
           modalBtn = $('[data-toggel=modal]'),
           closeBtn = $('.modal__close');
      modalBtn.on('click', function(){
          
        modal.toggleClass('modal--visible');
    });
        closeBtn.on('click', function(){
            modal.toggleClass('modal--visible');
        });



        $(document).keydown(function() {
                if (event.key === 'Escape') {
                modal.toggleClass('modal--visible');
             }
        });
        
        $(document).mouseup(function (e){
            var modalctr = $("#modal_cinw_ctnr");
            var modal = $(".modal_cinw");
            if (!modal.is(e.target) && modal.has(e.target).length === 0){
            modalctr.hide();
            }
           
            
     });
    }); */