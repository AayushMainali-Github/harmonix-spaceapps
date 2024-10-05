import React, { useState } from "react";

interface Props {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
  explanation: string;
}

const Quiz = (props: Props) => {
  const [answered, setAnswered] = useState<boolean>(false);
  const check = (option: "A" | "B" | "C" | "D") => {
    if (answered) return;
    setAnswered(true);
  };
  return (
    <div className="quiz">
      <div className="question">{props.question}</div>
      <button id="A">{props.optionA}</button>
      <button id="B">{props.optionB}</button>
      <button id="C">{props.optionC}</button>
      <button id="D">{props.optionD}</button>
      <div className="answer">{answered ? props.explanation : ""}</div>
    </div>
  );
};

export default Quiz;
