"use strict";
let userExpression = ""; //global variable
const userInput = document.getElementById("userInput");
const output = document.getElementById("output");
const errorContainer = document.getElementsByClassName("error-container")[0];

function calcad(value) {
  userExpression = userExpression + value;
  userInput.value = userExpression;
}
function removech() {
  userExpression = userExpression.substring(0, userExpression.length - 1);
  userInput.value = userExpression;
}
function execm() {
  if (userExpression.length == 0 || userExpression == "") {
    errorContainer.innerHTML = "Error: Need an input";
    errorContainer.style.visibility = "visible";
    removeError();
    return;
  }
  try {
    let result = eval(userExpression);
    output.value = result;
  } catch {
    errorContainer.innerHTML = "Error: Invalid Input";
    errorContainer.style.visibility = "visible";
    removeError();
  }
}
function reset() {
  userInput.value = "";
  output.value = "";
  userExpression = "";
}

function removeError() {
  setTimeout(() => {
    errorContainer.style.visibility = "hidden";
  }, 2000);
}
