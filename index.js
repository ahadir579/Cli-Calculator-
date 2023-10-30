#!usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUBTRACT"] = "Subtraction";
    Operator["MULTIPLY"] = "Multiplication";
    Operator["DIVIDE"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer_1.default.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    console.log(chalk_1.default.overline.underline.blue.bold.italic(`This is a simple CLI command Based Calculator:`));
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "Select an operation:",
            choices: Object.values(Operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    if (selectedOperator === Operator.ADD) {
        result = num1 + num2;
        console.log(chalk_1.default.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk_1.default.yellow.bgBlack(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk_1.default.blue.bgYellowBright(`Result is : ${result}`));
    }
    else if (selectedOperator === Operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk_1.default.blue.bgYellowBright(`Result is : ${result}`));
    }
}
exports.default = main;
main();
