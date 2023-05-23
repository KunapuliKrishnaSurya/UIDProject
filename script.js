document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    // Perform validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Registration success
    alert("Registration successful!");
    
    // Redirect to login page
    window.location.href = "login.html";
  });
  