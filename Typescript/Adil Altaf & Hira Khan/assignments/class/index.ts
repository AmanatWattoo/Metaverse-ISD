class vehicle {
    constructor (car : string , truck: string , train : string){
        this.car = car;
        this.truck = truck;
        this.train = train;
    }
    car :string;
    truck : string;
    train : string;
  power(state : boolean)
  {
    if(state == true) 
    {
        console.log("Engine is being started!!!");
    }
    else{
        console.log("Out of action");
        
    }
  }
}
let type = new vehicle("Car", "Truck", "Train");
type.power(true);
console.log(type);

class marceedes extends vehicle {
    constructor (car: string , model: string, color : string ){
       super(car,model,color,)
       this.color = color;
       this.model = model; 
    }
    color : string ;
    readonly model : string ;
}
let mycar  = new marceedes ("Marcdees","New" , "Siliver")
mycar.power(true);
console.log(mycar);
class surv extends marceedes {
    constructor (color : string , seat : string , alloywheel : boolean){
        super(car,color,alloywheel)
        this.car = car;
        this.color = color;
        this.alloywheel = alloywheel
    }
    car : string 
    color : string ;

}
