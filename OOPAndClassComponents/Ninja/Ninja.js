class Ninja {
    //what creates an instance on ninja
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
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
        console.log(`${this.name} just drank sake and his health is now ${this.health}`)
        return this;
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().drinkSake().showStats()

const ninja2 = new Ninja("Billy", 15, 5, 7);
ninja2.sayName().showStats().drinkSake();



