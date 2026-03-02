// Project: Building a Personal Finance Tracker
//JavaScript script that processes financial data,
//calculates totals, and provides user feedback based on logical conditions.

//declare variables for income, savings goal, and expenses
const monthlyIncome = 3000;
const savingsGoal = 500;
const expenses = [1200, 100, 50, 800, 300]; // Mind you Total is: 2450

// declaring a function to calculate total expenses
function calculateTotalExpenses(expenseArray) {
    let total = 0;
    for (let i = 0; i < expenseArray.length; i++) {
        total += expenseArray[i];
    }
    return total;
}

//calculate total expenses and remaining balance
const totalExpenses = calculateTotalExpenses(expenses);
const remainingBalance = monthlyIncome - totalExpenses;
// Output the financial summary
console.log(`Total Income: ${monthlyIncome}`);
console.log(`Total Expenses: ${totalExpenses}`);
console.log(`Remaining Balance: ${remainingBalance}`);
// To implement the logic checks for budget spending
if (remainingBalance >= savingsGoal) {
    console.log("Good job! You are on track maintaning your Budget and meeting your savings goal.");
} else if (remainingBalance > 0 && remainingBalance < savingsGoal) {
    console.log("Warning: You are saving money, but not meeting your goal. Consider budget cuts.");
} else {
    console.log("Critical: You are overspending. Budget cuts needed immediately.");
}

// Define the Function to Evaluate Spending 
function evaluateSpending(expense) {
    const highExpenseThreshold = 0.20;
    if (expense > monthlyIncome * highExpenseThreshold) {
        return "High Expense";
    } else {
        return "Normal Expense";
    }
}

// create for Loop to check each expense
console.log("\n == Your Expense Status ==");
for (let i = 0; i < expenses.length; i++) {
    console.log(`Expense ${expenses[i]}: ${evaluateSpending(expenses[i])}`);
}