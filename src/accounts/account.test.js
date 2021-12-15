const { deposit, withdraw, transfer } = require("./account.js");

describe("testing function deposits", () => {
  it("increaces the amount on account", () => {
    //Arange
    const testAccount = {
      id: "JCHH",
      balance: 300,
    };
    const testAmount = 300;
    const expectedBalance = testAccount.balance + testAmount;

    //Act
    deposit(testAccount, testAmount);

    //Assert
    expect(testAccount.balance).toBe(expectedBalance);
  });

  it("check if account object is valid", () => {
    let testAccount = [null, {}, { id: "0ddd" }, { balance: 2020 }];
    const testAmount = 300;
    let errorMessage = "Invalid account data";

    testAccount.forEach((account) => {
      expect(() => deposit(account, testAmount)).toThrow(errorMessage);
    });
  });

  it("check if amount is valid", () => {
    const testAccount = {
      id: "JCHH",
      balance: 300,
    };
    const testAmount = ["200", -1, Infinity, NaN];
    let errorMessage = "Invalid amount";

    testAmount.forEach((amount) => {
      expect(() => deposit(testAccount, amount)).toThrow(errorMessage);
    });
  });
});

describe("testing function withdraw", () => {
  it("check correct balance after withdraw", () => {
    const testAccount = {
      id: "JCHH",
      balance: 500,
    };
    const testAmount = 200;
    const expectedBalance = testAccount.balance - testAmount;

    withdraw(testAccount, testAmount);

    expect(testAccount.balance).toBe(expectedBalance);
  });

  it("check if enough money on account to withdraw", () => {
    const testAccount = {
      id: "JCHH",
      balance: 500,
    };

    const testAmount = 600;
    const errorMessage = "Invalid amount to withdraw";

    expect(() => withdraw(testAccount, testAmount)).toThrow(errorMessage);
  });

  it("check if account object is valid", () => {
    let testAccount = [null, {}, { id: "0ddd" }, { balance: 2020 }];
    const testAmount = 300;
    let errorMessage = "Invalid account data";

    testAccount.forEach((account) => {
      expect(() => withdraw(account, testAmount)).toThrow(errorMessage);
    });
  });

  it("check if amount is valid", () => {
    const testAccount = {
      id: "JCHH",
      balance: 300,
    };
    const testAmount = ["200", -1, Infinity, NaN];
    let errorMessage = "Invalid amount";

    testAmount.forEach((amount) => {
      expect(() => withdraw(testAccount, amount)).toThrow(errorMessage);
    });
  });
});

describe("testing function transfer", () => {
  it("transfers money from soruce to target", () => {
    const testSource = { id: "456", balance: 256 };
    const testTarget = { id: "457", balance: 300 };
    const amount = 56;

    const expectedSourceBalance = testSource.balance - amount;
    const expectedTargetBalance = testTarget.balance + amount;

    const actual = transfer(testSource, testTarget, amount);

    expect(actual).toBe(true);
    expect(testSource.balance).toBe(expectedSourceBalance);
    expect(testTarget.balance).toBe(expectedTargetBalance);
  });

  it("return false when invalid source account object", () => {
    const testSource = "bacon";
    const testTarget = { id: "457", balance: 300 };
    const amount = 56;

    const actual = transfer(testSource, testTarget, amount);
    expect(actual).toBe(false);
  });

  it("return false when invalid target account object", () => {
    const testSource = { id: "456", balance: 256 };
    const testTarget = 1000;
    const amount = 56;

    const actual = transfer(testSource, testTarget, amount);
    expect(actual).toBe(false);
  });

  it("return false when invalid amount", () => {
    const testSource = { id: "456", balance: 256 };
    const testTarget = { id: "457", balance: 300 };
    const amount = ["200", -1, Infinity, NaN];

    amount.forEach((amount) => {
      const actual = transfer(testSource, testTarget, amount);
      expect(actual).toBe(false);
    });
  });

  it("return false when source dont have enough money on account", () => {
    const testSource = { id: "23232", balance: 100 };
    const testTarget = { id: "8575", balance: 5000 };
    const amount = 101;

    const actual = transfer(testSource, testTarget, amount);
    expect(actual).toBe(false);
  });
});
