"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(title, Auther, lang) {
        this.title = title;
        this.Auther = Auther;
        this.lang = lang;
    }
    title;
    Auther;
    lang;
    stock(state) {
        if (state = true) {
            console.log("In Stock");
        }
        else {
            console.log("Out of stock");
        }
    }
}
class novel extends Book {
    constructor(title, Auther, lang, year) {
        super(title, Auther, lang);
        this.year = year;
    }
    year;
    // method override 
    stock(state) {
        if (state = true) {
            console.log(" Novel is In Stock");
        }
        else {
            console.log(" Novel is Out of stock");
        }
    }
}
let mynovel = new novel("Jo Chaly to Jahan se guzar gaye", "Maha Malik", "Urdu", 2021);
mynovel.stock(false);
console.log(mynovel);
// let mybook = new Book("Rise of Pakistan", "Pakistan", "Urdu");
// console.log(mybook);
