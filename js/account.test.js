const Account = require('./account');
let account

describe('Account', () => {
    it('should be an empty account if no transactions have been made', () => {
        account = new Account();

        expect(account.transactions).toEqual([]);
    });

    test('if 5000 is deposited then it should add to the account', () => {
        account = new Account();
        account.deposit(5000, '01/01/2023');
        expect(account.transactions).toEqual([
            { amount: 5000, date: '01/01/2023', type: 'deposit', balance: 5000 },
        ]);
    });

    test('making a withdrawal of 1000 will calculate the new balance', () => {
        account = new Account();
        account.withdraw(1000, '02/01/2023');
        expect(account.transactions).toEqual([
            { amount: 1000, date: '02/01/2023', type: 'withdrawal', balance: -1000},
        ]);
    });

    test('it should recognise the last deposit', () => {
        account = new Account();
        account.deposit(500, '03/01/2023');
        const lastDeposit = account.transactions[account.transactions.length - 1];
        expect(lastDeposit.balance).toEqual(500)
    });

    test('it should recognise the last withdrawal', () => {
        account = new Account();
        account.withdraw(500, '04/01/2023');
        const lastWithdraw = account.transactions[account.transactions.length - 1];
        expect(lastWithdraw.balance).toEqual(-500)
    });

    test('to make sure multiple transactions are successful', () => {
        account = new Account();
        account.deposit(5000, '05/01/2023');
        account.deposit(5000, '06/01/2023');
        account.withdraw(5000, '07/01/2023');
        const lastTransaction = account.transactions[account.transactions.length - 1];
        expect(lastTransaction.balance).toEqual(5000)
    })

});