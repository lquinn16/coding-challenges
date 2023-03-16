
class TransactionDetail {
    transactionNumber;
    accountNumber;
    amount;
  
    constructor(transactionNumber, accountNumber, amount) {
      this.transactionNumber = transactionNumber;
      this.accountNumber = accountNumber;
      this.amount = amount;
    }
  }
  
  class Account {
    accountNumber;
    transactions;
  
    constructor(accountNumber, transactions) {
      this.accountNumber = accountNumber;
      this.transactions = transactions;
    }


  }
  
  class Transaction {
    transactionNumber;
    amount;
  
    constructor(transactionNumber, amount) {
      this.transactionNumber = transactionNumber;
      this.amount = amount;
    }
  }
  
  // Example Input
  let transactionDetails = [
    {
      accountNumber: "0001123456",
      transactionNumber: 1,
      amount: 1000,
    },
    {
      accountNumber: "0002234567",
      transactionNumber: 2,
      amount: 2000,
    },
    {
      accountNumber: "0001123456",
      transactionNumber: 3,
      amount: 1500,
    },
  ];
  
  function extractAccounts(transactionDetailsArray) {
    // Code here
    let updatedAccounts = [];

    let accountNumbers = [... new Set(transactionDetailsArray.map((item) => item.accountNumber))];

    accountNumbers.forEach((accountNumber) => {
        let a = new Account(accountNumber, []);
        transactionDetailsArray.filter((item) => item.accountNumber === accountNumber).forEach((item) => {
            let t = new Transaction(item.transactionNumber, item.amount);
            a.transactions.push(t);
        });
        updatedAccounts.push(a);
    });

    return updatedAccounts;

  }
  
  let result = extractAccounts(transactionDetails);
  
  console.log(result);
  
  // Example Output: Account[accountNumber, Transactions[transactionNumber, amount]]
  
  // [
  //   {
  //     accountNumber: "0001123456",
  //     transactions: [
  //       {
  //         transactionNumber: 1,
  //         amount: 1000,
  //       },
  //       {
  //         transactionNumber: 3,
  //         amount: 1500,
  //       },
  //     ],
  //   },
  //   {
  //     accountNumber: "0002234567",
  //     transactions: [
  //       {
  //         transactionNumber: 2,
  //         amount: 2000,
  //       },
  //     ],
  //   },
  // ];
  