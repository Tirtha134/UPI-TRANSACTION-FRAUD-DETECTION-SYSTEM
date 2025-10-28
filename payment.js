// Login check
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "index.html";
}

// Handle payment submission
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const amount = this.amount.value;
  const date = this.date.value;
  const time = this.time.value;
  const platform = this.platform.value;

  let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  transactions.push({
    date,
    time,
    amount,
    platform,
    status: "Checked for Fraud",
  });
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("Fraud check completed for your transaction!");
  this.reset();
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", () => {
  paymentForm.reset();
});

// Navigation function
function goToPage(page) {
  window.location.href = page;
}
