import React from "react";
import "./Nav.css";
import Logo from "../../Assets/logo.png";

interface Props {
  active: "home" | "course" | "quizzes" | "forum" | "profile";
}

const Nav = (props: Props) => {
  return (
    <div className="nav">
      <div className="left">
        <img src={Logo} alt="logo" />
        <div>HarmoniX</div>
      </div>
      <div className="right">
        <a className={props.active === "home" ? "active" : "passive"} href="/">
          Home
        </a>
        <a className={props.active === "course" ? "active" : "passive"} href="/courses">
          Course
        </a>
        <a className={props.active === "quizzes" ? "active" : "passive"} href="/quizzes">
          Quizzes
        </a>
      </div>
    </div>
  );
};

export default Nav;
