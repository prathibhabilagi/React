//Symbol -> primitive data type and produce unique id

let s1 = Symbol("data1");
let s2 = Symbol();
console.log(s1 === s2); //false


let data = {
    s1: "sample data"
}
console.log(data.s1); //sample data


function getName(name): string | null | void {
    return name;
}
console.log(getName("abc")); //abc

//<-------- Type widening --------->
// Type widening -> Declare var and intialize with specific value
//-> support --strictNullCheck -> leads to compile time error
  
let productId;
productId = null;
//productId = undefined;
//productId = 12;
console.log(productId);


