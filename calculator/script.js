const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let operator = "";
let prevInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value.match(/[0-9\.]/)) {
            currentInput += value;
            display.textContent = currentInput;
        } else if (value.match(/[\+\-\*\/]/)) {
            prevInput = currentInput;
            operator = value;
            currentInput = "";
        } else if (value === "=") {
            if (prevInput !== "" && currentInput !== "") {
                const result = calculate(parseFloat(prevInput), parseFloat(currentInput), operator);
                display.textContent = result;
                currentInput = result;
                prevInput = "";
                operator = "";
            }
        } else if (value === "C") {
            currentInput = "";
            prevInput = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "←") {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        }
    });
});

function calculate(num1, num2, op) {
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return num2;
    }
}
