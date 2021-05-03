//Type Operators => Operator available while working with objects in typescript

//instanceof basic example
let slack = [1, 2, 3, 4];
console.log(slack instanceof Array);
console.log(slack instanceof String);

//intanceof -> Used to determine whether or not a type is of a particular constructor function.

class Learner {
    name: string;
    age: number;
    toLearn: boolean;
}

//create instance of Learner class
const l1 = new Learner ();
l1.name = "Tae";
l1.age = 26;
l1.toLearn = true;

console.log(l1);

//type guards
console.log(l1 instanceof Learner); //true
console.log(l1 instanceof Object); //true
console.log(l1 instanceof String); //false


//typeof -> return datatype of variable

console.log(typeof l1);  //object
console.log(typeof l1.name); //string
console.log(typeof l1.age); //number




