import runGame from '../index.js'
import crypto from 'crypto'

// Функция для нахождения НОД (алгоритм Евклида)
const findGCD = (a, b) => {
  let num1 = a
  let num2 = b

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }

  return num1
}

const generateRound = () => {
  const num1 = crypto.randomInt(1, 101) // от 1 до 100
  const num2 = crypto.randomInt(1, 101) // от 1 до 100

  const question = `${num1} ${num2}`
  const correctAnswer = String(findGCD(num1, num2))

  return [question, correctAnswer]
}

const playGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.'
  runGame(description, generateRound)
}

export default playGcd
