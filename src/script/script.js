let buttons = document.querySelectorAll('.calculator__button'),
  panelDecision = document.querySelector('.calculator__panel-decision'),
  panelResult = document.querySelector('.calculator__panel-result');

let firstNumber = '',
  secondNumber = '',
  operator = '';

for (let button of buttons) {
  button.onclick = () => {
    let buttonValue = button.textContent;

    if (buttonValue === 'C') {
      panelResult.textContent = '';
      panelDecision.textContent = '';

      resetVars();
    }

    if (buttonValue === '=' && secondNumber.length !== 0) {
      panelDecision.textContent = panelResult.textContent;
      switch (operator) {
        case '+':
          panelResult.textContent = +firstNumber + +secondNumber;
          break;
        case '-':
          panelResult.textContent = firstNumber - secondNumber;
          break;
        case '×':
          panelResult.textContent = firstNumber * secondNumber;
          break;
        case '÷':
          panelResult.textContent = firstNumber / secondNumber;
          break;
        case '%':
          panelResult.textContent = (firstNumber / 100) * secondNumber;
          break;
      }
      resetVars();
    }

    if (buttonValue === '.') {
      let number = operator.length > 0 ? secondNumber : firstNumber;

      if (number.length === 0 || number.includes('.')) {
        return;
      }

      if (operator.length > 0) {
        secondNumber += buttonValue;
      } else {
        firstNumber += buttonValue;
      }
    }

    if (button.classList.contains('number')) {
      if (operator.length > 0) {
        secondNumber += buttonValue;
      } else {
        firstNumber += buttonValue;
      }
    }

    if (button.classList.contains('operator')) {
      if (firstNumber.length === 0 || secondNumber.length !== 0) {
        return;
      } else {
        operator = buttonValue;
      }
    }

    panelResult.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  };
}

function resetVars() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
}
