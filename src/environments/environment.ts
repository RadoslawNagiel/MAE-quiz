import { shuffleArray } from '../app/shared/functions/shuffle-array';
import { Environment } from '../app/shared/types/interfaces';

export const environment: Environment = {
  redirectHomeTimeoutDuration: 5 * 60 * 1000,

  defaultLanguage: `pl`,
  availableLanguages: [
    {
      langKey: `pl`,
      value: `pl`,
    },
    {
      langKey: `en`,
      value: `en`,
    },
  ],

  quizQuestions: [
    `question1`,
    `question2`,
    `question3`,
    `question4`,
    `question5`,
  ].map((key) => {
    return {
      key,
      translationKey: `quiz.${key}.value`,
      answers: shuffleArray([
        `rightAnswer`,
        `wrongAnswer1`,
        `wrongAnswer2`,
        `wrongAnswer3`,
      ]).map((answerKey) => {
        return {
          key: answerKey,
          translationKey: `quiz.${key}.${answerKey}`,
        };
      }),
      correctAnswerKey: `rightAnswer`,
    };
  }),

  resultsThresholds: [
    {
      minPercentage: 0,
      maxPercentage: 50,
      translationKey: `results.text.bad`,
    },
    {
      minPercentage: 51,
      maxPercentage: 80,
      translationKey: `results.text.average`,
    },
    {
      minPercentage: 81,
      maxPercentage: 100,
      translationKey: `results.text.good`,
    },
  ],
};
