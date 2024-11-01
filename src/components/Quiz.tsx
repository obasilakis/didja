import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleChange = (questionIndex, value) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, qIdx) => {
      const userAnswerIndex = answers[qIdx];
      if (
        userAnswerIndex !== undefined &&
        question.answers[userAnswerIndex]?.isCorrect
      ) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, qIdx) => {
        const userAnswerIndex = answers[qIdx];
        const userAnswer = question.answers[userAnswerIndex];
        const correctAnswer = question.answers.find(
          (answer) => answer.isCorrect,
        );

        return (
          <Card key={qIdx} className="mb-4 p-4 dark">
            <h3 className="text-lg font-semibold mb-4">{question.content}</h3>
            <RadioGroup
              className="my-2"
              value={userAnswerIndex}
              onValueChange={(value) => handleChange(qIdx, value)}
            >
              {question.answers.map((answer, aIdx) => (
                <div key={aIdx} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={String(aIdx)}
                    id={`q${qIdx}a${aIdx}`}
                    disabled={showResults}
                  />
                  <label htmlFor={`q${qIdx}a${aIdx}`} className="text-sm">
                    {answer.content}
                  </label>
                </div>
              ))}
            </RadioGroup>
            {showResults && (
              <div className="mt-4 flex items-center space-x-2">
                {userAnswer?.isCorrect ? (
                  <p className="font-semibold text-orange-500">✔️ Correct</p>
                ) : (
                  <>
                    <p className="font-semibold text-orange-500">
                      ✖️ Incorrect
                    </p>
                    <p className="text-sm">
                      Correct answer: <strong>{correctAnswer.content}</strong>
                    </p>
                  </>
                )}
              </div>
            )}
          </Card>
        );
      })}
      {!showResults ? (
        <div className="flex justify-center">
          <Button type="submit" className="mt-4 rounded">
            Reveal Score
          </Button>
        </div>
      ) : (
        <Card className="mt-4 p-4 dark">
          <h2 className="text-xl font-bold text-center">
            Score: {calculateScore()} / {questions.length}
          </h2>
        </Card>
      )}
    </form>
  );
}

export default Quiz;
