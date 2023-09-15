// 1. Taking deposit amount
// 2. Selecting the lines of bet
// 3. Collect the money
// 4. Spin the wheel
// 5. Check if the user won
// 6. Give theeir winning amount
// 7. Play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}

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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
            // console.log(symbols)
        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const saelectedSymbol = reelSymbols[randomIndex];
            reels[i].push(saelectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }
    }

    return rows
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;

            }
        }

        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]]
        }
    }

    return winnings;
}

const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $"+balance)
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log(`You won, $${winnings.toString()}`);
        if (balance <= 0){
            console.log("You ran out of money!");
            break 
        }

        const playAgain = prompt("Do you want to play again (y/n)? ");

        if (playAgain !="y") break;
    }
}

game();




