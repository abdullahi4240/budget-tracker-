// 2. Store Application Data (Variables)
let totalBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 3. Collect User Input & 4. Perform Budget Calculations & 5. Create Reusable Functions
function calculateBudget() {
    // Collect user input using prompt dialogs
    let budgetInput = prompt("Please enter your total budget:");
    let expenseInput = prompt("Please enter your total expenses:");

    // Convert input values into numbers
    totalBudget = parseFloat(budgetInput);
    totalExpenses = parseFloat(expenseInput);

    // Validate if the input is a valid number
    if (isNaN(totalBudget) || isNaN(totalExpenses)) {
        alert("Please enter valid numbers!");
        return;
    }

    // Perform budget calculations (Remaining Balance)
    remainingBalance = totalBudget - totalExpenses;

    // 6. Display Results in the Browser Console
    console.log("--- SpendWise Report ---");
    console.log("Total Budget: $" + totalBudget);
    console.log("Total Expenses: $" + totalExpenses);
    console.log("Remaining Balance: $" + remainingBalance);

    // Display calculated results in the HTML document
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <h3>Budget Summary:</h3>
        <p><strong>Total Budget:</strong> $${totalBudget}</p>
        <p><strong>Total Expenses:</strong> $${totalExpenses}</p>
        <p><strong>Remaining Balance:</strong> $${remainingBalance}</p>
    `;
}

// Bind the function to the button click event
document.getElementById("calcBtn").addEventListener("click", calculateBudget);