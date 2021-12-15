
function deposit(account, amount) {
    if (!isAccount(account)) {
        throw new Error('Invalid account data');
    } else if (!isAmount(amount)) {
        throw new Error('Invalid amount');
    } else if (account && amount > 0) {
        account.balance += amount;
    } else {
        throw new Error('Amount must be greater than 0');
    }
}

function isAccount (maybeAccount) {
    if (!maybeAccount) {
        return false;
    } else if (!maybeAccount.id) {
        return false;
    } else if (typeof maybeAccount.balance !== 'number') {
        return false;
    } else if (maybeAccount.balance < 0 || maybeAccount.balance === Infinity || isNaN(maybeAccount.balance)) {
        return false;
    }

    return true;
}

function isAmount (maybeAmount) {
    if (!maybeAmount) {
        return false;
    } else if (typeof maybeAmount !== 'number') {
        return false;
    } else if (maybeAmount < 0 || maybeAmount === Infinity || isNaN(maybeAmount)) {
        return false;
    }

    return true;
}

function withdraw(account, amount) {
    if (!isAccount(account)) {
        throw new Error('Invalid account data');
    } else if (!isAmount(amount)) {
        throw new Error('Invalid amount');
    } else if (account.balance >= amount) {
        account.balance -= amount;
    } else {
        throw new Error('Invalid amount to withdraw');
    }
}

function transfer(source, target, amount) {

}

module.exports = { deposit, withdraw, transfer }