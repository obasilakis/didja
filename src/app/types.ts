type Answer = {
  content: string;
  isCorrect: boolean;
};

export type Question = {
  content: string;
  answers: Answer[];
};
