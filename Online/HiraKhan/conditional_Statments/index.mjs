import promptSync from 'prompt-sync';
const promptSync = prompt("Enter Here your %age");
let  percentage = prompt("Enter %age");
if(percentage>90){
    console.log("A+")
} else if (percentage>=90) {
    console.log("A")
}else if(percentage>=80){
    console.log("B+")
}
else if(percentage>=70){
    console.log("B")
}
else if(percentage>=60){
    console.log("C")
}
else if(percentage>=50){
    console.log("D")
}
else {
    console.log("Congrats Failed")
}