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
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Please enter a valid line!!!!")
        } else {
            return numberOfLines
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter a your bet per line: ");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Please enter a valid bet amount!!!!")
        } else {
            return numberBet
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const numberBet = getBet(balance, numberOfLines);

