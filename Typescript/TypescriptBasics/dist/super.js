class BangTan {
    //Constructor of superclass
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    sing(symbol, numberOfSongs) {
        console.log(`Singing ${numberOfSongs} songs`);
    }
}
//Subclass extends superclass
class Astro extends BangTan {
    //Constructor of subclass
    constructor(fname, lname, age, department) {
        //Invokes constructor of superclass
        super(fname, lname, age);
        this.department = department;
    }
    sing(symbol, songs) {
        //invokes sing() method on superclass
        super.sing(symbol, songs);
        this.report(symbol, songs);
    }
    report(symbol, songs) {
        console.log(`The ${this.department} ${this.lname} will be singing ${songs} songs from ${symbol} album`);
    }
}
const Astro1 = new Astro('Kim', 'Tae', 26, 'Singer');
// console.log(Astro1);
Astro1.sing('LY', 5);
