const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputAge = document.querySelector('#age');
const button = document.querySelector('#btn');

const errorEmail = document.querySelector('#errorEmail');
const errorAge = document.querySelector('#errorAge');
const errorName = document.querySelector('#errorName');

const inputToValidate = [inputName, inputEmail, inputAge];

const validateForm = (e) => {
  e.preventDefault();

  if (!inputName.value || !inputEmail.value || !inputAge.value) {
    alert('Hay campos vacios');
  }

  if (
    inputName.value &&
    inputEmail.value &&
    inputAge.value &&
    inputAge.value >= 18
  ) {
    alert('Formulario enviado');
  } else if (inputAge.value < 18) {
    alert('Debes ser mayor de edad.');
  }
};

button.addEventListener('click', validateForm);

console.log(inputName);

inputName.addEventListener('blur', function () {
  if (inputName.value === '') {
    event.preventDefault();
    errorName.textContent = 'Este campo es obligatorio! Por favor, ingrésalo.';
  } else {
    errorName.textContent = '';
  }
});

inputEmail.addEventListener('blur', function () {
  if (inputEmail.value === '') {
    event.preventDefault();
    errorEmail.textContent = 'Este campo es obligatorio! Por favor, ingrésalo.';
  } else {
    errorEmail.textContent = '';
  }
});

inputAge.addEventListener('blur', function () {
  if (inputAge.value === '') {
    errorAge.textContent = 'Este campo es obligatorio! Por favor, ingrésalo.';
  } else if (inputAge.value < 18) {
    errorAge.textContent = 'Perdón, pero debes ser mayor de edad.';
  } else {
    errorAge.textContent = '';
  }
});
