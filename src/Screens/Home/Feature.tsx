import React from "react";

interface Props {
  img: string;
  title: string;
  desc: string;
}

const Feature = (props: Props) => {
  return (
    <div className="feature">
      <img src={props.img} alt="icon" />
      <div className="title">{props.title}</div>
      <div className="desc">{props.desc}</div>
    </div>
  );
};

export default Feature;
