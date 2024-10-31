import { parseQuestions } from '@/app/utils/parseQuestions';

const questionString =
  'Q1: What is one key difference between Lambda and Fargate?\n' +
  'A) Programming languages supported\n' +
  'B) Pricing model\n' +
  'C) Execution environment\n' +
  'D) Scalability\n' +
  'Answer: C\n' +
  '\n' +
  'Q2: Which service is more suitable for short-lived, event-driven workloads?\n' +
  'A) Lambda\n' +
  'B) Fargate\n' +
  'C) S3\n' +
  'D) RDS\n' +
  'Answer: A\n' +
  '\n' +
  'Q3: Which of the following is a benefit of using Fargate over Lambda?\n' +
  'A) No need for container management\n' +
  'B) Integrated monitoring tools\n' +
  'C) VPC support\n' +
  'D) Integration with AWS Step Functions\n' +
  'Answer: A';

const questionsJson = [
  {
    content: 'Q1: What is one key difference between Lambda and Fargate?',
    answers: [
      { content: 'Programming languages supported', isCorrect: false },
      { content: 'Pricing model', isCorrect: false },
      { content: 'Execution environment', isCorrect: true },
      { content: 'Scalability', isCorrect: false },
    ],
  },
  {
    content:
      'Q2: Which service is more suitable for short-lived, event-driven workloads?',
    answers: [
      { content: 'Lambda', isCorrect: true },
      { content: 'Fargate', isCorrect: false },
      { content: 'S3', isCorrect: false },
      { content: 'RDS', isCorrect: false },
    ],
  },
  {
    content:
      'Q3: Which of the following is a benefit of using Fargate over Lambda?',
    answers: [
      { content: 'No need for container management', isCorrect: true },
      { content: 'Integrated monitoring tools', isCorrect: false },
      { content: 'VPC support', isCorrect: false },
      {
        content: 'Integration with AWS Step Functions',
        isCorrect: false,
      },
    ],
  },
];

describe('parseQuestions', () => {
  it('should correctly parse question string into JSON format', () => {
    const result = parseQuestions(questionString);
    expect(result).toEqual(questionsJson);
  });
});
