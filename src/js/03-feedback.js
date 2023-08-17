import throttle from 'lodash.throttle';
const formElements = document.querySelector('.feedback-form');
console.dir(formElements);
console.dir(formElements.elements.email);
console.dir(formElements.elements.message);
const KEY_LS = 'feedback-form-state';

const storageObj = JSON.parse(localStorage.getItem(KEY_LS)) || {};
console.log(storageObj);

console.log(Boolean(storageObj));


function populetedText() {
  for (const key in storageObj) {
    console.log(key);
    console.log(storageObj[key]);
    console.log(formElements.elements[key].value);
    formElements.elements[key].value = storageObj[key];
    console.log(formElements.elements[key].value);
  }
}
populetedText();

formElements.addEventListener('input', throttle(callbackStorageHandler, 500));
function callbackStorageHandler(event) {
  storageObj[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageObj));
  console.log(event.target.name, storageObj[event.target.name]);
  console.log(localStorage.getItem(KEY_LS));
}

formElements.addEventListener('submit', event => {
  event.preventDefault();
  console.log('сабмит', storageObj);
  localStorage.removeItem(KEY_LS);
  event.currentTarget.reset();
});
