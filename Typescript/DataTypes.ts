// <----------- TypeScript types -------------->

// Object Type

let employee: {
    name: string;
    age: number;
    country: string;
} 
  
employee = { 
    name: "Kim",
    age: 24,
    country: "India"
}

console.log(employee);
  
 

// Array Type
  
let skills: string[];
skills = []
skills[0] = "Tae";
skills.push('BTS');
  
//skills.push(98) //complie time error
console.log(skills.length);

  
let scores: (string | number)[];
scores = ['BTS', 3, 'Army', 88.09, 'i'];
console.log(scores);
  
  
// Tuple Type
  
let Person: [string , number, string?];
Person = ["Tae", 8];
console.log(Person);
