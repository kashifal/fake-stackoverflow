import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { m } from "./fakestackoverflow";
import Model from "../model"; // Import the existing model instance
import { useLocation } from "react-router-dom";
import AnswerForm from "./AnswerForm";
const model = m;

const SingleQuestion = () => {
  console.log(m.data, "out in q2 ...");
  // Obtain the existing model instance
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [showPage, setShowPage] = useState("mainPage");
  const { pathname } = useLocation();

  const fetchData = () => {
    const questionData = model.data.questions.find(
      (q) => "/" + q.qid === pathname
    );
    if (questionData) {
      setQuestion(questionData);
      const selectedAnswerIds = questionData.ansIds || [];
      const filteredAnswers = model.data.answers.filter((answer) =>
        selectedAnswerIds.includes(answer.aid)
      );
      setAnswers(filteredAnswers);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formatDateSimple(dateString) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    return date.toLocaleString();
  }

  const handleAskQuestionClick = () => {
    setShowPage("questionsFormPage");
  };

  return (
    <Layout>
      {showPage === "mainPage" ? (
        <div>
          <div className="justify-between">
            <span>{answers.length} Answers</span>
            <h3>{question.title}</h3>
          </div>
          <div className="justify-between">
            <span>{question.views} Views</span>
            <p className="paragraph">{question.text}</p>
            <div className="single_question_name">
              <span>{question.askedBy}</span>
              <p>{formatDateSimple(question.askDate)}</p>
            </div>
          </div>
          {answers.map((answer) => (
            <div key={answer.aid} className="questionComponent">
              <div className="question_center">
                <p className="paragraph">{answer.text}</p>
              </div>
              <div className="question_right single_question_name">
                <span className="green">{answer.ansBy}</span>
                <p>Answered {formatDateSimple(answer.ansDate)}</p>
              </div>
            </div>
          ))}
          <div className="topBlock">
            <button
              onClick={handleAskQuestionClick}
              style={{ marginTop: "50px" }}
              className="submitButton"
            >
              Answer Question
            </button>
          </div>
        </div>
      ) : (
        <div>
          {pathname}
          <AnswerForm
            setShowPage={setShowPage}
            handleAskQuestionClick={handleAskQuestionClick}
            qid={pathname}
          />
        </div>
      )}
    </Layout>
  );
};

export default SingleQuestion;
