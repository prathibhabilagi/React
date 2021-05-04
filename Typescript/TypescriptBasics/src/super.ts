class BangTan {

//Constructor of superclass
    constructor(
        public fname: string,
        public lname: string,
        private age: number
    ) {}
}

//Subclass extends superclass

class Astro extends BangTan {

//Constructor of subclass
    constructor(
        fname: string,
        lname: string,
        age: number,
        public department: string
    ) {

//Invokes constructor of superclass
        super(fname, lname, age);
    }
}

const Astro1 = new Astro('Kim', 'Tae', 26, 'Singer');
console.log(Astro1);
