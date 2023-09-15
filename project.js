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

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter a your lines(1-3): ");
        const numberOfLines = parseInt(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Please enter a valid line!!!!")
        } else {
            return numberOfLines
        }
    }
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();

