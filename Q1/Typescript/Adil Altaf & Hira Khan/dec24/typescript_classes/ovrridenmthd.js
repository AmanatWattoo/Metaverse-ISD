"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A class should be extended to new class using "extend"
class Car11 {
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
class Marcedees extends Car11 {
    // take input from user for this we have to call construtor...
    // we have to take make constructor with super having properties 
    // of above car references...
    constructor(color, location, Owner, vin, alloywheels) {
        super(color, location, Owner, vin);
        this.alloywheel = alloywheels;
    }
    alloywheel;
    sispension = true;
}
let myCar = new Marcedees("Sliver", "Islamabad", "Amanat Wattoo", "ttt33", false);
console.log(myCar);
myCar.power(true); // generaic
// over riden fucntion
