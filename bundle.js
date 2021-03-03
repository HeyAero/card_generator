(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
const { renderCard } = require('./events');

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  const form = e.target;
  const greeting = form.greeting.value;
  const eventType = form.eventType.value;
  const message = form.message.value;
  console.log(
    `GREETING: ${greeting} EVENTTYPE: ${eventType}  MESSAGE: ${message}`
  );
  renderCard(greeting, eventType, message);
}

module.exports = {
  handleSubmit,
};

},{"./events":1}],3:[function(require,module,exports){
const forms = require('./forms');

function init() {
  const form = document.querySelector('form');
  console.log(form);
  form.addEventListener('submit', forms.handleSubmit);
}

init();

},{"./forms":2}]},{},[3]);
