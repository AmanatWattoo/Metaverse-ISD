import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow("Welcome to Calculator"); // start 
    await sleep();
    rainbow.stop;
    console.log(chalkAnimation.pulse(`
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
welcome();
async function askquestion() {
    const answer = await inquirer
        .prompt([
        //Pass your question here;
        {
            type: 'list',
            name: "Operators",
            message: "Which Operation you Want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            // First Number Input
            type: "number",
            name: "num1",
            message: "Enter First Value \n"
        },
        {
            // second number input
            type: "number",
            name: "num2",
            message: "Enter the Second Value \n"
        }
    ])
        .then((answer) => {
        // objects are called back
        if (answer.Operators == "Addition") {
            console.log(chalk.blueBright(`${answer.num1}+${answer.num2} is = ${answer.num1 + answer.num2}`));
        }
        else if (answer.Operators == "Subtraction") {
            console.log(`the Subtraction of ${answer.num1}-${answer.num2} is = ${answer.num1 - answer.num2}`);
        }
        else if (answer.Operators == "Division") {
            console.log(`the Devision of ${answer.num1}/${answer.num2} is = ${answer.num1 / answer.num2}`);
        }
        else if (answer.Operators == "Multiplication") {
            console.log(`the Subtraction of ${answer.num1}*${answer.num2} is = ${answer.num1 * answer.num2}`);
        }
    });
}
async function startagain() {
    do {
        await askquestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Are you want to continue or stop Press y to continue and Hit any key to stop"
        });
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "Yes");
    {
    }
}
startagain();
