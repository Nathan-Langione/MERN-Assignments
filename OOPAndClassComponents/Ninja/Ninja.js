class Ninja {
    //what creates an instance on ninja
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    // Ninja methods

    sayName() {
        console.log(`My name is ${this.name}!`)
        return this;
    }

    showStats() {
        console.log(`${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength!`)
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log("Ahhhh, smooth!")
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().drinkSake().showStats()


