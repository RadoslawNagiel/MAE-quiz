export interface Environment {
  redirectHomeTimeoutDuration: number;
  defaultLanguage: string;
  availableLanguages: {
    langKey: string;
    value: string;
  }[];
  quizQuestions: Question[];
  resultsThresholds: ResultsThreshold[];
}

export interface Question {
  key: string;
  translationKey: string;
  answers: {
    key: string;
    translationKey: string;
  }[];
  correctAnswerKey: string;
  selectedAnswerKey?: string;
}

export interface ResultsThreshold {
  minPercentage: number;
  maxPercentage: number;
  translationKey: string;
}
