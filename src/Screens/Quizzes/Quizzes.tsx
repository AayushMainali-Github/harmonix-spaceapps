import React, { useEffect, useState } from "react";
import "./Quizzes.css";
import Nav from "../../Components/Nav/Nav";

const Quizzes = () => {
  const [selected, setSelected] = useState<Array<boolean>>([true, true, true, true, true, true, true, true, true]);
  const select = (index: number) => {
    let arr = [...selected];
    arr[index] = !arr[index];
    setSelected(arr);
  };
  const selectedCount = (): number => {
    let count = 0;
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) count++;
    }
    return count;
  };
  useEffect(() => {}, [selected]);
  return (
    <div className="quizzes">
      <Nav active="quizzes" />
      <div className="container">
        <div className="header">Create your own custom quiz</div>
        <div className="main">
          <div className="left">
            <div className="top">
              <div>Select Chapters</div>
              <button>{selectedCount() === 9 ? "DESELECT ALL" : "SELECT ALL"}</button>
            </div>
            <div id="select" className="select">
              <div>
                <input onChange={() => select(0)} checked={selected[0]} type="checkbox" id="1" />
                <label htmlFor="1">Understanding the Sustainable Development Goals (SDGs)</label>
              </div>
              <div>
                <input onChange={() => select(1)} checked={selected[1]} type="checkbox" id="2" />
                <label htmlFor="2">Introduction to SDG 15 – Life on Land</label>
              </div>
              <div>
                <input onChange={() => select(2)} checked={selected[2]} type="checkbox" id="3" />
                <label htmlFor="3">Human-Wildlife Conflict – A Key Issue in SDG 15</label>
              </div>
              <div>
                <input onChange={() => select(3)} checked={selected[3]} type="checkbox" id="4" />
                <label htmlFor="4">The Role of Technology in Mitigating Human-Wildlife Conflict</label>
              </div>
              <div>
                <input onChange={() => select(4)} checked={selected[4]} type="checkbox" id="5" />
                <label htmlFor="5">Conservation and Biodiversity – Protecting Life on Land</label>
              </div>
              <div>
                <input onChange={() => select(5)} checked={selected[5]} type="checkbox" id="6" />
                <label htmlFor="6">The Role of Ecosystems in Combatting Human-Wildlife Conflict</label>
              </div>
              <div>
                <input onChange={() => select(6)} checked={selected[6]} type="checkbox" id="7" />
                <label htmlFor="7">Global Policies and Agreements for Wildlife Conservation</label>
              </div>
              <div>
                <input onChange={() => select(7)} checked={selected[7]} type="checkbox" id="8" />
                <label htmlFor="8">Local Communities and Indigenous Knowledge in HWC Mitigation</label>
              </div>
              <div>
                <input onChange={() => select(8)} checked={selected[8]} type="checkbox" id="9" />
                <label htmlFor="9">The Future of HWC: Climate Change and Population Growth</label>
              </div>
            </div>
          </div>
          <div className="right">
            <div>
              <div className="header">Familiarity</div>
              <select name="familiarity" id="familiarity">
                <option value="all">All</option>
                <option value="seen">Seen</option>
                <option value="neverseen">Never Seen</option>
                <option value="answeredcorrectly">Answered Correctly</option>
                <option value="answeredincorrectly">Answered Incorrectly</option>
              </select>
            </div>
            <div>
              <div className="header">Difficulty</div>
              <select name="difficulty" id="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div>
              <div className="header">No of Questions</div>
              <select name="noofquestions" id="noofquestions">
                <option value="5">5 Questions</option>
                <option value="10">10 Questions</option>
                <option value="25">25 Questions</option>
              </select>
            </div>
          </div>
        </div>
        <button>START TEST</button>
      </div>
    </div>
  );
};

export default Quizzes;
