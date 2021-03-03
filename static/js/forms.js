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
