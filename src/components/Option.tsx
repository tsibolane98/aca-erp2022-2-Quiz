import React from "react";

interface Props {
  option: string;
  questionIndex: number;
  handleAnswerSelection: (questionIndex: number, selectedOption: string) => void;
}

const Option: React.FC<Props> = ({ option, questionIndex, handleAnswerSelection }) => {
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
