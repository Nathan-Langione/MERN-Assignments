class User {
    constructor(username, emailAddress) {  // here's what we have so far
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    // class deposit method/function
    makeDeposit(amount) {// takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
        return this;
    }

    // class deposit method/function
    makeWithdrawal(amount) {// takes a parameter this is the amount of the deposit
        this.accountBalance -= amount;   // the specific user's account increases by the amount of the value received
        return this;
    }

    displayBalance() {
        console.log("The current balance for " + this.name + " is: $" + this.accountBalance)
        return this;
    }

    transferMoney(otherUser, amount) {
        if (amount > this.accountBalance) {
            console.log("Insufficient funds for transfer! Balance: $ " + this.accountBalance + "Requested funds: $" + amount)
        }
        else {
            console.log("Transfering $" + amount + " from " + this.name + " to " + otherUser.name)
            this.accountBalance -= amount
            otherUser.accountBalance += amount
            console.log("Transfer completed successfully!")
        }
        return this;
    }
}

const user1 = new User("Tom Terrific", "tt@python.com");
const user2 = new User("Monty Python", "monty@python.com");
const user3 = new User("Fred Smith", "fs@python.com");

user1.makeDeposit(100).makeDeposit(50).makeDeposit(20).makeWithdrawal(100).displayBalance()

user2.makeDeposit(200).makeDeposit(100).makeWithdrawal(25).makeWithdrawal(80).displayBalance()

user3.makeDeposit(500).makeWithdrawal(25).makeWithdrawal(175).makeWithdrawal(100).displayBalance()


user1.transferMoney(user3, 25).displayBalance()
user3.displayBalance()