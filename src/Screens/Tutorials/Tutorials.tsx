import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Tutorials.css";
import One from "./Assets/1.png";
import Two from "./Assets/2.png";
import Three from "./Assets/3.png";
import Four from "./Assets/4.png";
import Five from "./Assets/5.png";
import Six from "./Assets/6.png";
import Seven from "./Assets/7.png";
import Eight from "./Assets/8.png";
import Nine from "./Assets/9.png";
import Tutorial from "./Tutorial";

const Tutorials = () => {
  return (
    <div className="tutorials">
      <Nav active="course" />
      <div className="main">
        <img src={One} alt="Introduction" />
        <div>
          <div className="head">1. Understanding the Sustainable Development Goals (SDGs)</div>
          <div className="desc">
            This tutorial introduces the 17 Sustainable Development Goals (SDGs), adopted by all United Nations Member States in 2015. It covers how these goals address global
            challenges like poverty, inequality, climate change, and environmental degradation, emphasizing the interconnected nature of the goals and their global impact.
          </div>
          <a href="/tutorials/one">Start Learning!</a>
        </div>
      </div>
      <div className="list">
        <Tutorial
          to="two"
          img={Two}
          head="2. Introduction to SDG 15 – Life on Land"
          desc="Explore SDG 15, which focuses on the protection, restoration, and sustainable use of terrestrial ecosystems. This tutorial highlights the importance of biodiversity, sustainable forest management, and combating desertification, while addressing global challenges like deforestation and species extinction."
        />
        <Tutorial
          to="three"
          img={Three}
          head="3. Human-Wildlife Conflict – A Key Issue in SDG 15"
          desc="This tutorial explains the causes and consequences of human-wildlife conflict, a critical issue within SDG 15. It provides examples of conflict, discusses its impact on both humans and wildlife, and offers solutions like community-based conservation and wildlife corridors to mitigate these conflicts."
        />
        <Tutorial
          to="four"
          img={Four}
          head="4. The Role of Technology in Mitigating Human-Wildlife Conflict"
          desc="Discover how technology is being used to prevent and mitigate human-wildlife conflict. This tutorial covers innovations such as drones, GPS tracking, and AI-based predictive models that help communities and conservationists better manage and prevent conflicts."
        />
        <Tutorial
          to="five"
          img={Five}
          head="5. Conservation and Biodiversity – Protecting Life on Land"
          desc="Learn about the significance of biodiversity and the critical role it plays in ecosystem stability and human survival. This tutorial explores the threats to biodiversity, such as habitat loss and climate change, and highlights conservation strategies like protected areas and sustainable resource management."
        />
        <Tutorial
          to="six"
          img={Six}
          head="6. The Role of Ecosystems in Combatting Human-Wildlife Conflict"
          desc="This tutorial emphasizes the importance of healthy ecosystems in preventing human-wildlife conflict. It explores how habitat loss and fragmented ecosystems increase conflict and discusses restoration strategies like rewilding and creating wildlife corridors to mitigate these issues."
        />
        <Tutorial
          to="seven"
          img={Seven}
          head="7. Global Policies and Agreements for Wildlife Conservation"
          desc="Examine the international agreements and national policies that promote biodiversity conservation and address human-wildlife conflict. This tutorial covers treaties like the Convention on Biological Diversity (CBD) and CITES, along with challenges in enforcement and implementation."
        />
        <Tutorial
          to="eight"
          img={Eight}
          head="8. Local Communities and Indigenous Knowledge in HWC Mitigation"
          desc="This tutorial explores the crucial role of local communities and Indigenous knowledge in mitigating human-wildlife conflict. It highlights community-based conservation efforts and the unique contributions of Indigenous land stewardship practices to wildlife protection."
        />
        <Tutorial
          to="nine"
          img={Nine}
          head="9. The Future of HWC: Climate Change and Population Growth"
          desc="Understand the future challenges posed by climate change and population growth on human-wildlife conflict. This tutorial discusses how shifting ecosystems and expanding urban areas increase conflict and explores solutions like climate-resilient conservation and sustainable urban planning."
        />
      </div>
    </div>
  );
};

export default Tutorials;
