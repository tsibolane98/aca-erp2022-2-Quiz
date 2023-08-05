import React from "react";

const Option = ({ option, questionIndex, handleAnswerSelection }) => {
  return (
    <div className="option">
      <label>
        <input
          type="radio"
          name={`question_${questionIndex}`}
          value={option}
          onChange={() => handleAnswerSelection(questionIndex, option)}
        />
        {option}
      </label>
    </div>
  );
};

export default Option;
