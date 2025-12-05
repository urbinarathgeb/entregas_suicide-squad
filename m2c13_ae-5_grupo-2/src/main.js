const form = document.getElementById('form');
const inputName = document.getElementById('name');
const errorName = document.getElementById('errorName');
const inputEmail = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');
const inputAge = document.getElementById('age');
const errorAge = document.getElementById('errorAge');

const validateInput = (inputElement, errorElement) => {
  inputElement.classList.remove('border-danger', 'border-success');
  errorElement.textContent = '';

  if (!inputElement.value) {
    inputElement.classList.add('border-danger');
    errorElement.textContent =
      '¡Este campo es obligatorio! Por favor, ingrésalo.';
    return false;
  }

  if (inputElement === inputAge) {
    const age = Number(inputElement.value);
    if (age < 18) {
      inputElement.classList.add('border-danger');
      errorElement.textContent = 'Debes ser mayor de edad (mínimo 18).';
      return false;
    }
  }
  inputElement.classList.add('border-success');
  errorElement.textContent = '';
  return true;
};

const validateForm = (e) => {
  e.preventDefault();

  const isNameValid = validateInput(inputName, errorName);
  const isEmailValid = validateInput(inputEmail, errorEmail);
  const isAgeValid = validateInput(inputAge, errorAge);

  if (isNameValid && isEmailValid && isAgeValid) {
    alert('!Formulario enviado con éxito!');
    form.reset();
    inputName.classList.remove('border-danger', 'border-success');
    inputEmail.classList.remove('border-danger', 'border-success');
    inputAge.classList.remove('border-danger', 'border-success');
  } else {
    alert('¡Debes ingresar correctamente todos los campos !');
  }
};

form.addEventListener('submit', validateForm);
inputName.addEventListener('input', () => validateInput(inputName, errorName));
inputName.addEventListener('blur', () => validateInput(inputName, errorName));
inputEmail.addEventListener('input', () =>
  validateInput(inputEmail, errorEmail)
);
inputEmail.addEventListener('blur', () =>
  validateInput(inputEmail, errorEmail)
);
inputAge.addEventListener('input', () => validateInput(inputAge, errorAge));
inputAge.addEventListener('blur', () => validateInput(inputAge, errorAge));
