
//Declare interface 
interface Dimensions {
    radius: number;
    circum: number;
}

abstract class Shape {

    //Declare an abstract method
    abstract dimensions(): Dimensions;

    draw(): string{
        return `Drawing.....`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    //implements the dimensions() method
    public dimensions(): Dimensions {
        const dim: Dimensions = {
            radius: 0,
            circum: 0
        }
        return dim;
    }
}

const c = new Circle();
console.log(c.dimensions());
console.log(c.draw());
