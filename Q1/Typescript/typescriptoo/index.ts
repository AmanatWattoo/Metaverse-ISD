abstract class base {
    abstract getName(): string;
printName(){
    console.log("Hello," + this.getName());
    
}
}
// const b = new base()
class Derived extends base {
    getName(): string {
        return "world"
    }
}
const d = new Derived();
d.printName();