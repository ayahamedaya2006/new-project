let expenses = JSON.parse(localStorage.getItem("expenses")) ;

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;

    if (!name || !amount || !category || !date) {
        alert("Please fill all fields");
        return;
    }

    let expense = { name, amount, category, date };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
}

function displayExpenses() {
    let tableBody = document.getElementById("expenseTableBody");
    tableBody.innerHTML = "";
    let total = 0;

    expenses.forEach((exp, index) => {
        total += exp.amount;
        tableBody.innerHTML += `
            <tr>
                <td>${exp.name}</td>
                <td>${exp.amount}</td>
                <td>${exp.category}</td>
                <td>${exp.date}</td>
                <td><button onclick="deleteExpense(${index})">Delete</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total.toFixed(2);
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

window.onload = displayExpenses;
