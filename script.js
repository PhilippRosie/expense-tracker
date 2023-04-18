const account = {
  firstName: "Philipp",
  lastName: "Rosie",
  incomeArray: [],
  expensesArray: [],
  getName: function () {
    prompt(`Account Name: 
    
    ${this.firstName} ${this.lastName}`);
  },

  // Tar informationen jag skriver in i min prompt, lägger till den i min incomeArray
  // med mina inkomster som jag väljer att fylla i, med titel och summa.
  addIncome: function (description, amount) {
    this.incomeArray.push({
      description: description,
      amount: amount,
    });
  },

  // Tar informationen jag skriver in i min prompt, lägger till den i min expenseArray
  // med mina utgifter som jag väljer att fylla i, med titel och summa.
  addExpense: function (description, amount) {
    this.expensesArray.push({
      description: description,
      amount: amount,
    });
  },

  //Skapar en lista men titel och summa genom att loopa genom på alla mina inkomster som jag skrivit in i min addIncome prompt.
  listIncome: function () {
    let allIncomes = "";
    this.incomeArray.forEach(function (income) {
      allIncomes += `${income.description}: ${income.amount}kr\n`;
    });
    prompt("Income:\n" + allIncomes);
  },

  //Skapar en lista men titel och summa genom att loopa genom på alla mina utgifter som jag skrivit in i min addExpense prompt.
  listExpenses: function () {
    let allExpenses = "";
    this.expensesArray.forEach(function (expense) {
      allExpenses += `${expense.description}: ${expense.amount}kr\n`;
    });
    prompt("Expenses:\n" + allExpenses);
  },

  // Loopar genom både incomeArray och expenseArray för att räkna ut totala summan vad jag har kvar efter att jag adderat mina
  // inkoster och tagit bort utgifterna from summan av inkonsterna.
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
