'use server';

import OpenAI from 'openai';
import { openAiApiKey } from './config';
import { parseQuestions } from '@/app/utils/parseQuestions';

export async function fetchQuestions(
  previousState: unknown,
  formData: FormData,
) {
  const openai = new OpenAI({
    apiKey: openAiApiKey,
  });

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      {
        role: 'user',
        content: `
            Generate 10 multiple-choice questions (with 4 answer options each) to test understanding of the following article:
            ${formData.get('url')}
            Please provide the questions in this format:
            Q1: <question>
            A) <option1>
            B) <option2>
            C) <option3>
            D) <option4>
            Answer: <correct answer letter>
          `,
      },
    ],
  });

  return parseQuestions(completion.choices[0].message.content);
}
