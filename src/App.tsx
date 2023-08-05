import React, { useState } from "react";
import "./App.css";
import "./components/Style.css";
import Quiz from "./components/Quiz";
import { quizData, QuestionData } from "./Data/quizData";
import Score from "./components/Score";

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showScore, setShowScore] = useState(false);

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
  };

  const handleAnswerSelection = (questionIndex: number, selectedOption: string) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowScore(true);
  };

  const handleQuizClose = () => {
    setCurrentQuestionIndex(-1);
    setUserAnswers({});
    setShowScore(false);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowScore(false);
  };

  const getCurrentQuestion = (): QuestionData | null => {
    return currentQuestionIndex >= 0 ? quizData[currentQuestionIndex] : null;
  };

  const getScore = (): number => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

  return (
    <div className="app">
      <h1>ACA:React Quiz App</h1>
      {!showScore ? (
        <>
          {currentQuestionIndex === -1 ? (
            <button onClick={handleStartQuiz}>Start Quiz</button>
          ) : (
            <div className="quiz-content">
              <Quiz
                questionData={getCurrentQuestion()}
                questionIndex={currentQuestionIndex}
                handleAnswerSelection={handleAnswerSelection}
              />
              <div className="nav-buttons">
                {currentQuestionIndex > 0 && (
                  <button onClick={handlePreviousQuestion}>Previous</button>
                )}
                {isLastQuestion ? (
                  <button onClick={handleSubmitQuiz}>Submit Quiz</button>
                ) : (
                  <button onClick={handleNextQuestion}>Next</button>
                )}
              </div>
            </div>
          )}
          {currentQuestionIndex >= 0 && (
            <button onClick={handleQuizClose}>Close Quiz</button>
          )}
        </>
      ) : (
        <div className="quiz-content">
          <Score score={getScore()} total={quizData.length} />
          <button onClick={handleQuizClose}>Close Quiz</button>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default App;
