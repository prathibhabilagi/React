class Car {
    //Implements method from MotorVechile interface
    startEngine() {
        return true;
    }
    stopEngine() {
        return false;
    }
    brake() {
        return true;
    }
    accelerate(speed) {
        console.log(`Speed is ${speed} km/h`);
    }
    honk(howLong) {
        console.log(`Honking ${howLong} times`);
    }
    //Implements method from MotorVechile interface
    fly(howHigh) {
        console.log(`Flying ${howHigh} km high`);
    }
    landing() {
        return false;
    }
    //Implementing method for Car class
    driving() {
        console.log('Driving......');
    }
}
//Type inference -> explicitly declare the type of class
const car = new Car();
car.startEngine();
car.accelerate(60);
car.driving();
car.landing();
//Only the methods in MotorVech interface can be declared in this car1 constant
const car1 = new Car();
car1.accelerate(80);
//car1.driving(); //Error
