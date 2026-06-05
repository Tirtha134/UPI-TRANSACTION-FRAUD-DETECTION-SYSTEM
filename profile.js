// Login check
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "index.html";
}

// Load profile data
const profileData = JSON.parse(localStorage.getItem("profileData"));

if (profileData) {
  document.getElementById("profileName").textContent = profileData.name;
  document.getElementById("profileEmail").textContent = profileData.email;
  document.getElementById("profilePhone").textContent = profileData.phone;
  document.getElementById("profileDate").textContent = profileData.registrationTimestamp;
}

// Navigation function
function goToPage(page) {
  window.location.href = page;
}