// function extractAccounts(transactionDetails: TransactionDetail[]): Account[] {

// 	let updatedAccounts: Account[] = [];

//     const accountNumbers = [...new Set(transactionDetails.map(item => item.accountNumber))];
//     // console.log("Account numbers: ", accountNumbers);
    
    
//     accountNumbers.forEach(accountNumber => { 
//         let account = new Account(accountNumber);
//         // console.log("Account: ", account);
//         transactionDetails.filter(item => item.accountNumber === accountNumber).forEach(item => { 
//             let transaction = new Transaction(item.transactionNumber, item.amount);
//             // console.log("Transaction: ", transaction);
//             account.addTransaction(transaction);
//         });
//         // console.log("Updated account: ", account);
//         updatedAccounts.push(account);
//     });

//     // console.log("Updated accounts: ", updatedAccounts);
// 	return updatedAccounts;
// }


// class TransactionDetail {
// 	transactionNumber: number;
// 	accountNumber: string;
// 	amount: number;

//     constructor(transactionNumber: number, accountNumber: string, amount: number) {
//         this.transactionNumber = transactionNumber;
//         this.accountNumber = accountNumber;
//         this.amount = amount;
//     }

// 	getTransactionNumber(): number {
// 		return this.transactionNumber;
// 	}

// 	setTransactionNumber(transactionNumber: number): void {
// 		this.transactionNumber = transactionNumber;
// 	}

// 	getAccountNumber(): string {
//         return this.accountNumber;
//     }

// 	setAccountNumber(accountNumber: string): void {
//         this.accountNumber = accountNumber;
//     }

// 	getAmount(): number {
//         return this.amount;
//     }

// 	setAmount(amount: number): void {
//         this.amount = amount;
//     }
// }

// class Account {
// 	accountNumber: string;
// 	transactions: Transaction[];

// 	constructor(accountNumber: string) {
//         this.accountNumber = accountNumber;
//         this.transactions = [];
//     }

// 	getAccountNumber(): string {
//         return this.accountNumber;
//     }

// 	getAccount(accountNumber: string): Account {
// 		return this;
// 	}

// 	setAccountNumber(accountNumber: string): void {
// 		this.accountNumber = accountNumber;
// 	}

// 	getTransactions(): Transaction[] {
// 		return this.transactions;
// 	}

// 	setTransactions(transactions: Transaction[]): void {
//         this.transactions = transactions;
//     }

// 	addTransaction(transaction: Transaction): void {
//         this.transactions.push(transaction);
//     }

// 	removeTransaction(transaction: Transaction): void {
//         this.transactions.splice(this.transactions.indexOf(transaction), 1);
//     }
// }

// class Transaction {
// 	transactionNumber: number;
// 	amount: number;

// 	constructor(transactionNumber: number, amount: number) {
//         this.transactionNumber = transactionNumber;
//         this.amount = amount;
//     }

// 	getTransactionNumber(): number {
//         return this.transactionNumber;
//     }
	
// 	setTransactionNumber(transactionNumber: number): void {
//         this.transactionNumber = transactionNumber;
//     }

// 	getAmount(): number {
//         return this.amount;
//     }

// 	setAmount(amount: number): void {
//         this.amount = amount;
//     }
// }

// let account1 = new Account("123456 12345678");
// let t1 = new Transaction(1, 100);
// let t2 = new Transaction(2, 200);
// let t3 = new Transaction(3, 300);
// account1.setTransactions([t1, t2, t3]);
// // console.log(account1.getTransactions());

// let account2 = new Account("123123 10005678");
// let account3 = new Account("123789 11115678");


// let updatedAccounts = extractAccounts([
//     new TransactionDetail(10011, "123456 12345678", 1100), 
//     new TransactionDetail(10012, "123456 12345678", 1200),
//     new TransactionDetail(10021, "123123 10005678", 1300), 
//     new TransactionDetail(10032, "123789 11115678", 2400)
// ]);

// console.log("Updated accounts: ", updatedAccounts);



