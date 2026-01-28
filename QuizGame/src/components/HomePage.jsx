export default function HomePage() {
    return (
        <>
  <div className="quiz-page">
    <div className="home-card">
      <h1 className='home-title'>Quiz Game</h1>
      <p className='home-subtitle'>time to test your knowledge</p>
      <p className='home-prompt'>Please pick the difficulty</p>
      <div className="home-options">
        <button className="home-option easy">Easy</button>
        <button className="home-option medium">Medium</button>
        <button className="home-option hard">Hard</button>
      </div>
    </div>
  </div>
        </>
    )
}