import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Screens/Home/Home";
import Error from "../Screens/Error/Error";
import Quizzes from "../Screens/Quizzes/Quizzes";
import Tutorials from "../Screens/Tutorials/Tutorials";
import One from "../Screens/Tutorials/Screens/One";
import Two from "../Screens/Tutorials/Screens/Two";
import Three from "../Screens/Tutorials/Screens/Three";
import Four from "../Screens/Tutorials/Screens/Four";
import Five from "../Screens/Tutorials/Screens/Five";
import Six from "../Screens/Tutorials/Screens/Six";
import Seven from "../Screens/Tutorials/Screens/Seven";
import Eight from "../Screens/Tutorials/Screens/Eight";
import Nine from "../Screens/Tutorials/Screens/Nine";
import Submit from "../Screens/Quizzes/Submit";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Tutorials />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/courses/one" element={<One />} />
          <Route path="/courses/two" element={<Two />} />
          <Route path="/courses/three" element={<Three />} />
          <Route path="/courses/four" element={<Four />} />
          <Route path="/courses/five" element={<Five />} />
          <Route path="/courses/six" element={<Six />} />
          <Route path="/courses/seven" element={<Seven />} />
          <Route path="/courses/eight" element={<Eight />} />
          <Route path="/courses/nine" element={<Nine />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
