import { Question } from '@/app/types';

export function parseQuestions(questionString: string): Question[] {
  const answerMapping = { A: 1, B: 2, C: 3, D: 4 };

  const splitQuestions = questionString
    ?.split('\n\n')
    ?.map((question) => question.split('\n'));

  return splitQuestions!.map((item) => {
    const questionContent = item[0];
    const correctAnswerLetter = item[item.length - 1]
      .replace('Answer: ', '')
      .trim();
    const correctAnswerIndex = answerMapping[correctAnswerLetter] - 1;

    const answers = item.slice(1, -1).map((answer, index) => ({
      content: answer.slice(3).trim(),
      isCorrect: index === correctAnswerIndex,
    }));

    return {
      content: questionContent,
      answers,
    };
  });
}
