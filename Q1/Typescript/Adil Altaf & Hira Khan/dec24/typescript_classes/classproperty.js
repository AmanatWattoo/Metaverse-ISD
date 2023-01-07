"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// a which is not in a class also will not be in object
// typescript will not access the non existed properity into the code. 
class Car4 {
    constructor(color, location) {
        this.color = color;
        this.location = location;
    }
    color;
    location;
    power(state) {
        if (state === true) {
            console.log("Started");
        }
        else {
            console.log("Switched off");
        }
    }
}
let myBrandCar = new Car4("Brown", "Punjab");
let myWifeCar = new Car4("Black", "KPK");
let myBrotherCar = new Car4("Brown", "Home");
myBrandCar.power(true);
console.log(myBrandCar);
myWifeCar.power(true);
console.log(myWifeCar);
myBrotherCar.power(false);
console.log(myBrotherCar);
