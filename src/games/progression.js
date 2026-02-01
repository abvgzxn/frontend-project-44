import runGame from '../index.js';
import crypto from 'crypto';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const length = crypto.randomInt(5, 11);

  const start = crypto.randomInt(1, 50);
  const step = crypto.randomInt(1, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = crypto.randomInt(0, length);

  const correctAnswer = String(progression[hiddenIndex]);

  const questionProgression = [...progression];
  questionProgression[hiddenIndex] = '..';

  const question = questionProgression.join(' ');

  return [question, correctAnswer];
};

const playProgression = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, generateRound);
};

export default playProgression;
