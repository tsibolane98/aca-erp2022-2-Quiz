import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const Quiz = ({ quizData }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: selectedOption });
  };

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    setShowScore(true);
  };

  return (
    <div className="quiz">
      {quizData.map((question, index) => (
        <Question
          key={index}
          question={question}
          questionIndex={index}
          handleAnswerSelection={handleAnswerSelection}
        />
      ))}
      <button onClick={handleSubmitQuiz}>Submit Quiz</button>
      {showScore && <Score score={calculateScore()} total={quizData.length} />}
    </div>
  );
};

export default Quiz;
