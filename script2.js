// Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform login logic
  // ...

  // Clear form
  loginForm.reset();
});
