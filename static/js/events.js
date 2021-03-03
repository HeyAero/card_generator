function renderCard(greeting, eventType, message) {
  let greetingElement = document.createElement('H4');
  let eventTypeElement = document.createElement('H5');
  let messageElement = document.createElement('P');
  greetingElement.innerHTML = greeting;
  eventTypeElement.innerHTML = `For you ${eventType}`;
  messageElement.innerHTML = message;

  let main = document.querySelector('main');
  main.appendChild(greetingElement);
  main.appendChild(eventTypeElement);
  main.appendChild(messageElement);
}

module.exports = {
  renderCard,
};
