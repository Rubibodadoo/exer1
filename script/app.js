function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

document.getElementById('multiplyButton').addEventListener("click", displayProduct);
