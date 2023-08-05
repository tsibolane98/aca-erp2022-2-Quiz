import React, { useState } from "react";
import "./App.css"; // Add your CSS styles here
import Quiz from "./components/Quiz";
import quizData from "./quizData"; // Your quiz data array

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="app">
      <h1>React Quiz App</h1>
      {!quizStarted ? (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      ) : (
        <Quiz quizData={quizData} />
      )}
    </div>
  );
};

export default App;
