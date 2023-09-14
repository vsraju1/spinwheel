// 1. Taking deposit amount
// 2. Selecting the lines of bet
// 3. Collect the money
// 4. Spin the wheel
// 5. Check if the user won
// 6. Give theeir winning amount
// 7. Play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Please enter a valid deposit amount!!!!")
        } else {
            return numberDepositAmount
        }
    }
}

const depositAmount = deposit();
console.log(depositAmount)
