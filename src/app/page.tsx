'use client';

import { useActionState } from 'react';
import { fetchQuestions } from './actions';

export default function Home() {
  const [state, submitAction] = useActionState(fetchQuestions, null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-80 bg-gray-600 p-8 rounded-md">
          <h1>Test your focus</h1>
          <form className="flex flex-col m-1" action={submitAction}>
            <label>Paste Article URL</label>
            <input
              className="outline-none bg-gray-800 rounded"
              type="text"
              name="url"
            />
            <label>Or Paste Article Text</label>
            <textarea
              className="outline-none bg-gray-800 rounded"
              name="article"
            />
            <button type="submit">Test</button>
            {state && <p>{state}</p>}
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </div>
  );
}
