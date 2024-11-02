// Home.js
'use client';

import { useActionState } from 'react';
import { fetchQuestions } from './actions';
import ArticleForm from '@/components/ArticleForm';
import Quiz from '@/components/Quiz';
import { ErrorAlert } from '@/components/ui/errorAlert';

export default function Home() {
  const [state, submitAction, isPending] = useActionState(fetchQuestions, null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {!state?.questions && (
          <div className="flex flex-col items-center w-full max-w-md">
            <ArticleForm submitAction={submitAction} isPending={isPending} />
            <ErrorAlert
              className={`rounded ${state?.error ? 'visible' : 'invisible'}`}
              error={state?.error}
            />
          </div>
        )}

        {state?.questions && <Quiz questions={state.questions} />}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}
