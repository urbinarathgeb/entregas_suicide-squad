let favoritos = [];

$(document).ready(function () {
  $('#CarruselArte').carousel({
    interval: 1000,
  });

  $('.carousel-control-next').click(function () {
    console.log('Imagen siguiente');
  });

  $('.carousel-control-prev').click(function () {
    console.log('Imagen anterior');
  });
});

// PRODUCT LIST

const modalBtn = document.querySelectorAll('.modal-btn');

modalBtn.forEach((btn) => {
  btn.addEventListener('shown.bs.modal', () => {
    btn.focus();
  });
});

const heart = $('.heart');

$(document).ready(function () {
  heart.click(function () {
    $(this).find('.full-heart').toggle();
    $(this).find('.empty-heart').toggle();

    if ($(this).find('.full-heart').is(':visible')) {
      $('#liveToast')
        .text('Dibujo agregado a favoritos')
        .removeClass('bg-danger text-white')
        .addClass('bg-success text-white')
        .show('fast')
        .delay(800)
        .hide('fast');
    }

    if ($(this).find('.empty-heart').is(':visible')) {
      $('#liveToast')
        .text('Dibujo eliminado de favoritos')
        .removeClass('bg-success text-white')
        .addClass('bg-danger text-white')
        .show('fast')
        .delay(800)
        .hide('fast');
    }
  });
});
