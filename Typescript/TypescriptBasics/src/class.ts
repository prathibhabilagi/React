class Person {
    fname: string;
    lname: string;
    age: number;
}

const p1 =  new Person();
p1.fname = "Park";
p1.lname = "Jimin";
p1.age = 26;
console.log(p1.fname); 


//<--------- class with constructor --------->
class Employee {
    constructor (
        readonly index: number,
        public name: string, 
        public place: string,
        public id: number
    )
    {};
}

const emp = new Employee(1, "Tae", "Seoul", 26);
console.log(emp);


//<------------- OOP concpect with inheritance -------------->

class Human {
    fname: string;
    lname: string;
    age: number;

    sayHello(): string {
        return `My name is ${this.fname} ${this.lname}`
    }
}

class Agent extends Human {
    department: string;
}

const agent1 = new Agent();
agent1.fname = "Tae"
agent1.department = "Kpop";
console.log(agent1.sayHello());


