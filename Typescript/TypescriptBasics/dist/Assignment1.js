//Declare custom dog type
class Dog {
    constructor(name) {
        this.name = name;
    }
    ;
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}
//Declare custom fish type 
class Fish {
    dive(howDeep) {
        return `Dive ${this.name}`;
    }
}
function talkToPet(pet) {
    //type guard
    if (pet instanceof Dog) {
        return pet.sayHello();
    }
    else if (pet instanceof Fish) {
        return "Fish cannot talk";
    }
}
const myDog = new Dog("Yeontan");
const myFish = new Fish();
console.log(talkToPet(myDog));
console.log(talkToPet(myFish));
