//HERO

$(document).ready(function () {
  $('#carruselArte').carousel({
    interval: 4000,
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
