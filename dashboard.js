document.addEventListener("DOMContentLoaded", () => {  // Runs this code only after the whole HTML page is loaded

  //  Check if user is logged in
  const loggedIn = localStorage.getItem("isLoggedIn");  // Get login status from localStorage (saved earlier at login)
  if (loggedIn !== "true") {                            // If the user is NOT logged in
    alert("You must log in first!");                    // Show an alert message to the user
    window.location.replace("index.html");              // Redirect to the login page (index.html)
    return;                                             // Stop running further code
  }

  //  Logout button with confirmation
  const logoutBtn = document.getElementById("logoutBtn");  // Get the Logout button by its ID
  if (logoutBtn) {                                         // Check if the button exists on the page
    logoutBtn.addEventListener("click", () => {            // Add a click event listener to the logout button
      const confirmed = confirm("Are you sure you want to logout?"); // Ask the user for confirmation
      if (confirmed) {                                     // If the user clicks “OK”
        localStorage.removeItem("isLoggedIn");             // Remove login status from localStorage (logs user out)
        window.location.replace("index.html");             // Redirect to login page
      }
    });
  }

  // Disable browser back button after logout
  window.history.pushState(null, null, window.location.href);  // Push current state to browser history to prevent back navigation
  window.onpopstate = function () {                            // When user tries to go back using browser back button
    window.history.go(1);                                      // Force browser to stay on the current page (disables back)
  };
});

// Function to navigate to other pages (profile, payment, transactions)
function goToPage(page) {              // Define a function named goToPage that takes a page URL as argument
  window.location.href = page;         // Redirect the user to the provided page URL
}
