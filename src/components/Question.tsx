import React from "react";
import Option from "./Option";
import { QuestionData } from "../Data/quizData";

interface Props {
  question: QuestionData;
  questionIndex: number;
  handleAnswerSelection: (questionIndex: number, selectedOption: string) => void;
}

const Question: React.FC<Props> = ({ question, questionIndex, handleAnswerSelection }) => {
  return (
    <div className="question">
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <Option key={index} option={option} questionIndex={questionIndex} handleAnswerSelection={handleAnswerSelection} />
      ))}
    </div>
  );
};

export default Question;
