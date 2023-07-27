/** Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */


function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Test the calculator function
const number1 = 5;
const number2 = 2;
let operator = '+';
let result = calculator(number1, operator, number2);
console.log(number1, operator, number2, " = ", result);

const number3 = 25;
const number4 = 5;
operator = '/';
result = calculator(number1, operator, number2);
console.log(number1, operator, number2, " = ", result);
