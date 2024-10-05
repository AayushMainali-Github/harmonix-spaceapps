import React from "react";

interface Props {
  head: string;
  desc: string;
  img: string;
  to: string;
}

const Tutorial = (props: Props) => {
  return (
    <a href={`/courses/${props.to}`}>
      <img src={props.img} alt={props.head} />
      <div className="head">{props.head}</div>
      <div className="desc">{props.desc}</div>
    </a>
  );
};

export default Tutorial;
