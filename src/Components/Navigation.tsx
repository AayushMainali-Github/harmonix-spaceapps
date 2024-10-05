import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Screens/Home/Home";
import Error from "../Screens/Error/Error";
import Quizzes from "../Screens/Quizzes/Quizzes";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
