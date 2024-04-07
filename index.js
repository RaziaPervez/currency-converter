#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    CNY: 7.23,
    KRW: 1351.44,
    PKR: 280,
};
console.log(chalk.bgBlue("\n\tWelcome to currency converter \n"));
const user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'CNY', 'KRW', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'CNY', 'KRW', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number'
    }
]);
const fromAmount = currency[user_answer.from];
const toAmount = currency[user_answer.to];
const amount = user_answer.amount;
const baseAmount = Math.floor(amount / fromAmount);
const convertedAmount = baseAmount * toAmount;
console.log(chalk.green(`Converted Amount:${convertedAmount}`));
