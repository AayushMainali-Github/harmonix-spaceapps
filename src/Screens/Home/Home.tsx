import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Home.css";
import Book from "../../Assets/book.png";
import Message from "../../Assets/message.png";
import Profile from "../../Assets/profile.png";
import Quizzes from "../../Assets/quizzes.png";
import Challenge from "../../Assets/challenge.png";
import Feature from "./Feature";

const Home = () => {
  return (
    <div className="home">
      <Nav active="home" />
      <div className="hero">
        <div className="head">
          Protect, Preserve, Prosper <br /> Together with HarmoniX
        </div>
        <div className="desc">
          HarmoniX helps students explore and understand SDG Goal 15: Life on Land through engaging tutorials, interactive quizzes, and collaborative forums. Join us to learn,
          share, and take action for a sustainable planet.
        </div>
        <a href="/course">Get Started</a>
      </div>
      <div className="features">
        <div className="header">Features</div>
        <div className="list">
          <Feature
            img={Book}
            title="Interactive Course"
            desc="Learn about biodiversity, conservation, and sustainable practices with our comprehensive and engaging tutorials. Explore SDG Goal 15 through multimedia lessons designed to deepen your understanding."
          />
          <Feature
            img={Quizzes}
            title="Quizzes"
            desc="Test your knowledge of Life on Land! Take interactive quizzes that challenge your understanding and help reinforce what you’ve learned about sustainability and environmental protection."
          />
          <Feature
            img={Message}
            title="Forum"
            desc="Join the conversation! Our forums provide a space to discuss ideas, ask questions, and collaborate with other students passionate about preserving life on land."
          />
          <Feature
            img={Challenge}
            title="Challenges"
            desc="Put your skills to the test! Participate in monthly challenges that push you to apply what you’ve learned and make an impact on real-world environmental issues."
          />
          <Feature
            img={Profile}
            title="User Profile"
            desc="Track your progress and achievements as you learn. Your profile showcases completed tutorials, quiz scores, and participation in challenges, making it easy to see your growth."
          />
        </div>
      </div>
      <div className="bottom">
        <div className="head">Ready to make an impact on our planet?</div>
        <div className="desc">
          We’ll guide you through interactive tutorials, quizzes, and challenges to deepen your understanding of biodiversity and sustainability. Join our community, share ideas,
          and take steps toward preserving life on land.
        </div>
        <a href="/course">Join Now and Start Learning</a>
      </div>
    </div>
  );
};

export default Home;
