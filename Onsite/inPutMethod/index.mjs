import PromptSync from "prompt-sync"
let prompt=PromptSync();
let name=[];
for(let i=0; i<5;i++){
let x=prompt("Enter Your name Here :     ");
    name.push(x);
}
console.log(name);