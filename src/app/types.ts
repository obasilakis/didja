type Answer = {
  content: string;
  isCorrect: boolean;
};

export type Question = {
  content: string;
  answers: Answer[];
};

export type ErrorType = {
  title: string;
  description: string;
};

export type QuestionsResponse = {
  questions?: Question[];
  error?: ErrorType;
};
