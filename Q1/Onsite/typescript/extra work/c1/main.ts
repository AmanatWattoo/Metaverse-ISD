// // // // // let mesg = "hi man";
// // // // // console.log( mesg);
// // // // let msg="hi boss";
// // // // msg=6;
// // // let a:string="Pak"
// // // let b:number=5;
// // // let loc:boolean=true;
// // // let 
// // let a:number=6;
// // let b:string="Hello Pakistan";
// // let c:boolean=true;
// // let z;
// // if(true){
// //     const z=4;

// // } else{
// //     const z= "me"
// // }
// // console.log("const:",z);
// import a from "./one";
// import { b,c as d } from "./two";
// console.log("Sum is =",a+d);
import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
