//  Run this code only after the entire HTML content has loaded
document.addEventListener('DOMContentLoaded', function () {

  // Grab important HTML elements by their IDs
  const signinForm = document.getElementById('signinForm'); // Sign-in form
  const resetForm = document.getElementById('resetForm');   // Reset password form (if exists)
  const errorEl = document.getElementById('error');         // Error message box
  const resetMsg = document.getElementById('resetMsg');     // Message box for reset form
  const forgot = document.getElementById('forgot');         // "Forgot Password" link
  const signup = document.getElementById('signup');         // "Signup" link


  //Function to show error messages in a specific element
  const showError = (el, msg) => {
    el.hidden = false;         // Make the element visible
    el.textContent = msg;      // Display the given message
  };


  // Function to hide and clear an error message
  const clearError = (el) => {
    if (el) {                  // Make sure element exists
      el.hidden = true;        // Hide the element
      el.textContent = '';     // Clear previous text
    }
  };


  //  Function to check if a string is a valid email address
  const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);


  // Function to check if a string is a valid phone number
  // Removes spaces, dashes, and parentheses first
  const isPhone = s => /^(\+?\d{7,15})$/.test(s.replace(/[()\s-]/g, ''));


  //  --- SIGN IN FORM SECTION ---
  if (signinForm) {                  // Only run this part if signinForm exists
    signinForm.addEventListener('submit', e => {
      e.preventDefault();            // Stop the form from refreshing the page

      //  Get user input values (email/phone and password)
      const user = signinForm.user.value.trim();
      const pass = signinForm.pass.value.trim();

      //  Validate the fields one by one
      if (!user) return showError(errorEl, 'Enter email or phone.'); // If empty
      if (!(isEmail(user) || isPhone(user))) return showError(errorEl,  'Invalid email or phone.'); // If invalid
      if (!pass) return showError(errorEl, 'Enter password.');   // If password is missing

      //  If all validations pass, show success message
      clearError(errorEl);                        // Remove old errors
      errorEl.hidden = false;                     // Make it visible again
      errorEl.style.background = 'rgba(0,255,128,0.05)';  // Light green background
      errorEl.style.borderLeftColor = 'rgba(0,255,128,0.8)'; // Green border
      errorEl.style.color = '#fff';               // White text
      errorEl.textContent = 'Login successful';   // Message text

      //  Wait 1 second, then do login success actions
      setTimeout(() => {
        localStorage.setItem('isLoggedIn', 'true');   // Save login state in localStorage
        signinForm.reset();                           // Clear form fields
        window.location.replace('dashboard.html');    // Redirect to dashboard page
        // "replace" means the user cannot go back to login using the back button
      }, 1000);
    });
  }

  // -- RESET PASSWORD FORM SECTION ---
  if (resetForm) { // Run only if the reset form exists
    resetForm.addEventListener('submit', e => {
      e.preventDefault(); // Prevent normal form submission

      const email = resetForm.email.value.trim(); // Get entered email/phone

      //  If field is empty, show an error message
      if (!email) {
        resetMsg.textContent = 'Please enter your email or phone.';
        resetMsg.style.color = '#ffd2d2'; // Light red text color
        return; // Stop further execution
      }

      //  If input exists, show success message
      resetMsg.style.color = '#e6ffd8'; // Light green text
      resetMsg.textContent = 'If that account exists, a reset link has been sent.';

      //  After 2.2 seconds, redirect back to sign-in page
      setTimeout(() => window.location.replace('index.html'), 2200);
    });
  }

  //  --- OPTIONAL LINKS SECTION ---

  // "Forgot Password?" link — go to reset page manually
  if (forgot)
    forgot.addEventListener('click', e => {
      e.preventDefault(); // Stop default link behavior
      window.location.href = 'page1.html'; // Redirect to reset page
    });

  // "Signup" link — show a placeholder message for now
  if (signup)
    signup.addEventListener('click', e => {
      e.preventDefault(); // Stop default link action
      alert('Signup link clicked — add signup page.'); // Placeholder alert
    });
});
