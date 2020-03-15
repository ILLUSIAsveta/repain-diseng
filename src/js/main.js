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
  });



  // слушатель событий EventListener