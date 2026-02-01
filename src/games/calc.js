import runGame from '../index.js'
import crypto from 'crypto'

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = crypto.randomInt(0, 100)
  const num2 = crypto.randomInt(0, 100)

  const operators = ['+', '-', '*']
  const operatorIndex = crypto.randomInt(0, operators.length)
  const operator = operators[operatorIndex]

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return [question, correctAnswer]
}

const playCalc = () => {
  const description = 'What is the result of the expression?'
  runGame(description, generateRound)
}

export default playCalc
