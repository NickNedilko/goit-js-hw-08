import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const FORM_INPUT = 'feedback-form-state';

let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  evt.preventDefault;
  formData[evt.target.name] = evt.target.value;
  const formDataStr = JSON.stringify(formData);
  localStorage.setItem(FORM_INPUT, formDataStr);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(FORM_INPUT);
  evt.currentTarget.reset();
  console.log(formData);
}
checkFormInput();

function checkFormInput() {
  let formDataLocal = JSON.parse(localStorage.getItem(FORM_INPUT));
  const { email, message } = refs.form.elements;
  if (formDataLocal) {
    formData = formDataLocal;
    email.value = formDataLocal.email || '';
    message.value = formDataLocal.message || '';
  }
}
