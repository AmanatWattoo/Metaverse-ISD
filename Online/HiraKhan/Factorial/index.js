// Chapter project
const one=  ()=>  console.log('One');
const two=  ()=>  console.log('Two');
const three=()=>{
    console.log("Three");
    one();
    two();
};
const four=()=>{
    console.log("Four");
        setTimeout((one,0));
    }
four();

// let val = 10;
// function tester(val){
//  val += 10;
//  if(val < 100){
//  return tester(val);
//  }
//  return val;
// }
// tester(val);
// console.log(val);
// // function factorial(nr){
// //     // console.log(nr)
// //     if(nr===0){
// //         return 1;
// //     } else{
// //         return nr*factorial(--nr);
// //     }
// // }
// // console.log(factorial(2)); 