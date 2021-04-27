class Person {
}
const p1 = new Person();
p1.fname = "Park";
p1.lname = "Jimin";
p1.age = 26;
console.log(p1.fname);

//<--------- class with constructor --------->
class Employee {
    constructor(index, name, place, id) {
        this.index = index;
        this.name = name;
        this.place = place;
        this.id = id;
    }
    ;
}
const emp = new Employee(1, "Tae", "Seoul", 26);
console.log(emp);
