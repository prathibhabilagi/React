// <----------- Numeric enum -------------->

enum Weekdays{
    mon = 1,
    tue = 2,
    wed = 3,
    thur = 4,
    fri = 5,
    sat = 6,
    sun = 7
}
console.log(Weekdays.mon);

// <-------------- Converting temp ------------->

// without enum
  
function convertTemp(temp: number, fromTo: string): number {
    return ('FtoC' === fromTo) ? (temp -32) * 5.0/9.0 : (temp * 9.0/5.0 + 32);
}
console.log(`70F is ${convertTemp(70, 'FtoC')}C`);
console.log(`21C is ${convertTemp(21, 'CtoF')}F`);

// with enum
  
enum Temp {
    FtoC,
    CtoF
}
function convertTemperature(temp: number, fromTo: Temp): number {
    return (Temp.FtoC === fromTo) ? (temp -32) * 5.0/9.0 : (temp * 9.0/5.0 + 32);
}
console.log(`70F is ${convertTemperature(70, Temp.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Temp.CtoF)}F`);


// <------------ String enum -------------->
enum Direction {
    up = "UP",
    down = "DOWN",
    right = "RIGHT",
    left = "LEFT"
}

function move (where: Direction) {
    if(where === Direction.up) {
        console.log("Moving UP"); 
    } else if (where === Direction.down) {
        console.log("Moving Down");
    } else {
        console.log("Moving Right or left");
    }
}

move(Direction.right)

