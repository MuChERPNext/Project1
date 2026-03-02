JS Project: Building a Personal Finance Tracker

Step 1: Variables declared: Declare your starting data:
	1. Monthly Income: A constant number representing your total monthly earnings.
	2. Savings Goal: A constant number representing how much you want to save.
	3. Expenses: An array of numbers representing at least 5 different costs (e.g., [1200, 100,
	   50, 200, 80]).
Step 2: Declared a function named calculateTotalExpenses that takes an array as a parameter and
	returns the sum of all numbers in that array using a for loop.
Step 3: Implemented the following logic checks:
	• Calculated the **Remaining Balance** (Income - Total Expenses).
	• applied if..else condition
	•Condition A: If the remaining balance is greater than or equal to Savings Goal, log
			a ”Success” message.
	• Condition B: If the balance is less than the goal but still positive, log a ”Warning” message
			suggesting budget cuts.
	• Condition C: If the balance is negative, log a ”Critical” alert.
Step 4: Declared a function named evaluateSpending(expense) that takes a single number.
	• If the expense is over 20% of income, return ”High Expense”.
	• Otherwise, return ”Normal Spending”.
	• Use this function inside a loop to log a status for every item in expenses array.

–How to run the script (e.g., node financeTracker.js).
	*Using VS code IDE
	*Created a folder called Project
	*Created a html file called financeTracker.html
	*Created a JS file called financeTracker.js
	*Run and Check errors using node financeTracker.js in the terminal
	*Or Run and Check errors using chrome browser in the console

-Encountered and how you fixed it using console.log.
	*I Encountered Project folder accessing to run js and html file and fixed using cd terminal command
	*I Encountered string closing quote and fixed
 
 