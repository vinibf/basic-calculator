const mainText = document.querySelector(".display__main-text");
const lastText = document.querySelector(".display__last-text");

const btnNodes = document.querySelectorAll(".btn");

const buttonMapping = function (btnType) {
  console.log(btnType);
  mainText.textContent = btnType;
  if (isNaN(btnType)) {
    switch (btnType) {
      case "+":
        console.log("É soma mesmo");
        break;
      default:
        console.log("Ih, falhou!");
    }
  }

  mainText.text;
};

const handleClick = function (e) {
  const btnText = e.target.textContent;
  buttonMapping(btnText);
};

for (const btn of btnNodes) {
  btn.onclick = handleClick;
}
