function greet(fullname){
console.log(`Hello ${fullname[0] + ' ' + fullname[1]}`);
}
function second (username, callback){
const name = username.split (" ");
callback(name);
}
second("Amanat Ali", greet)
//promises