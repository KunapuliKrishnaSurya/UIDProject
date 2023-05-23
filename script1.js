// Sign-up form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform sign-up logic
  // ...

  // Clear form
  signupForm.reset();
});
