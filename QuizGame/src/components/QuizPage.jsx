export default function QuizPage() {
    return (
        <div className="quiz-page">
            <div className="quiz-container">
            <header className="quiz-title">What is The capital of france?</header>
                <div className="answers-grid"> 
                    <button className="answer-btn">A <p>Paris</p></button>
                    <button className="answer-btn">B <p>Berlin</p></button>
                    <button className="answer-btn">C <p>Rome</p></button>
                    <button className="answer-btn">D <p>Madrid</p></button>
                </div>
            </div>
        </div>
    )
}