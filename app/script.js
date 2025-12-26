document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission
    alert('Thank you for registering! (This is a mockup).');
    form.reset(); // Optional: clear the form after submission
  });
});