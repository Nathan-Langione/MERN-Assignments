class User {
    constructor(username, emailAddress) {  // here's what we have so far
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }

    // class deposit method/function
    makeDeposit(amount) {// takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }

    // class deposit method/function
    makeWithdrawal(amount) {// takes a parameter this is the amount of the deposit
        this.accountBalance -= amount;   // the specific user's account increases by the amount of the value received
    }

    displayBalance() {
        console.log("The current balance for " + this.name + " is: $" + this.accountBalance)
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
    }
}

const user1 = new User("Tom Terrific", "tt@python.com");
const user2 = new User("Monty Python", "monty@python.com");
const user3 = new User("Fred Smith", "fs@python.com");

user1.makeDeposit(100)
user1.makeDeposit(50)
user1.makeDeposit(20)
user1.makeWithdrawal(100)
user1.displayBalance()

user2.makeDeposit(200)
user2.makeDeposit(100)
user2.makeWithdrawal(25)
user2.makeWithdrawal(80)
user2.displayBalance()

user3.makeDeposit(500)
user3.makeWithdrawal(25)
user3.makeWithdrawal(175)
user3.makeWithdrawal(100)
user3.displayBalance()

user1.transferMoney(user3, 25)
user1.displayBalance()
user3.displayBalance()