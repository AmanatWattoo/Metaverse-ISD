const userLoged=(email,passwprd,cb)=>{
    setTimeout(() => {
        cb("Amanat");
    }, 2000);
}
userLoged("Wattoo Brother@gmail.com","123456",(name)=>{
console.log("Logged User Is ", email);
})