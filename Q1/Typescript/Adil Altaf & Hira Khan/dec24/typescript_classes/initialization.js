"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if initially not declared and want to call later then typescript will restrict 
class Car5 {
    constructor(color, location, owner) {
        this.color = color;
        this.location = location;
        this.owner = owner;
    }
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
let myBrandCar = new Car5("Brown", "Punjab", "Amanat");
let myWifeCar = new Car5("Black", "KPK", "Madam");
let myBrotherCar = new Car5("Brown", "Home", "Slamat Ali");
myBrandCar.power(true);
console.log(myBrandCar);
myWifeCar.power(true);
console.log(myWifeCar);
myBrotherCar.power(false);
console.log(myBrotherCar);
