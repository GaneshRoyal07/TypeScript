var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("\u20B9".concat(amount, " deposited successfully."));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance!");
        }
        else {
            this.balance -= amount;
            console.log("\u20B9".concat(amount, " withdrawn successfully."));
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.getDetails = function () {
        console.log("Account Number:", this.accountNumber);
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
    };
    return BankAccount;
}());
var account1 = new BankAccount(101, "Ganesh", 5000);
account1.getDetails();
account1.deposit(2000);
account1.withdraw(3000);
console.log("Final Balance:", account1.getBalance());
