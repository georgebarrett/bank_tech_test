const Statement = require('./statement');

class Account {

    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    deposit(amount, date) {
        const updatedBalance = this.balance += amount;
        this.transactions.push({
            amount: amount,
            date: date,
            type: 'deposit',
            balance: updatedBalance
        });
    }

    withdraw(amount, date) {
        const updatedBalance = this.balance -= amount;
        this.transactions.push({
            amount: amount,
            date: date,
            type: 'withdrawal',
            balance: updatedBalance
        });
    }

    printStatement() {
        const statement = new Statement();
        statement.print(this.transactions);
    }

}

module.exports = Account;