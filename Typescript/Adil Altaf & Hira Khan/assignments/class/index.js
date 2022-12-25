"use strict";
class vehicle {
    constructor(car, truck, train) {
        this.car = car;
        this.truck = truck;
        this.train = train;
    }
    power(state) {
        if (state == true) {
            console.log("Engine is being started!!!");
        }
        else {
            console.log("Out of action");
        }
    }
}
let type = new vehicle("Car", "Truck", "Train");
type.power(true);
console.log(type);
class marceedes extends vehicle {
    constructor(car, model, color) {
        super(car, model, color);
        this.color = color;
        this.model = model;
    }
}
let mycar = new marceedes("Marcdees", "New", "Siliver");
mycar.power(true);
console.log(mycar);
class surv extends marceedes {
}
