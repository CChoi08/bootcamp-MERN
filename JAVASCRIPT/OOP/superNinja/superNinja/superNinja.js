class Ninja {
    constructor (name, health =100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName = () => console.log(this.name);

    showStats = () => console.log(`NAME: ${this.name} 
    \nSTRENGTH: ${this.strength}
    \nSPEED: ${this.speed}
    \nHEALTH: ${this.health}`
    )

    drinkSake = () => this.health += 10;
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
            super(name, health, speed, strength);
            this.name = name;
            this.health = health;
            this.speed = speed;
            this.strength = strength;
            this.wisdom = wisdom;
    }

    speakWisdom = () => {
        this.drinkSake();
        console.log(`What one programmer can do in one month, two programmers can do in two months.`)
    }
}

const sensei1 = new Sensei("Splinter");
sensei1.speakWisdom();
sensei1.showStats();
