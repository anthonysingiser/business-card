import './index.css'
import {useState} from 'react'

function App(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const propQuestions = props.questions
  const questionObject = propQuestions[currentQuestionIndex]
  const answers = questionObject.answerOptions
  
  const handleAnswerButtonClick = (isCorrect) => {
    const nextQuestionIndex = currentQuestionIndex + 1

    if (nextQuestionIndex < propQuestions.length){
      setCurrentQuestionIndex(nextQuestionIndex)
    } else{
      setShowScore(true)
    }
    
    if (isCorrect) {
      setScore(score + 1)
      alert(`Woo-hoo! 
      Keep it up!`)             
    } else {
        alert(`I don't think so...`)
    }
  }

  return( 
    <div className='score-section'>
      {showScore ? (
        <div>  
          <h2> 
            You scored {score} out of {propQuestions.length}{score <= 3 ? '.' : '!'}
          </h2>
          <h4>
            {score <= 3 ? (
              `If you'd like to contact me score higher...`
            ) : (            
              `Contact me at asingiser@gmail.com if you'd like to work together.`
            )}
          </h4>
        </div>
      ) : (
        <div>
          <div className = 'question-section'>
            <div className='question-count'>
              <span>Question {currentQuestionIndex + 1}</span>/{propQuestions.length}
            </div>
            <div className='question-text'>
              {questionObject.questionText}
            </div>
            <div className = 'answer-section'>
              {answers.map((answerOption) => (
                <button key={answerOption.answerText} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default App;