class Book {
    constructor (title : string , Auther : string , lang : string){
        this.title = title;
        this.Auther = Auther;
        this.lang  = lang;
    }
    title : string;
    Auther : string;
    lang: string; 
    stock (state : boolean){
        if (state = true){
            console.log("In Stock");
        } else {
            console.log("Out of stock");
            
        }
    }
}
class novel extends Book{
    constructor (title : string , Auther: string , lang : string, year : number){
        super(title , Auther , lang);
        this.year = year;
    }
    year : number; 
    // method override 
    stock (state : boolean){
        if (state = true){
            console.log(" Novel is In Stock");
        } else {
            console.log(" Novel is Out of stock");
            
        }
    }
} 
let mynovel = new novel( "Jo Chaly to Jahan se guzar gaye", "Maha Malik", "Urdu", 2021)
    mynovel.stock(false);
    console.log(mynovel);




// let mybook = new Book("Rise of Pakistan", "Pakistan", "Urdu");
// console.log(mybook);
