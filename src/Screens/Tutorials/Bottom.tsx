import React from "react";

interface Props {
  back: string;
  next: string;
  backText: string;
  nextText: string;
}

const Bottom = (props: Props) => {
  return (
    <div className="bottom">
      <a href={props.back}>{props.backText}</a>
      <a href={props.next}>{props.nextText}</a>
    </div>
  );
};

export default Bottom;
