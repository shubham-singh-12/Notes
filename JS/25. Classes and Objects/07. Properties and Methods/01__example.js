class BankAccount {
    constructor(owner, balance) {
        // PROPERTIES
        this.owner = owner;
        this.balance = balance;
    }

    // METHODS
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance! ❌");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. Remaining: ₹${this.balance}`);
        }
    }

    checkBalance() {
        console.log(`Current balance: ₹${this.balance}`);
    }
}

let account = new BankAccount("Harry", 5000);

account.checkBalance();             // Current balance: ₹5000
account.deposit(2000);              // Deposited ₹2000. New balance: ₹7000
account.withdraw(3000);             // Withdrew ₹3000. Remaining: ₹4000
account.withdraw(9000);             // Insufficient balance! ❌