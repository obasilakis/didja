'use server';

import OpenAI from 'openai';
import { openAiApiKey } from './config';
import { parseQuestions } from '@/app/utils/parseQuestions';
import { QuestionsResponse } from '@/app/types';

export async function fetchQuestions(
  previousState: QuestionsResponse | null,
  formData: FormData,
): Promise<QuestionsResponse> {
  const articleOrUrl = formData.get('url') ?? formData.get('article');

  const openai = new OpenAI({
    apiKey: openAiApiKey,
  });

  let completion;
  try {
    completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        {
          role: 'user',
          content: `
            Generate 10 multiple-choice questions (with 4 answer options each) to test understanding of the following article:
            ${articleOrUrl}
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
  } catch (e) {
    console.error(e);
    return {
      error: {
        title: "Hmm... Something's Not Right",
        description:
          "We couldn't generate the questions this time. Please try again in a moment.",
      },
    };
  }
  return { questions: parseQuestions(completion.choices[0].message.content!) };
}
