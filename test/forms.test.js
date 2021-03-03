const {} = require('../static/js/forms');

describe('index.html', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe('form', () => {
    let form;
    let greeting;
    let eventType;
    let message;
    let submitButton;

    beforeEach(() => {
      form = document.querySelector('form');
      greeting = document.getElementById('greeting');
      eventType = document.getElementById('eventType');
      message = document.getElementById('message');
      submitButton = document.querySelector('[type="submit"]');
    });

    test('it exists', () => {
      expect(form).toBeTruthy();
    });

    describe('greeting', () => {
      test('it has a placeholder of "Enter greeting"', () => {
        expect(greeting.getAttribute('placeholder')).toBe('Enter greeting');
      });
    });

    describe('eventType', () => {
      test('should ', () => {
        expect(greeting.getAttribute('multiple').toBeTruthy());
      });
    });

    describe('message', () => {
      test('it has a placeholder of "Enter message"', () => {
        expect(message.getAttribute('placeholder')).toBe('Enter message');
      });
    });

    describe('submit button', () => {
      test('it says "Submit!"', () => {
        expect(submitButton.value).toBe('Submit!');
      });
    });
  });
});
