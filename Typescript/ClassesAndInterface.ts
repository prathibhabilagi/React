//<----------- Example for class ---------------->
interface UserInterface {
    getFullName(): string;
}

interface AgeInterface {
    getAge(): number;
}

class User implements UserInterface, AgeInterface {
    firstName: string;
    protected lastName: string;
    age: number;
    readonly unchangeableName: string;
    static readonly maxAge = 50;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // ChangeUnchangeableName() : void {
    //     this.unchangeableName = "foo"
    // }  // Can't change name because it's readonly

    getAge(): number {
        return this.age;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const user = new User('Kim', "Tae", 26);
console.log(user.getFullName());
console.log(user.getAge());

//console.log(user.firstName); //Cant access beacuse it's marked has private
//console.log(user.lastName); //Err accessible within class and subclass


class Admin extends User {
    getFullName(): string {
        return `${this.firstName} ${this.lastName} ${this.age}`
    }
}

const admin = new Admin ('Alex', 'B', 23);
console.log(admin.getFullName());



