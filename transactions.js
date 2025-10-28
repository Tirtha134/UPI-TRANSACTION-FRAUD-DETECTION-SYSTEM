// Login check
if(localStorage.getItem("isLoggedIn") !== "true"){
  alert("Please login first!");
  window.location.href = "index.html";
}

// Load transactions from localStorage
const transactionBody = document.getElementById("transactionBody");
const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");

transactions.forEach(tx => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.upi}</td>
    <td>${tx.amount}</td>
    <td>${tx.status}</td>
  `;
  transactionBody.appendChild(row);
});

// Navigation function
function goToPage(page){
  window.location.href = page;
}
