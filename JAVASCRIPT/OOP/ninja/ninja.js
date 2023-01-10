class Ninja {
    constructor (name, health =100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(this.name);

    showStats = () => console.log(`name: ${this.name}, 
    \nstrength: ${this.strength},
    \nspeed: ${this.speed}, 
    \nhealth: ${this.health}`
    )

    drinkSake = () => this.health += 10;
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

