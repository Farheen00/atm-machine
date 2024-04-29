#! /usr/bin/env node
import inquirer from "inquirer";
let totalBalance = 10000;
const pinNumber = 1234;
console.log("\n \t WELCOME \n \t");
console.log("Insert your card");
let pinEntered = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number"
    }
]);
if (pinEntered.pin == pinNumber) {
    let atmQuestions = await inquirer.prompt([
        { name: "accountType",
            type: "list",
            message: "Select your Account Type",
            choices: ["Current Account", "PLS Saving Account"]
        },
        {
            name: "transactionMethod",
            type: "list",
            message: "Select your transaction method",
            choices: ["Cash Withdrawl",
                "Fast Cash",
                "Balance Inquiry"
            ]
        }
    ]);
    if (atmQuestions.transactionMethod == "Cash Withdrawl") {
        let cashWithdrawlAmount = await inquirer.prompt([
            {
                name: "cashWithdraw",
                type: "number",
                message: "Enter the amount you want to withdraw"
            }
        ]);
        if (totalBalance >= cashWithdrawlAmount.cashWithdraw) {
            totalBalance -= cashWithdrawlAmount.cashWithdraw;
            console.log(`Your Total Balance is : ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (atmQuestions.transactionMethod == "Fast Cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "Select the amount you want to withdraw",
                choices: ["1000", "2000", "5000", "10000", "20000"]
            }
        ]);
        if (totalBalance >= fastCashAmount.fastCash) {
            totalBalance -= fastCashAmount.fastCash;
            console.log(`Your Total Balance is : ${totalBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (atmQuestions.transactionMethod == "Balance Inquiry") {
        console.log(`Your balance is ${totalBalance}`);
    }
    console.log("Take your card");
    console.log("Thankyou for your valuable time.");
}
else {
    console.log("Incorrect pin number");
}
