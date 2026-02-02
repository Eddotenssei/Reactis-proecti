import { QUIZ_DATA } from "../quiz-questions"

export default function QuizPage() {
  const questionData = QUIZ_DATA[0]
  
  return (
    <>
      <h1>{questionData.question}</h1>
      {questionData.answers.map((item)=>{
        return <p>{item}</p>;
      })}
    </>
  );
}
