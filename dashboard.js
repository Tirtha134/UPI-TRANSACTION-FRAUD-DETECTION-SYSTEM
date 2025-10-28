// ✅ Dashboard JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Check if user is logged in
  const loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn !== "true") {
    alert("You must log in first!");
    window.location.replace("index.html"); // Redirect to login page
    return;
  }

  // ✅ Logout button with confirmation
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const confirmed = confirm("Are you sure you want to logout?");
      if (confirmed) {
        localStorage.removeItem("isLoggedIn"); // Clear login status
        window.location.replace("index.html"); // Redirect to login
      }
    });
  }

  // ✅ Disable browser back button after logout
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
});

// ✅ Function to navigate to other pages (profile, payment, transactions)
function goToPage(page) {
  window.location.href = page;
}
