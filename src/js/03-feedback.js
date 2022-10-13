import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const inputEl = document.querySelector('input');
const textEl = document.querySelector('textarea');
form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));
const VALUE_KEY = 'feedback-form-state';
const formObject = {};
const obj = { email: '', massage: '' };
populateTextarea();
function formSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  const submitObj = JSON.parse(localStorage.getItem(VALUE_KEY));
  if (localStorage.getItem(VALUE_KEY)) {
    console.log(submitObj);
  } else {
    console.log(obj);
  }
  localStorage.removeItem(VALUE_KEY);
}
function formInput(evt) {
  formObject[evt.target.name] = evt.target.value;
  const string = JSON.stringify(formObject);
  localStorage.setItem(VALUE_KEY, string);
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(VALUE_KEY));
  if (data) {
    inputEl.value = data['email'] || '';
    textEl.value = data['message'] || '';
  }
}
