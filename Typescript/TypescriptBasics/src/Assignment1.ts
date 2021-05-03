//Declare custom dog type
class Dog {
    constructor(readonly name: string) { };
    sayHello(): string {
        return `Hello, I'm ${this.name}`;
    }
}

//Declare custom fish type 
class Fish {
    name: string;
    dive(howDeep: number): string {
        return `Dive ${this.name}`
    }
}

//Create union of dog and fish
type Pet = Dog | Fish;

function talkToPet(pet: Pet): string {
    //type guard
        if(pet instanceof Dog) {
            return pet.sayHello();
        }
        else if(pet instanceof Fish) {
            return "Fish cannot talk";
        }
}

const myDog = new Dog("Yeontan");
const myFish = new Fish();

console.log(talkToPet(myDog));
console.log(talkToPet(myFish));

