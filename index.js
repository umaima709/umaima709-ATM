import inquirer from "inquirer";
let myBalance = 20000;
let pinCode = 300;
let pinAnswewr = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin code",
        type: "number"
    }]);
if (pinAnswewr.pin === pinCode) {
    console.log("correct pin code!");
}
else {
    console.log("try again!");
}
let operationAns = await inquirer.prompt([{
        name: "operation",
        message: "select any one",
        type: "list",
        choices: ["withdraw", "checkBalance"]
    }]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([{
            name: "amount",
            message: "Enter your withdraw amount",
            type: "number"
        }]);
    myBalance -= amountAns.amount;
    console.log("Your Balance is " + myBalance);
}
else if (operationAns.operation === "checkBalance") {
    console.log("Your Balance is " + myBalance);
}
else {
    console.log("incorrect code!");
}
