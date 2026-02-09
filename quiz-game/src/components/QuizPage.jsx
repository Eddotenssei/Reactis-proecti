import { useState } from "react";

export default function QuizPage({ questions }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [maxAnswers, setMaxAnswers] = useState(false);

  const currentQuestionData = questions[index];

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    setMaxAnswers(true);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setMaxAnswers(false);
    }, 2000);
  };

  if (index === questions.length) {
    return (
      <div className="quiz-finished">
        🎉 You finished the quiz!
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-question">
        {currentQuestionData.question}
      </h1>

      <div className="answers">
        {currentQuestionData.answers.map((answer, i) => {
          let className = "";

          if (i === selectedAnswerIndex) {
            className =
              i === currentQuestionData.correct
                ? "correct"
                : "wrong";
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswerClick(i)}
              className={className}
              disabled={maxAnswers}
            >
              {answer}
            </button>
          );
        })}
        <h2>timer:</h2>
      </div>
    </div>
  );
}
