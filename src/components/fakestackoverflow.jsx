import Model from "../model";
import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import Question from "./question";

export const m = new Model();

export default function FakeStackOverflow() {
  console.log("AFTER SUBMIT");

  console.log(m.data, "here");

  const [showPage, setShowPage] = useState("mainPage");

  const handleAskQuestionClick = () => {
    setShowPage("questionsFormPage");
  };

  if (showPage === "questionsFormPage") {
    return (
      <div className="body">
        <header>
          <div className="main_header">
            <div className="header">
              <h1>Fake Stack Overflow</h1>
            </div>
            <div className="search">
              <input type="text" placeholder="Search . . ." />
            </div>
          </div>
        </header>
        <div className="mainContent">
          <nav>
            <button>Questions</button>
            <button>Tags</button>
          </nav>
          <main>
            <QuestionForm setShowPage={setShowPage} />
          </main>
        </div>
      </div>
    );
  } else if (showPage === "mainPage") {
    const listItems = m.data.questions.map((q) => (
      <Question
        key={q.toString()}
        title={q.title}
        tagID={q.tagIds}
        aksedBy={q.askedBy}
        views={q.views}
        ans={q.ansIds.length}
        qid={q.qid}
      ></Question>
    ));
    return (
      <div className="body">
        <header>
          <div className="main_header">
            <div className="header">
              <h1>Fake Stack Overflow</h1>
            </div>
            <div className="search">
              <input type="text" placeholder="Search . . ." />
            </div>
          </div>
        </header>
        <div className="mainContent">
          <nav>
            <button>Questions</button>
            <button>Tags</button>
          </nav>
          <main>
            <div className="head">
              <div className="topBlock">
                <h3>All Questions</h3>
              </div>
              <div className="topBlock1">
                <button
                  onClick={handleAskQuestionClick}
                  className="submitButton"
                >
                  Ask A Question
                </button>
              </div>
            </div>
            <div className="questions-header">
              <div className="">
                <h3>{m.data.questions.length} Questions</h3>
              </div>
              <div className="filter-buttons">
                <button>Newest</button>
                <button>Active</button>
                <button>Unanswered</button>
              </div>
            </div>

            <div className="question-list">
              <ul>{listItems}</ul>
            </div>
            <button className="answerButton">Answer a Question</button>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <header>
        <div className="main_header">
          <div className="header">
            <h1>Fake Stack Overflow</h1>
          </div>
          <div className="search">
            <input type="text" placeholder="Search . . ." />
          </div>
        </div>
      </header>
      <div className="mainContent">
        <nav>
          <button>Questions</button>
          <button>Tags</button>
        </nav>
        <main>
          <div className="topBlock">
            <h3>All Questions</h3>
          </div>
          <div className="topBlock">
            <button onClick={handleAskQuestionClick} className="submitButton">
              Ask A Question
            </button>
          </div>
          <div className="questions-header">
            <div className="filter-buttons">
              <button>Newest</button>
              <button>Active</button>
              <button>Unanswered</button>
            </div>
          </div>
          <div className="question-list">
            {/* You can loop and render questions here */}
          </div>
          <button className="submitButton">Answer a Question</button>
        </main>
      </div>
    </div>
  );
}
