const buttonArray = [
    {"buttonID": "zero", "symbol": "0"},
    {"buttonID": "one", "symbol": "1"},
    {"buttonID": "two", "symbol": "2"},
    {"buttonID": "three", "symbol": "3"},
    {"buttonID": "four", "symbol": "4"},
    {"buttonID": "five", "symbol": "5"},
    {"buttonID": "six", "symbol": "6"},
    {"buttonID": "seven", "symbol": "7"},
    {"buttonID": "eight", "symbol": "8"},
    {"buttonID": "nine", "symbol": "9"},
    {"buttonID": "add", "symbol": "+"},
    {"buttonID": "subtract", "symbol": "-"},
    {"buttonID": "multiply", "symbol": "X"},
    {"buttonID": "divide", "symbol": "/"},
    {"buttonID": "equal", "symbol": "="},
    {"buttonID": "decimal", "symbol": "."}
]
createCalcButtons();

function createCalcButtons () {
    const buttonArea = document.getElementById("calcButtons");
    for (button of buttonArray) {
        newButton = document.createElement("div");
        newButton.setAttribute("Id", `${button.buttonID}`)
        newButton.textContent = button.symbol;
        console.log(newButton);
        buttonArea.appendChild(newButton);
    }
}