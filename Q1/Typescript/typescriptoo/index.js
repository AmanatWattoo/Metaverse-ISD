"use strict";
class base {
    printName() {
        console.log("Hello," + this.getName());
    }
}
// const b = new base()
class Derived extends base {
    getName() {
        return "world";
    }
}
const d = new Derived();
d.printName();
