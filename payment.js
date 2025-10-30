//  Check if the user is logged in
if (localStorage.getItem("isLoggedIn") !== "true") {   // Get login status from localStorage
  alert("Please login first!");                        // Show alert if not logged in
  window.location.href = "index.html";                 // Redirect to login page
}

//  Get the payment form element
const paymentForm = document.getElementById("paymentForm");  // Access <form id="paymentForm">

//  Add event listener for form submission
paymentForm.addEventListener("submit", function (e) {        // Listen when the form is submitted
  e.preventDefault();                                        // Stop form from reloading the page

  //  Collect input field values
  const amount = this.amount.value;                          // Get amount from form input
  const date = this.date.value;                              // Get date from form input
  const time = this.time.value;                              // Get time from form input
  const platform = this.platform.value;                      // Get platform (UPI/Bank/etc.)

  // // Retrieve old transactions (if any) from localStorage
  // let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

  // //  Add new transaction details into the transactions array
  // transactions.push({
  //   date,                                                    // Store transaction date
  //   time,                                                    // Store transaction time
  //   amount,                                                  // Store transaction amount
  //   platform,                                                // Store transaction platform
  //   status: "Checked for Fraud",                             // Mark status as fraud-checked
  // });

  // // Save updated transactions back to localStorage
  // localStorage.setItem("transactions", JSON.stringify(transactions));

  // //  Show success message to user
  // alert("Fraud check completed for your transaction!");

  // Reset the form inputs after submission
  this.reset();
});

// 🧹 Clear Button Functionality
document.getElementById("clearBtn").addEventListener("click", () => { // When clear button clicked
  paymentForm.reset();                                                // Reset all input fields
});

// Navigation helper function
function goToPage(page) {                      // Create reusable navigation function
  window.location.href = page;                 // Redirect user to target page
}
