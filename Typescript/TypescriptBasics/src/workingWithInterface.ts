interface MotorVehicle{
    //Declares method signature
    startEngine(): boolean;
    stopEngine(): boolean;
    brake(): boolean;
    accelerate(speed: number): void;
    honk(howLong: number): void;
}

interface Flyable {
    fly(howHigh: number);
    landing(): boolean;
}

class Car implements MotorVehicle, Flyable {
    //Implements method from MotorVechile interface
    startEngine(): boolean{
        return true;
    }

    stopEngine(): boolean {
        return false;
    }

    brake(): boolean {
        return true;
    }

    accelerate(speed: number): void {
        console.log(`Speed is ${speed} km/h`);
    }

    honk(howLong: number): void {
        console.log(`Honking ${howLong} times`);
    }

    //Implements method from MotorVechile interface
    fly(howHigh: number) {
        console.log(`Flying ${howHigh} km high`);    
    }

    landing(): boolean{
        return false;
    }

    //Implementing method for Car class
    driving(): void {
        console.log( 'Driving......');
    }
}

//Type inference -> explicitly declare the type of class
const car = new Car();
car.startEngine();
car.accelerate(60);
car.driving();
car.landing();

//Only the methods in MotorVech interface can be declared in this car1 constant
const car1: MotorVehicle = new Car();
car1.accelerate(80);
//car1.driving(); //Error
