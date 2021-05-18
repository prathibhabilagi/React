//Array
const sd = ['a', 1];

//Function 
const last = (arr) => {
    return arr[arr.length - 1];
};

const l = last([5, 4, 9]);
const l2 = last(['a', 'b', 'c']);
const l3 = last([1, 'a']);

console.log(l);
console.log(l2);
console.log(l3);


//Class
class Band {
}
class MusicGenere extends Band {
}
class Members {
}
const Musics = [];
Musics[0] = new Band();
Musics[1] = new MusicGenere();
Musics[2] = new Members();
