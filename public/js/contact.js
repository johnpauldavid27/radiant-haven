document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you! Your message has been received.';
  e.target.reset();
});
