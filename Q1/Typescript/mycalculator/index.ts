#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import Choice from "inquirer/lib/objects/choice.js";
const time=(ms=3000)=> new Promise ((resolve,reject)=>setTimeout(resolve,ms));
async function start(){
    const title=chalkAnimation.rainbow("Welcome to my calculator");
    await time();
    title.stop();
}
await start();
async function input() {

// input value
const answers : {
    n1:number ,
    n2:number,
    operator:string
}= await inquirer.prompt([
    {
        type:"number",
        name:"n1",
        message:"Enter the first value : \n"
    },
    {
        type:"number",
        name:"n2",
        message:"Enter the second value : \n"
    },
    {
         type:"list",
         name: "operator",
         choices: ["+","-","*","/"],
         message: "Slect the operator : "
    }
])
const {n1,n2,operator}=answers
if(n1 && n2 && operator){
    let result =0;
    if(operator=="+"){
        result=n1+n2;
        console.log(`The sum of two number is ${result}`);
    } 
    else if (operator=="-"){
        result=n1-n2;
        console.log(`The Subtraction of two number is ${result}`);
    }
    else if (operator=="*"){
        result=n1*n2;
        console.log(`The Multiplication of two number is ${result}`);
    }
    else if (operator=="/"){
        result= n1/n2;
        console.log(`The Division of two number is ${result}`);
    }
}
}
async function startagin() { 
    do {
        await input();
        var again   = await inquirer.prompt([
            {
                type: "input",
                name:"restart",
                message:"Would you like to continue press (y) or not press (any key)\n"
            }
        ])
    }
    while(again.restart=="y" || again.restart=="Y" || again.restart== "Yes" || again.restart=="YES" )    
}
await startagin();
const close= (duration= 6000)=> new Promise((resolve,reject)=> setTimeout(resolve,duration)) 
async function finish() {
    const end = await chalkAnimation.karaoke("----------Goodbye------");
    await close();
    end.stop();   
}
finish();



















