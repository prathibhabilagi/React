class Employee {
    public employeeName: string;
    public age: number;

    constructor(name: string, dob: number) {
        this.employeeName = name;
        this.age = dob;
    }

    greet() {
        console.log(`Welcome ${this.employeeName} ${this.age}`);
    }
}

let Employee1 = new Employee('Tae', 26);
Employee1.greet();

class Manager extends Employee {
    constructor(mangerName: string, managerAge: number) {
        super(mangerName, managerAge);
    }

    work() {
        console.log(`Manager ${this.employeeName}`);
        
    }
}

let m1 = new Manager('Jimin', 26)
m1.work();
console.log(m1.employeeName);
