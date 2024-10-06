import React from "react";

interface Props {
  img: string;
  title: string;
  desc: string;
  development?: boolean;
  to?: string;
}

const Feature = (props: Props) => {
  return (
    <div
      onClick={() => {
        if (props.to) window.location.pathname = props.to;
      }}
      className="feature"
    >
      <img src={props.img} alt="icon" />
      <div className="title">{props.title}</div>
      <div className="desc">
        {props.desc}{" "}
        {props.development ? (
          <>
            <br />
            <b>[Under Development]</b>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Feature;
