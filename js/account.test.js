const Account = require('./account');
let account

describe('Account', () => {
    it('should be an empty account if no transactions have been made', () => {
        account = new Account();

        expect(account.transactions).toEqual([]);
    })
})