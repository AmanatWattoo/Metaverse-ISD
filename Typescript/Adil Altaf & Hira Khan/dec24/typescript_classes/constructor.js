"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// constructor is a reserve function , call on new object creation
class Car3 {
    constructor(color) {
        this.color = color;
    }
    color;
    power(state) {
        if (state === true) {
            console.log("Engine Being Started");
        }
        else {
            console.log("Engine Switched off");
        }
    }
}
let myNewCar = new Car3("Brown");
let wifeCar = new Car3("red");
console.log(`My New Car Color is ${myNewCar.color}`);
console.log(`My wife car color is ${wifeCar.color}`);
myNewCar.power(true);
