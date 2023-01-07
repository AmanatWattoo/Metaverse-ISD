// const allowedPassword=["Ahad","Batool","Moula"];
// function checkPassword(password){
//     return allowedPassword.includes(password)
// }
// function auth(password){
//     return new Promise(reslove,reject)=>{
//         if checkPassword((password)){
//             reslove({
//                 status:true
//             })
//         }
//     }
// }
let counter = 0;
function counter1(value){
    return new Promise (resolve=>{
        setTimeout(()=>{
            counter++
            resolve(`x value ${value} counter: ${counter}`)
        },10000)
    })
}
async function asyncFunction(value){
    console.log(`ready ${value} counter: ${counter}`);
    const resolvedvalue=await counter1(value);
    console.log(resolvedvalue);
}
for(let i=0;i<4;i++){
    asyncFunction(i);
}