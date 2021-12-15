const { deposit, withdraw, transfer } = require('./account.js');

describe('testing function deposits', () => {

    it('increaces the amount on account', () => {
        //Arange
        const testAccount = {
            id: 'JCHH',
            balance: 300
        }
        const testAmount = 300;
        const expectedBalance = testAccount.balance + testAmount;

        //Act
        deposit(testAccount, testAmount);

        //Assert
        expect(testAccount.balance).toBe(expectedBalance)
    })

    it('check if account object is valid', () => {
        let testAccount = [null, {}, {id: '0ddd'}, {balance: 2020}];
        const testAmount = 300;
        let errorMessage = 'Invalid account data';

        testAccount.forEach(account => {
            expect( () => deposit(account, testAmount)).toThrow(errorMessage);
        })
    })

    it('check if amount is valid', () => {
        const testAccount = {
            id: 'JCHH',
            balance: 300
        }
        const testAmount = ['200', -1, Infinity, NaN];
        let errorMessage = 'Invalid amount';

        testAmount.forEach(amount => {
            expect( () => deposit(testAccount, amount)).toThrow(errorMessage);
        })
    })
})

describe('testing function withdraw', () => {

    it('check correct balance after withdraw', () => {
        const testAccount = {
            id: 'JCHH',
            balance: 500
        }
        const testAmount = 200;
        const expectedBalance = testAccount.balance - testAmount;

        withdraw(testAccount, testAmount);

        expect(testAccount.balance).toBe(expectedBalance)
    })

    it('check if enough money on account to withdraw', () => {
        const testAccount = {
            id: 'JCHH',
            balance: 500
        }

        const testAmount = 600;
        const errorMessage = 'Invalid amount to withdraw';

        expect( () => withdraw(testAccount, testAmount)).toThrow(errorMessage);
    })

    it('check if amount is valid', () => {
        const testAccount = {
            id: 'JCHH',
            balance: 300
        }
        const testAmount = ['200', -1, Infinity, NaN];
        let errorMessage = 'Invalid amount';

        testAmount.forEach(amount => {
            expect( () => withdraw(testAccount, amount)).toThrow(errorMessage)
        }) 
    })
})

describe('testing function transfer', () => {
    it('decrease amount on senders account', () =>{

    })

    it('increace amount on recipient account', () =>{
        
    })
})