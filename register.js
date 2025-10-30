(() => {  // IIFE (Immediately Invoked Function Expression) – runs automatically when the script loads
  const form = document.getElementById('registerForm');  // Get the registration form by its ID
  const nameInput = document.getElementById('name');     // Get the input element for Name
  const emailInput = document.getElementById('email');   // Get the input element for Email
  const phoneInput = document.getElementById('phone');   // Get the input element for Phone
  const passInput = document.getElementById('password'); // Get the input element for Password
  const errEl = document.getElementById('regError');     // Get the element to display error messages

  const showError = (msg) => {          // Define a function to show an error message
    errEl.hidden = false;               // Make the error element visible
    errEl.textContent = msg;            // Display the provided error message
  };

  const clearError = () => {            // Define a function to hide and clear the error message
    errEl.hidden = true;                // Hide the error message area
    errEl.textContent = '';             // Clear any existing error text
  };

  const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);  
  // Define a function to check if a string is a valid email using a Regular Expression

  const isPhone = (s) => {                     // Define a function to check if phone number is valid
    const cleaned = s.replace(/[()\s-]/g, ''); // Remove spaces, parentheses, and dashes
    return /^(\+?\d{7,15})$/.test(cleaned);    // Validate 7–15 digits, optionally starting with '+'
  };

  form.addEventListener('submit', (e) => {     // Add event listener to form when submitted
    e.preventDefault();                        // Stop the form from submitting automatically
    clearError();                              // Clear any previous error messages

    const name = nameInput.value.trim();       // Get and trim the Name input value
    const email = emailInput.value.trim();     // Get and trim the Email input value
    const phone = phoneInput.value.trim();     // Get and trim the Phone input value
    const password = passInput.value;          // Get the Password input value

    if (!name) {                               // Check if name is empty
      showError('Please enter your full name.'); // Show error message
      nameInput.focus();                       // Focus the name input field
      return;                                  // Stop further execution
    }

    if (!email || !isEmail(email)) {           // Check if email is empty or invalid
      showError('Please enter a valid email.'); // Show error message
      emailInput.focus();                      // Focus the email field
      return;                                  // Stop further execution
    }

    if (!phone || !isPhone(phone)) {           // Check if phone is empty or invalid
      showError('Please enter a valid phone number.'); // Show error message
      phoneInput.focus();                      // Focus the phone input field
      return;                                  // Stop further execution
    }

    if (!password) {                           // Check if password is empty
      showError('Please enter a password.');   // Show error message
      passInput.focus();                       // Focus the password input field
      return;                                  // Stop further execution
    }

    // Simulated registration success
    clearError();                              // Clear any existing error message
    alert('Registration successful (demo). Redirecting to Sign In...'); // Show success popup
    form.reset();                              // Clear all form fields
    window.location.href = 'index.html';       // Redirect user to the Sign In page
  });
})();  // End of IIFE function – runs immediately
