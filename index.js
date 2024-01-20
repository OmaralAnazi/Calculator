const resultEl = document.getElementById('result-el');
const num1El = document.getElementById('num1-el');
const num2El = document.getElementById('num2-el');

function getNumbers() {
    return [parseFloat(num1El.value), parseFloat(num2El.value)];
}

function add() {
    const [num1, num2] = getNumbers();
    resultEl.textContent = num1 + num2;
}

function subtract() {
    const [num1, num2] = getNumbers();
    resultEl.textContent = num1 - num2;
}

function divide() {
    const [num1, num2] = getNumbers();
    resultEl.textContent = num1 / num2;
}

function multiply() {
    const [num1, num2] = getNumbers();
    resultEl.textContent = num1 * num2;
}
