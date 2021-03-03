const forms = require('./forms');

function init() {
  const form = document.querySelector('form');
  console.log(form);
  form.addEventListener('submit', forms.handleSubmit);
}

init();
