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
      firstNumber = '';
      secondNumber = '';
      operator = '';

      panelResult.textContent = '';
      panelDecision.textContent = '';
    }

    if (buttonValue === '=' || secondNumber !== 0) {
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
      }
    }

    if (button.classList.contains('number') || buttonValue === '.') {
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
