import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";
import Choice from "inquirer/lib/objects/choice.js";

const sleep=()=>{
    return new Promise((res)=>{
        setTimeout(res,3000)
    })
}

async function welcome(){
    let rainbow=chalkAnimation.rainbow("Welcome to Calculator"); // start 
    await sleep();
    rainbow.stop;
    console.log(chalk.green(`
_____________________
|  ___Amanat Ali ___  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

( Amanat Ali Calculator)
`));
console.log(`${rainbow}`); 
}

 await welcome();
async function askquestion() {
    const answer
    = await inquirer
    .prompt([
        //Pass your question here;
        {
            type: 'list',
            name: "Operators",
            message: "Which Operation you Want to perform? \n",
            choices: ["Addition","Subtraction","Multiplication","Division"]
        },
        {
            // First Number Input
            type:"number",
            name: "num1",
            message: "Enter First Value \n"
        },
        {
            // second number input
            type: "number",
            name: "num2",
            message:"Enter the Second Value \n"
        }
 
    ]);

    if
    (answer.Operators=="Addition"){
        console.log(chalk.green (`${answer.num1}+${answer.num2} is = ${answer.num1 + answer.num2}`))
    }
    else if 
    (answer.Operators=="Subtraction"){
        console.log(chalk.yellow(`the Subtraction of ${answer.num1}-${answer.num2} is = ${answer.num1 - answer.num2}`))
    }
    else if
     (answer.Operators=="Division"){
        console.log(chalk.cyan(`the Devision of ${answer.num1}/${answer.num2} is = ${answer.num1 / answer.num2}`))
    }
    else if
    (answer.Operators=="Multiplication"){
        console.log(chalk.blue(`the Subtraction of ${answer.num1}*${answer.num2} is = ${answer.num1 * answer.num2}`))
    }
    }

async function startagain() {
    do{
        await askquestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Are you want to continue or stop Press y to continue and Hit any key to stop"
        })
    } while (again.restart =="y"|| again.restart=="Y"||again.restart=="yes" || again.restart=="Yes" ) {
        
    }
    
}
startagain();