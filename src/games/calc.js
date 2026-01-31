import runGame from '../index.js';
import crypto from 'crypto';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const randomBuffer = new Uint32Array(3);
  crypto.getRandomValues(randomBuffer);

  const num1 = randomBuffer[0] % 100;  // Число от 0 до 99
  const num2 = randomBuffer[1] % 100;  // Число от 0 до 99

  const operators = ['+', '-', '*'];
  const operator = operators[randomBuffer[2] % operators.length];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

const playCalc = () => {
  const description = 'What is the result of the expression?';
  runGame(description, generateRound);
};
export default playCalc;
