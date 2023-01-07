// document.write("HEllO Arrow Funcations")
// // regular javascrtipt funcation
// function add (x,y){
//     return x+y;
// }
// add(1,3);
// console.log(add)
// // Conversion to Arrow Function
// (x,y)=> x+y;
// // how we call arrow funcation
// let add2 = (x,y)=>x+y;
// console.log(add2(2,3));

const student = {
    firstName: "Amanat",
    lastName: "Ali",
    fullName: function () {return this.firstName+this.lastName}
}
console.log(student.fullName());