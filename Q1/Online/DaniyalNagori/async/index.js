// // console.log("helloo");
// console.log("First");    
// setTimeout(()=>{
//         console.log("its second")
//     },3000);
// console.log("Its 3rd");
const loginuser=(email,pswd,callback)=>{
setTimeout(()=>{
    callback(email);
},2000)
}
const getuserVedios= (email,cb)=> {
    setTimeout((cb) => {
        cb(["Vedios", "Cartton", "Scifiy"])
    }, 3000);
}
loginuser("Amanat","Ali",(email)=>{
    console.log(email)
getuserVedios(email,(cb)=>{
    console.log("Ready to use")
})
});