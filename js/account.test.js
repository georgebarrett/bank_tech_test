const Account = require('./account');
let account

describe('Account', () => {
    it('should be an empty account if no transactions have been made', () => {
        account = new Account();

        expect(account.transactions).toEqual([]);
    });

    test('if 5000 is deposited then it should add to the account', () => {
        account = new Account();
        account.deposit(5000, '01/01/2023')
        expect(account.transactions).toEqual([
            { amount: 5000, date: '01/01/2023', type: 'deposit', balance: 5000 },
        ]);
    });

});