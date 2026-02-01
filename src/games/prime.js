import runGame from '../index.js'
import crypto from 'crypto'

const isPrime = number => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const number = crypto.randomInt(1, 101)

  const question = String(number)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const playPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runGame(description, generateRound)
}

export default playPrime
