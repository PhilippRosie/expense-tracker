const account = {
  firstName: "Philipp",
  lastName: "Rosie",
  incomeArray: [],
  expensesArray: [],
  getName: function () {
    prompt(`Account Name: 
    
    ${this.firstName} ${this.lastName}`);
  },

  addIncome: function (description, amount) {
    this.incomeArray.push({
      description: description,
      amount: amount,
    });
  },

  addExpense: function (description, amount) {
    this.expensesArray.push({
      description: description,
      amount: amount,
    });
  },

  listIncome: function () {
    let allIncomes = "";
    this.incomeArray.forEach(function (income) {
      allIncomes += `${income.description}: ${income.amount}kr\n`;
    });
    prompt("Income:\n" + allIncomes);
  },

  listExpenses: function () {
    let allExpenses = "";
    this.expensesArray.forEach(function (expense) {
      allExpenses += `${expense.description}: ${expense.amount}kr\n`;
    });
    prompt("Expenses:\n" + allExpenses);
  },

  getSummary: function () {
    let totalIncome = 0;
    let totalExpenses = 0;

    this.incomeArray.forEach(function (income) {
      totalIncome += income.amount;
    });

    this.expensesArray.forEach(function (expense) {
      totalExpenses += expense.amount;
    });

    const totalBalance = totalIncome - totalExpenses;

    prompt(
      `Summary: 
        


        Total Income: ${totalIncome} kr
        Total Expenses: ${totalExpenses} kr
        
        Total Balance: ${totalBalance} kr`
    );
  },
};

function menu() {
  const choice = parseFloat(
    prompt(`
    Please choose between: 

  1) Account Name
  2) Add Income
  3) Add Expenses 
  4) List all income 
  5) List all expenses
  6) Summary`)
  );

  if (choice === 1) {
    account.getName();
    return menu();
  } else if (choice === 2) {
    const incomeDescription = prompt(`Income Description:`);
    const incomeAmount = parseFloat(prompt(`Enter your amount:`));
    account.addIncome(incomeDescription, incomeAmount);
    return menu();
  } else if (choice === 3) {
    const expenseDescription = prompt(`Expense Description:`);
    const expenseAmount = parseFloat(prompt(`Enter your amount:`));
    account.addExpense(expenseDescription, expenseAmount);
    return menu();
  } else if (choice === 4) {
    account.listIncome();
    return menu();
  } else if (choice === 5) {
    account.listExpenses();
    return menu();
  } else if (choice === 6) {
    account.getSummary();
    return menu();
  }
}

menu();
