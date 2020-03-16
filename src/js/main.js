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