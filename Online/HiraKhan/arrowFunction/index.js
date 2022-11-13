
// import PromptSync from "prompt-sync";
// let prompt=PromptSync();
// // // function flexibleStaff(member){
// // //     member();
// // //     //console.log("I am a member");
// // // }
// // // const function1=()=> console.log("Hello from 1");
// // // const function2=()=> console.log("Hello form 2");
// // // for(let i=0; i<6; i++){
// // // flexibleStaff(function2);
// // // flexibleStaff(function1);
// // // }; 
// // let num=prompt("Enter the value for table of Number:");
// // for(let i=1; i<=10; i++){
// //     table=num*i;
// //     console.log(num," x ",' ', i,'=', table);
// // }

import PromptSync from "prompt-sync";
let prompt=PromptSync();
let value=prompt("Table o numbr:");

//const value=7;
for(i=1;i<11;i++){
    console.log(value*i);
}