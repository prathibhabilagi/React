// <----------- Numeric enum -------------->
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["mon"] = 1] = "mon";
    Weekdays[Weekdays["tue"] = 2] = "tue";
    Weekdays[Weekdays["wed"] = 3] = "wed";
    Weekdays[Weekdays["thur"] = 4] = "thur";
    Weekdays[Weekdays["fri"] = 5] = "fri";
    Weekdays[Weekdays["sat"] = 6] = "sat";
    Weekdays[Weekdays["sun"] = 7] = "sun";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.mon);

// <-------------- Converting temp ------------->

//without enum

function convertTemp(temp, fromTo) {
    return ('FtoC' === fromTo) ? (temp - 32) * 5.0 / 9.0 : (temp * 9.0 / 5.0 + 32);
}

console.log(`70F is ${convertTemp(70, 'FtoC')}C`);
console.log(`21C is ${convertTemp(21, 'CtoF')}F`);

//with enum

var Temp;
(function (Temp) {
    Temp[Temp["FtoC"] = 0] = "FtoC";
    Temp[Temp["CtoF"] = 1] = "CtoF";
})(Temp || (Temp = {}));

function convertTemperature(temp, fromTo) {
    return (Temp.FtoC === fromTo) ? (temp - 32) * 5.0 / 9.0 : (temp * 9.0 / 5.0 + 32);
}
console.log(`70F is ${convertTemperature(70, Temp.FtoC)}C`);
console.log(`21C is ${convertTemperature(21, Temp.CtoF)}F`);

// <------------ String enum -------------->
var Direction;
(function (Direction) {
    Direction["up"] = "UP";
    Direction["down"] = "DOWN";
    Direction["right"] = "RIGHT";
    Direction["left"] = "LEFT";
})(Direction || (Direction = {}));

function move(where) {
    if (where === Direction.up) {
        console.log("Moving UP");
    }
    else if (where === Direction.down) {
        console.log("Moving Down");
    }
    else {
        console.log("Moving Right or left");
    }
}
move(Direction.right);
