import React from "react";

const Stats = props => {
  const { turn, currentScore, average, withdrawals } = props;

  return (
    <div>
      <p>
        TURN NUMBER: {turn} || SCORE: {currentScore} || WITHDRAWALS:{" "}
        {withdrawals} || AVERAGE TIME PER TURN: {average.minutes}:
        {average.seconds}
      </p>
    </div>
  );
};
export default Stats;
