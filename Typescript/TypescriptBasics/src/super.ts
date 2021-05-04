class BangTan {
    //Constructor of superclass
    constructor(
        public fname: string,
        public lname: string,
        private age: number
    ) { }

    sing(symbol: string, numberOfSongs: number) {
        console.log(`Singing ${numberOfSongs} songs`);
    }
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

//sing() method of subclass
    sing(symbol: string, songs: number) {

//invokes sing() method on superclass
        super.sing(symbol, songs);
        this.report(symbol, songs)
    }

    private report(symbol: string, songs: number) {
        console.log(`The ${this.department} ${this.lname} will be singing ${songs} songs from ${symbol} album`);
    }
}

const Astro1 = new Astro('Kim', 'Tae', 26, 'Singer');
// console.log(Astro1);
Astro1.sing('LY', 5);
