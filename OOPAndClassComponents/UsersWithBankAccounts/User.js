class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.account = new BankAccount();
    }

    // class deposit method/function
    makeDeposit(amount) {// takes a parameter this is the amount of the deposit
        this.account.deposit(amount);   // the specific user's account increases by the amount of the value received
        return this;
    }

    // class deposit method/function
    makeWithdrawal(amount) {// takes a parameter this is the amount of the deposit
        this.account.withdraw(amount);    // the specific user's account increases by the amount of the value received
        return this;
    }

    displayUserBalance() {
        console.log("The current balance for " + this.name + " is: $" + this.account.balance)
        return this;
    }

    transferMoney(otherUser, amount) {
        if (amount > this.account.balance) {
            console.log("Insufficient funds for transfer! Balance: $ " + this.account.balance + "Requested funds: $" + amount)
        }
        else {
            console.log("Transfering $" + amount + " from " + this.name + " to " + otherUser.name)
            this.account.withdraw(amount);
            otherUser.account.deposit(amount);
            console.log("Transfer completed successfully!")
        }
        return this;
    }
}

class BankAccount {
    constructor(intRate = 0.08, balance = 0) {
        this.balance = balance;
        this.intRate = intRate;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
            console.log("Insufficient funds: Charging a $5 fee");
            this.balance -= 5;
        }
        return this;
    }
    displayAccountInfo() {
        console.log(
            `Current Balance: $${this.balance}, Interest Rate: ${this.intRate}`
        );
        return this;
    }
    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const user1 = new User("Tom Terrific", "tt@python.com");
const user2 = new User("Monty Python", "monty@python.com");
const user3 = new User("Fred Smith", "fs@python.com");

user1.makeDeposit(100).makeDeposit(50).makeDeposit(20).makeWithdrawal(100).displayUserBalance()

user2.makeDeposit(200).makeDeposit(100).makeWithdrawal(25).makeWithdrawal(80).displayUserBalance()

user3.makeDeposit(500).makeWithdrawal(25).makeWithdrawal(175).makeWithdrawal(100).displayUserBalance()


user1.transferMoney(user3, 25).displayUserBalance()
user3.displayUserBalance()