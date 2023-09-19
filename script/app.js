// Function to display the sum of two numbers
function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').textContent);
  let secondNum = Number(document.getElementById('secondNum').textContent);
  let total = firstNum + secondNum;
  document.getElementById("answer").textContent = `${firstNum} + ${secondNum} equals to ${total}`;
}

// Function to subtract two numbers
function subtractNumbers() {
  let firstNum = Number(document.getElementById('firstNum').textContent);
  let secondNum = Number(document.getElementById('secondNum').textContent);
  let result = firstNum - secondNum;
  document.getElementById("answer").textContent = `${firstNum} - ${secondNum} equals to ${result}`;
}

// Add click event listeners to the buttons
document.getElementById('multiplyButton').addEventListener("click", displaySum);
document.getElementById('subtractButton').addEventListener("click", subtractNumbers);
