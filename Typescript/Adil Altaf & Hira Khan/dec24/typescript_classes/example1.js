"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car2 {
    color = "Silver";
    power(state) {
        if (state === true) {
            console.log("Engine Being Started");
        }
        else {
            console.log("Being Switched off");
        }
    }
}
let myCar = new Car2();
myCar.power(false);
