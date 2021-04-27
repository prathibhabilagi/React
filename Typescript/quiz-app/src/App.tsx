import React from 'react';
import QuestionCard from './components/QuestionCard';
import { QuestionState, fetchQuizQuestions, Difficulty, Question } from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;
const App = () => {

  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  console.log(questions);
  
  //API call
  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  //User Select Answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  //User cilck next question
  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      {
        gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>Start</button> 
        ): null
      }
      
      {!gameOver ? <p className="score">Score: </p> : null }
      {loading && <p>Loading Questions...</p> }
      {!loading && !gameOver && (
        <QuestionCard
          questionNo = {number+1}
          totalQuestions = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number]: undefined}
          callback = {checkAnswer}
          />
      )}
      {!gameOver && !loading && userAnswers.length === number+1 && number!== TOTAL_QUESTIONS - 1 ? (
         <button className="next" onClick={nextQuestion}>Next Question</button>
      ): null 
      }
     </div>
  );
}

export default App;

