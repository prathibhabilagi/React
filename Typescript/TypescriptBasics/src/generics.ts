//Array

type numArray = Array<string | number>;
const sd : numArray = ['a', 1];
type strArray = Array<string>

  
//Function 
  
const last = <T> (arr: T[]) => {
    return arr[arr.length -1];
}

const l = last<number>([5, 4, 9]);
const l2 = last<string>(['a', 'b', 'c']);
const l3 = last<string | number>([1, 'a']);

console.log(l);
console.log(l2);
console.log(l3);


//Class
  
class Band {
    name: string;
}

class MusicGenere extends Band {
    typeOfMusic: string;
}

class Members {
    name: string;
    age: number;
}

const Musics: Array<Band> = [];
Musics[0] = new Band();
Musics[1] = new MusicGenere();
Musics[2] = new Members(); 


