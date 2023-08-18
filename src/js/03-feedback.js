import throttle from 'lodash.throttle';


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


const formElements = document.querySelector('.feedback-form');
const KEY_LS = 'feedback-form-state';
formElements.addEventListener('input', throttle(handlerInput, 500));
formElements.addEventListener('submit', handlerSubmit);
let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const { email, message } = formElements.elements;
email.value = data.email ?? '';
message.value = data.message ?? '';
function handlerInput(event) {
  data[event.target.name] = event.target.value;
  localStorage.setItem(KEY_LS, JSON.stringify(data));
}
function handlerSubmit(event) {
  event.preventDefault();
  console.log(data);
  formElements.reset();
  localStorage.removeItem(KEY_LS);
  data = {};
}