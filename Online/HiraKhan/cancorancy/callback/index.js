// function doflexible(excuteStuff){
//     excuteStuff()
//     console.log("doflexible")
// }
// const function1= ()=> console.log("Hello from function1");
// const function2=()=> console.log("Hello from function2");
// doflexible(function2);
// doflexible(function1);
function main(callback){
    callback();
}
const function4=()=> console.log("I am calling back form fucntion 4");
const function5=()=> console.log("I am calling from fucntion 5");
main(function4);
main(function5);