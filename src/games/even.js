import runGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const playEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, generateRound);
};

export default playEven;
