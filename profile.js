// Login check
if(localStorage.getItem("isLoggedIn") !== "true"){
  alert("Please login first!");
  window.location.href = "index.html";
}

// Navigation function
function goToPage(page){
  window.location.href = page;
}
