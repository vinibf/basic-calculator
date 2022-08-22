const lastText = document.querySelector(".display__last-text");
const mainText = document.querySelector(".display__main-text");

//const btnNodes = document.querySelectorAll(".btn");

const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const expressionElements = document.querySelectorAll(".expression-element");

clearButton.onclick = (e) => {
  mainText.textContent = "";
  lastText.textContent = "";
};

deleteButton.onclick = (e) => {
  const mathExpression = mainText.textContent;
  if (mathExpression.length > 0) {
    mainText.textContent = mathExpression.substring(
      0,
      mathExpression.length - 1
    );
  }
};

const convertExpression = (expression) => {
  return expression.replaceAll("x", "*");
};

equalButton.onclick = (e) => {
  let result = null;
  const mathExpression = mainText.textContent;

  if (mathExpression.length > 0) {
    try {
      result = eval(convertExpression(mathExpression));
    } catch (error) {
      console.error(error);
      alert(error);
      return;
    }
  }

  if (lastText.textContent !== mathExpression) {
    lastText.textContent = mathExpression;
    mainText.textContent = result.toString();
  }
};

const handleAddElement = (e) => {
  mainText.textContent += e.target.textContent;
};

for (const element of expressionElements) {
  element.onclick = handleAddElement;
}

// const buttonMapping = function (btnType) {
//   console.log(btnType);
//   mainText.textContent = btnType;
//   if (isNaN(btnType)) {
//     switch (btnType) {
//       case "+":
//         console.log("É soma mesmo");
//         break;
//       default:
//         console.log("Ih, falhou!");
//     }
//   }

//   mainText.text;
// };

// const handleClick = function (e) {
//   const btnText = e.target.textContent;
//   buttonMapping(btnText);
// };

// for (const btn of btnNodes) {
//   btn.onclick = handleClick;
// }
