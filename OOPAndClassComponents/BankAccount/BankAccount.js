class BankAccount {
    constructor(intRate, balance = 0) {
        this.interest = intRate
        this.accountBalance = balance
    }

    deposit(amount) {
        this.accountBalance += amount;
        return this;
    }

    withdraw(amount) {
        this.accountBalance -= amount;
        return this;
    }

    displayAccountInfo() {
        console.log("The current balance is: $" + this.accountBalance)
        return this;
    }

    yieldInterest() {
        if (this.accountBalance > 0) {
            const foo = this.accountBalance * this.interest
            this.accountBalance += foo
        }
        else {
            console.log("You are broke!")
        }
        return this;
    }

}

const act1 = new BankAccount(.01)
const act2 = new BankAccount(.02, 10)

act1.displayAccountInfo().deposit(10).deposit(20).deposit(100).withdraw(50).yieldInterest().displayAccountInfo()
act2.displayAccountInfo().deposit(100).deposit(30).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yieldInterest().displayAccountInfo()