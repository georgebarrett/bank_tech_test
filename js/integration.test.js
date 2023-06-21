const Account = require('./account');
let account;

describe('Integration of classes', () => {

    it('should add a deposit transaction and be displayed correctly on the console', () => {
        account = new Account();
        account.deposit(1000, '01/01/2023');
        const consoleSpy = jest.spyOn(console, 'log');
        account.printStatement();

        expect(consoleSpy).toHaveBeenCalledWith(
            'date || credit || debit || balance'
        );
        expect(consoleSpy).toHaveBeenCalledWith(
            '01/01/2023 || 1000.00 || || 1000.00'
        );
    });

    it('should add a withdrawal transaction and be displayed correctly on the console', () => {
        account = new Account();
        account.withdraw(500, '02/01/2023');
        account.printStatement();

        const consoleSpy = jest.spyOn(console, 'log');

        expect(consoleSpy).toHaveBeenCalledWith(
            'date || credit || debit || balance'
        );
        expect(consoleSpy).toHaveBeenCalledWith(
            '02/01/2023 || || 500.00 || -500.00'
        );
    });
})