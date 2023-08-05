import React from "react";
import Question from "./Question";
import { QuestionData } from "../Data/quizData";

interface Props {
  questionData: QuestionData | null; // Updated prop type to handle null
  questionIndex: number;
  handleAnswerSelection: (questionIndex: number, selectedOption: string) => void;
}

const Quiz: React.FC<Props> = ({ questionData, questionIndex, handleAnswerSelection }) => {
  return (
    <div className="quiz">
      {questionData ? ( // Check if questionData is not null before rendering
        <Question
          question={questionData}
          questionIndex={questionIndex}
          handleAnswerSelection={handleAnswerSelection}
        />
      ) : (
        <p>Quiz has not started yet.</p>
      )}
    </div>
  );
};

export default Quiz;
