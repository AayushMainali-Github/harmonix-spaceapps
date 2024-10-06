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
  const [colorA, setColorA] = useState<"white" | "lime" | "red">("white");
  const [colorB, setColorB] = useState<"white" | "lime" | "red">("white");
  const [colorC, setColorC] = useState<"white" | "lime" | "red">("white");
  const [colorD, setColorD] = useState<"white" | "lime" | "red">("white");
  const [answered, setAnswered] = useState<boolean>(false);
  const check = (option: "A" | "B" | "C" | "D") => {
    if (answered) return;
    setAnswered(true);
    if (option === props.correct) {
      if (option === "A") setColorA("lime");
      if (option === "B") setColorB("lime");
      if (option === "C") setColorC("lime");
      if (option === "D") setColorD("lime");
    } else {
      if (option === "A") setColorA("red");
      if (option === "B") setColorB("red");
      if (option === "C") setColorC("red");
      if (option === "D") setColorD("red");
      if (props.correct === "A") setColorA("lime");
      if (props.correct === "B") setColorB("lime");
      if (props.correct === "C") setColorC("lime");
      if (props.correct === "D") setColorD("lime");
    }
  };
  return (
    <div className="quiz">
      <div className="question">{props.question}</div>
      <button style={{ borderColor: colorA, color: colorA }} onClick={() => check("A")} id="A">
        {props.optionA}
      </button>
      <button style={{ borderColor: colorB, color: colorB }} onClick={() => check("B")} id="B">
        {props.optionB}
      </button>
      <button style={{ borderColor: colorC, color: colorC }} onClick={() => check("C")} id="C">
        {props.optionC}
      </button>
      <button style={{ borderColor: colorD, color: colorD }} onClick={() => check("D")} id="D">
        {props.optionD}
      </button>
      <div className="answer">
        {" "}
        {answered ? (
          <>
            <b> Explanation: </b> {props.explanation}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Quiz;
