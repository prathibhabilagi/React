interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function fullName(person: Person) 
{
    console.log(`${person.firstName} ${person.lastName} ${person.age}`);
}

let p = {
    firstName: "Kim",
    lastName: "Tae",
    age: 10
}

fullName(p);
