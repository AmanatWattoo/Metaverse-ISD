// like over ride method propties of class also overiden ...
class Car11 {
    constructor (color : string , location : string, owner : string , vin : string){
        this.color= color;
        this.location = location;
        this.owner= owner;
        this.vin = vin; 
    }
     readonly vin : string;
    color : string;
    location : string;
    owner : string
    address ? : string // ? is knwon as optional als ! will be used  to skip the error
    power(state: boolean){
        if(state === true){
            console.log("Started");
        }
        else{
            console.log("Switched off");
        }
    }
}
class Marcedees extends Car11{
    // take input from user for this we have to call construtor...
    // we have to take make constructor with super having properties 
    // of above car references...
    constructor (color: string , location : string, Owner: string , vin : string , alloywheels : boolean){
        
        super(color, location , Owner, vin)
        this.alloywheel = alloywheels; 
    }
    
    alloywheel : boolean;
    sispension = true;
} 

let myCar = new Marcedees ("Sliver", "Islamabad", "Amanat Wattoo", "ttt33" ,false);
console.log(myCar);
myCar.power(true);  // generaic 

