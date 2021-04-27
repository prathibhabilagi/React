interface BTS {
    name: string;
    age: number;
}

function savePerson( bts: BTS): void {
    console.log('saving', bts);
    
}

const bangTan: BTS = {
    name: "Tae",
    age: 26
}

savePerson(bangTan)
// console.log(bangTan);

//<------ extends and implements ---------->

interface Point2D {
    x: number;
    y: number;
}

interface Point3D extends Point2D {
    z: number;
}

class threeD implements Point3D {
    x: 5;
    y: 10;
    z: 15;
}

console.log(threeD);


const Point: Point3D = {
    x: 8,
    y: 7,
    z: 6
}

console.log(Point.x);


