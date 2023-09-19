// Function to display the sum of two numbers
function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').textContent);
  let secondNum = Number(document.getElementById('secondNum').textContent);
  let total = firstNum + secondNum;
  document.getElementById("answerAdd").textContent = `${firstNum} + ${secondNum} equals to ${total}`;
}

// Function to subtract two numbers
function subtractNumbers() {
  let firstNum = Number(document.getElementById('firstNum').textContent);
  let secondNum = Number(document.getElementById('secondNum').textContent);
  let result = firstNum - secondNum;
  document.getElementById("answerSubtract").textContent = `${firstNum} - ${secondNum} equals to ${result}`;
}

// Function to multiply two numbers
function multiplyNumbers() {
  let firstNum = Number(document.getElementById('firstNum').textContent);
  let secondNum = Number(document.getElementById('secondNum').textContent);
  let product = firstNum * secondNum;
  document.getElementById("answerMultiply").textContent = `${firstNum} * ${secondNum} equals to ${product}`;
}

// Add click event listeners to the buttons
document.getElementById('addButton').addEventListener("click", displaySum);
document.getElementById('subtractButton').addEventListener("click", subtractNumbers);
document.getElementById('multiplyButton').addEventListener("click", multiplyNumbers);
