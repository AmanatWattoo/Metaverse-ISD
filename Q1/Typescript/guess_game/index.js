#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 5000) => new Promise((resolve, reject) => setTimeout(resolve, ms));
async function title() {
    const htitle = chalkAnimation.rainbow("Welcome to Guess No Game");
    await sleep();
    htitle.stop();
}
await title();
const duration = (ms = 6000) => new Promise((resolve, reject) => setTimeout(resolve, ms));
async function play() {
    const shtitle = chalkAnimation.karaoke("Lets Play!!");
    await duration();
    shtitle.stop();
}
await play();
let playerlife = 4;
async function ask() {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    do {
        console.log(chalk.yellowBright(`Remaining Player life = ${playerlife}`));
        playerlife--;
        var que = await inquirer
            .prompt([
            {
                type: "number",
                name: "input_num",
                message: "Enter number 1-10",
                validate: (answer) => {
                    if (isNaN(answer)) {
                        return chalk.red(`You've entered the wrong type of data please insert number only`);
                    }
                    return true;
                }
            }
        ]);
        if (que.input_num == randomNum) {
            console.log(chalk.green(`congrats!! you've guess the number`));
        }
        else if (que.input_num > randomNum) {
            console.log(chalk.red(`Entered value ${que.input_num} is greater than guess number, try again`));
        }
        else if (que.input_num < randomNum) {
            console.log(chalk.red(`Entered number number ${que.input_num} is less than guess number`));
        }
    } while (playerlife > 0);
    if (que.input_num == randomNum || playerlife == 0) {
        console.log(chalk.redBright("Game Over"));
    }
}
async function startagin() {
    do {
        await ask();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Would you like to continue press (y) or not press (any key)\n"
            }
        ]);
    } while (again.restart == "y" || again.restart == "Y" || again.restart == "Yes" || again.restart == "YES");
}
await startagin();
const close = (duration = 6000) => new Promise((resolve, reject) => setTimeout(resolve, duration));
async function finish() {
    const end = await chalkAnimation.karaoke("----------Sir Zia Khan is Great ------");
    await close();
    end.stop();
}
finish();
