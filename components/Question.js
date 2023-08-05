import React from "react";
import Option from "./Option";

const Question = ({ question, questionIndex, handleAnswerSelection }) => {
  return (
    <div className="question">
      <p>{question.question}</p>
      {question.options.map((option, optionIndex) => (
        <Option
          key={optionIndex}
          option={option}
          questionIndex={questionIndex}
          handleAnswerSelection={handleAnswerSelection}
        />
      ))}
    </div>
  );
};

export default Question;
