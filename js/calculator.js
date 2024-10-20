/*==========

//////////////////////////////////////////////////////
final author start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
final author end
//////////////////////////////////////////////////////

==========*/



let display = document.getElementById('display'); // display element
        let currentOperation = null; // current operation
        let firstOperand = ''; // first operand
        let secondOperand = ''; // second operand
        let isSecondOperand = false; // flag for second operand

        // function to append number to display
        function appendNumber(number) {
            if (isSecondOperand) {
                secondOperand += number;
            } else {
                firstOperand += number;
            }
            display.value += number;
        }

        // function to set the operation
        function setOperation(operation) {
            if (currentOperation && isSecondOperand) {
                calculateResult(); // calculate result if there's already an operation
            }
            currentOperation = operation;
            display.value += operation;
            isSecondOperand = true;
        }

        // function to calculate the result
        function calculateResult() {
            if (currentOperation && isSecondOperand && secondOperand) {
                const expression = firstOperand + currentOperation + secondOperand;
                const result = eval(expression); // evaluate the expression
                display.value = `${expression}=${result}`;
                firstOperand = result.toString();
                secondOperand = '';
                currentOperation = null;
                isSecondOperand = false;
            }
        }

        // function to calculate scientific functions
        function calculateFunction(func) {
            let value = parseFloat(display.value);
            let result;
            switch (func) {
                case 'sqrt':
                    result = Math.sqrt(value);
                    break;
                case 'log':
                    result = Math.log10(value);
                    break;
                case 'ln':
                    result = Math.log(value);
                    break;
                case 'sin':
                    result = Math.sin(value);
                    break;
                case 'cos':
                    result = Math.cos(value);
                    break;
                case 'tan':
                    result = Math.tan(value);
                    break;
                case 'exp':
                    result = Math.exp(value);
                    break;
                default:
                    result = value;
            }
            display.value = `${func}(${value})=${result}`;
            firstOperand = result.toString();
            secondOperand = '';
            currentOperation = null;
            isSecondOperand = false;
        }

        // function to calculate percentage
        function calculatePercentage() {
            let value = parseFloat(display.value);
            let result = value / 100;
            display.value = `${value}%=${result}`;
            firstOperand = result.toString();
            secondOperand = '';
            currentOperation = null;
            isSecondOperand = false;
        }

        // function to clear the display
        function clearDisplay() {
            display.value = '';
            firstOperand = '';
            secondOperand = '';
            currentOperation = null;
            isSecondOperand = false;
        }

        // function to clear the last entry
        function clearLastEntry() {
            if (isSecondOperand && secondOperand) {
                secondOperand = secondOperand.slice(0, -1);
                display.value = display.value.slice(0, -1);
            } else if (!isSecondOperand && firstOperand) {
                firstOperand = firstOperand.slice(0, -1);
                display.value = display.value.slice(0, -1);
            } else if (isSecondOperand && !secondOperand) {
                currentOperation = null;
                isSecondOperand = false;
                display.value = display.value.slice(0, -1);
            }
        }



