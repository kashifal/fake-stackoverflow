import Model from "../model";
import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import Question from "./question";
import Layout from "../Layout";

export const m = new Model();

export default function FakeStackOverflow() {
  const [question, setQuestion] = useState([]);
  console.log("AFTER SUBMIT");

  console.log(m.data, "here");

  useEffect(() => {
    setQuestion(m.data.questions);
  }, []);
  const [showPage, setShowPage] = useState("mainPage");
  const handleFilterClick = (filter) => {
    switch (filter) {
      case "newest":
        setQuestion(m.getNewestQuestions());
      case "active":
        setQuestion(m.getActiveQuestions());

      case "unanswered":
        setQuestion(m.getUnansweredQuestions());

      default:
        return m.data.questions; // Show all questions by default
    }
  };
  const handleAskQuestionClick = () => {
    setShowPage("questionsFormPage");
  };

  if (showPage === "questionsFormPage") {
    return (
      <Layout>
        <QuestionForm setShowPage={setShowPage} />
      </Layout>
    );
  } else if (showPage === "mainPage") {
    const listItems = question.map((q) => (
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
      <Layout>
        <div className="head">
          <div className="topBlock">
            <h3>All Questions</h3>
          </div>
          <div className="topBlock1">
            <button onClick={handleAskQuestionClick} className="submitButton">
              Ask A Question
            </button>
          </div>
        </div>
        <div className="questions-header">
          <div className="">
            <h3>{m.data.questions.length} Questions</h3>
          </div>

          <div className="filter-buttons">
            <button onClick={() => handleFilterClick("newest")}>Newest</button>
            <button onClick={() => handleFilterClick("active")}>Active</button>
            <button onClick={() => handleFilterClick("unanswered")}>
              Unanswered
            </button>
          </div>
        </div>

        <div className="question-list">
          <ul>{listItems}</ul>
        </div>
        <button className="answerButton">Answer a Question</button>
      </Layout>
    );
  }

  return (
    <Layout>
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
          <button onClick={() => getNewest()}>Newest</button>
          <button>Active</button>
          <button>Unanswered</button>
        </div>
      </div>
      <div className="question-list">
        {/* You can loop and render questions here */}
      </div>
      <button className="submitButton">Answer a Question</button>
    </Layout>
  );
}
