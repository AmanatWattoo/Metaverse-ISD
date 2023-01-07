"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// which we can read not to change .....
// if initially not declared and want to call later then typescript will restrict 
class Car1 {
    constructor(color, location, owner, vin) {
        this.color = color;
        this.location = location;
        this.owner = owner;
        this.vin = vin;
    }
    vin;
    color;
    location;
    owner;
    address; // ? is knwon as optional als ! will be used  to skip the error
    power(state) {
        if (state === true) {
            console.log("Started");
        }
        else {
            console.log("Switched off");
        }
    }
}
let myBrandCar = new Car1("Brown", "Punjab", "Amanat", "A1");
let myWifeCar = new Car1("Black", "KPK", "Madam", "A3");
let myBrotherCar = new Car1("Brown", "Home", "Slamat Ali", "At1");
myBrandCar.power(true);
console.log(myBrandCar);
myWifeCar.power(true);
console.log(myWifeCar);
myBrotherCar.power(false);
console.log(myBrotherCar);
console.log(myBrandCar.vin);
// myBrandCar.vin= "Art"
console.log(myBrandCar.vin);
