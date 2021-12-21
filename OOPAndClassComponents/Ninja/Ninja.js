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

class Sensei extends Ninja {
    // constructor(name, wisdom = 10) {
    // super(name, 200, 10, 10);
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    showStats() {
        console.log(`${this.name} has ${this.health} health, ${this.speed} speed, ${this.strength} strength, and ${this.wisdom} wisdom!`)
        return this;
    }

    speakWisdom() {
        console.log("Speaking wisdom...");
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
        return this;
    }
}


const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().showStats().drinkSake().drinkSake().showStats()

const ninja2 = new Ninja("Billy", 15, 5, 7);
ninja2.sayName().showStats().drinkSake();

const sensei1 = new Sensei("Master Splinter");

sensei1.speakWisdom().showStats();