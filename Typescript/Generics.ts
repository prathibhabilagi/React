const addId = <T extends object>(obj: T) => {
    const id = Math.floor(Math.random()*1000);
    return {
        ...obj,
        id
    }
};

interface PrsnInterface<T> {
    name: string;
    data: T;
}

const prsn: PrsnInterface<string[]>  = {
    name: 'Tae',
    data: ['foo', 'bar'],
}

const result = addId(prsn);
console.log(result);



// Generic nterface

interface Pair<K, V> {
    key: K;
    value: V;
}

let month: Pair<string, number> = {
    key: 'Tae',
    value: 1
};

// console.log(month);

