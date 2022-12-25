import inquirer from "inquirer";
import chalkanimation from "chalk-animation";
const wait = (ms = 5000) => new Promise((resovle, reject) => setTimeout(resovle, ms));
async function welcom() {
    const htitle = chalkanimation.pulse("Welcome to ATM Machine");
    await wait();
    htitle.stop();
}
await welcom();
//user loging in ...
let id = await inquirer.prompt([
    {
        type: "input",
        name: "usrid",
        message: "Enter your id here",
    },
    {
        type: "password",
        name: "usrpin",
        message: "Enter your pin Here: "
    },
    {
        type: "list",
        name: "accounttype",
        choices: ["Current", "Savings"],
        message: "Slect the Account Type"
    },
    {
        type: "list",
        name: "options",
        choices: ["cash Withdrawl", "Fund Transfer", "Bill Payments"],
        message: "Select the Opetions to performe the task",
        when(id) {
            return id.accounttype;
        }
    },
    {
        type: "input",
        name: "amount",
        message: "Enter the amount to with draw",
        when(id) {
            return id.Opetions == "cash Withdrawl";
        }
    },
    {
        type: "list",
        name: "withrwal",
        choices: ["500", "1000", "5000", "10000", "20000"],
        when(id) {
            return id.options == "cash Withdrawl";
        },
        message: "Slect the amount to withdraw"
    },
    {
        type: "list",
        name: "fundtransfer",
        choices: ["UBL", "HBL", "Jazzcash", "Easypaisa", "Mezaan"],
        when(id) {
            return id.options == "Fund Transfer";
        },
        message: "Slect the name of to transfer the amount"
    },
    {
        type: "input",
        name: "tfract",
        message: "Please enter here account no with branch code",
        when(id) {
            return id.fundtransfer;
        },
        validate: (answer) => {
            if (id.tfrac.length < 10) {
                console.log("Invalid account");
            }
            return true;
        }
    },
    {
        type: "list",
        name: "utalitybill",
        choices: ["SNGPL", "Electricity", "Postpaid", "FBR", "Telivision"],
        when(id) {
            return id.options == "Bill Payments";
        },
        message: "Slect the Bill Type",
    },
]);
console.log(id);
