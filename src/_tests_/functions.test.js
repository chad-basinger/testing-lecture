const functions = require('../functions')
console.log(functions)

test('function add should add two numbers', () => {
    expect(functions.add(1, 2)).toBe(3)
})

test('function should return a number', () => {
    expect(functions.add(1, 2)).not.toBeNaN()
})

test('function subtract should subtract one number from the other', () => {
    expect(functions.subtract(6, 4)).toBe(2)
})

test('function should multiply two numbers', () => {
    expect(functions.multiply(6, 4)).toBe(24)
})

test('reference types are special', () => {
    expect([12]).toEqual([12])
})

test('say Hello returns hello and not goodBye', () => {
    expect(functions.sayHello()).toBe('hello')
    expect(functions.sayHello()).not.toBe('goodBye')
})

// test('say Hello returns hello and not goodBye', () => {
//     expect(functions.sayHello()).not.toBe('goodBye')
// })

test('divide two numbers', () => {
    expect(functions.divide(20, 100)).toBe(.2)
})

test('object assignment should add correct properties and values', () => {
    const data = {
        name :'Andrew'
    }

    data.age = 99;
    data.favorites = {
        food: 'pizza'
    }

    expect(data).toEqual({
        name: 'Andrew',
        age: 99,
        favorites: {food: 'pizza'}
    })
})

test('axios request test', async () => {
    expect.assertions(1);
    const data = await functions.getUser();

    expect(data.name).toEqual('Leanne Graham')


    // expect(functions.getUser().hasAssertions().toEqual(expect.stringContaining('Leanne'))
})

let bankAccount = { 
    balance: 1000, 
    depositMoney(amount) { 
    return this.balance += amount;
    
    }, 
    withdrawMoney(amount) { 
    this.balance -= amount; 
    }, 
    };


describe('Test suite for bank accounts', () => {
    beforeEach(() => {
        bankAccount.balance = 1000
    })

    test('initial balance should be 1000', () => {
        expect(bankAccount.balance).toBe(1000)
    })

    test('depositing 9000 should update balance to 10k', () => {
        expect(bankAccount.depositMoney(9000)).toBe(10000)
    })

})