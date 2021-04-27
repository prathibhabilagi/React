function calcTax(state: string, income: number, dependents: number): number | undefined{
    if(state === "RCB") {
       return income * 0.6 - dependents * 500;
    }
    else if (state === "MI") {
        return income * 0.05 - dependents * 300;
    }
}

let tax: number = calcTax('RCB', 50000, 2);
console.log(tax);

//console.log(calcTax('RCB', 50000, 2));
