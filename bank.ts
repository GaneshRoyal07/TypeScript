class BankAccount {
  private accountNumber: number;
  private accountHolder: string;
  private balance: number;

  constructor(accountNumber: number, accountHolder: string, balance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`₹${amount} deposited successfully.`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
    } else {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn successfully.`);
    }
  }

  getBalance(): number {
    return this.balance;
  }

  getDetails(): void {
    console.log("Account Number:", this.accountNumber);
    console.log("Account Holder:", this.accountHolder);
    console.log("Balance:", this.balance);
  }
}

const account1 = new BankAccount(101, "Ganesh", 5000);

account1.getDetails();
account1.deposit(2000);
account1.withdraw(3000);
console.log("Final Balance:", account1.getBalance());