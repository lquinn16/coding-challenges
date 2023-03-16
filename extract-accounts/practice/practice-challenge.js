function extractAccounts(transactionDetails) {
    let updatedAccounts = [];

    const accountNumbers = [...new Set(transactionDetails.map(item => item.accountNumber))];
    // console.log("Account numbers: ", accountNumbers);
    
    
    accountNumbers.forEach(accountNumber => { 
        let account = new Account(accountNumber);
        // console.log("Account: ", account);
        transactionDetails.filter(item => item.accountNumber === accountNumber).forEach(item => { 
            let transaction = new Transaction(item.transactionNumber, item.amount);
            // console.log("Transaction: ", transaction);
            account.addTransaction(transaction);
        });
        // console.log("Updated account: ", account);
        updatedAccounts.push(account);
    });

    // console.log("Updated accounts: ", updatedAccounts);
	return updatedAccounts;
}


class TransactionDetail {
	transactionNumber;
	accountNumber;
	amount;

    constructor(transactionNumber, accountNumber, amount) {
        this.transactionNumber = transactionNumber;
        this.accountNumber = accountNumber;
        this.amount = amount;
    }

	getTransactionNumber() {
		return this.transactionNumber;
	}

	getAccountNumber() {
        return this.accountNumber;
    }

	getAmount() {
        return this.amount;
    }

	setTransactionNumber(transactionNumber) {
		this.transactionNumber = transactionNumber;
	}

	setAccountNumber(accountNumber) {
        this.accountNumber = accountNumber;
    }

	setAmount(amount) {
        this.amount = amount;
    }
}

class Account {
	accountNumber;
	transactions;

	constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.transactions = [];
    }

	getAccountNumber() {
        return this.accountNumber;
    }

    getAccount(accountNumber) {
		return this;
	}

	setAccountNumber(accountNumber) {
		this.accountNumber = accountNumber;
	}

	getTransactions() {
		return this.transactions;
	}

	setTransactions(transactions) {
        this.transactions = transactions;
    }

	addTransaction(transaction) {
        this.transactions.push(transaction);
    }

	removeTransaction(transaction) {
        this.transactions.splice(this.transactions.indexOf(transaction), 1);
    }
}

class Transaction {
	transactionNumber;
	amount;

	constructor(transactionNumber, amount) {
        this.transactionNumber = transactionNumber;
        this.amount = amount;
    }

	getTransactionNumber() {
        return this.transactionNumber;
    }

	getAmount() {
        return this.amount;
    }

	setTransactionNumber(transactionNumber) {
        this.transactionNumber = transactionNumber;
    }

	setAmount(amount) {
        this.amount = amount;
    }
}

let account1 = new Account("123456 12345678");
let t1 = new Transaction(10001, 100);
let t2 = new Transaction(10002, 200);
let t3 = new Transaction(10003, 300);
account1.setTransactions([t1, t2, t3]);
// console.log(account1.getTransactions());

let account2 = new Account("123123 10005678");
let account3 = new Account("123789 11115678");


let updatedAccounts = extractAccounts([
    new TransactionDetail(10011, "123456 12345678", 1100), 
    new TransactionDetail(10012, "123456 12345678", 1200),
    new TransactionDetail(10021, "123123 10005678", 1300), 
    new TransactionDetail(10032, "123789 11115678", 2400)
]);

console.log("Updated accounts: ", updatedAccounts);
