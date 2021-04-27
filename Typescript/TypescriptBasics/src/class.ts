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
