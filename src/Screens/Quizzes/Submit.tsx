import React from "react";
import "./Quizzes.css";

const Submit = () => {
  return (
    <div className="submit">
      <div>You successfully finished the quiz!</div>
      <div>Do you want to take the quiz again?</div>
      <span>
        <a href="/quizzes">Try Again</a>
        <a href="/home">Quit</a>
      </span>
    </div>
  );
};

export default Submit;
