function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("Productanswer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}

function displayDifference() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("Differenceanswer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;


document.getElementById('multiplyButton').addEventListener("click", displayProduct);
document.getElementById('subtractButton').addEventListener("click", displayDifference);
