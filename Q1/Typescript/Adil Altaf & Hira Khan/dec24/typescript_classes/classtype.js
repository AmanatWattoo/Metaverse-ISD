"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// which we can read not to change .....
// if initially not declared and want to call later then typescript will restrict 
class Car10 {
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
let myBrandCar = new Car10("Brown", "Punjab", "Amanat", "A1");
let myWifeCar = new Car10("Black", "KPK", "Madam", "A3");
let myBrotherCare;
myBrotherCare = {
    color: "Black",
    vin: "Alpha",
    location: "Punjab Lahore",
    owner: "Salamat Ali",
    power() { }
};
