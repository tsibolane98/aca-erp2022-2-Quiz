import React from "react";

interface Props {
  score: number;
  total: number;
}

const Score: React.FC<Props> = ({ score, total }) => {
  return (
    <div className="score">
      <h2>Your Score</h2>
      <p>{score} out of {total}</p>
    </div>
  );
};

export default Score;
