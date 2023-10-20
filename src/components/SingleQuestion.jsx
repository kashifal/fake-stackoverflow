import React, { useEffect, useState } from "react";
import Layout from "../layout";
import Model from "../model";
import { useLocation } from "react-router-dom";

const model = new Model();

const SingleQuestion = () => {
  const [question, setQuestion] = useState({});
  const navigate = useLocation();

  useEffect(() => {
    console.log(navigate);
    model.data.questions.map((q) => {
      if ("/" + q.qid === navigate.pathname) {
        setQuestion(q);

        console.log("====================================");
        console.log(q);
        console.log("====================================");
      }
    });
  }, []);

  function formatDateSimple(dateString) {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    return date.toLocaleString();
  }

  return (
    <Layout>
      <div className="justify-between">
        <span>{question?.ansIds?.length} Answers</span>
        <h3>{question.title}</h3>
        <button className="answerButton my_btn">Answer a Question</button>
      </div>
      <div className="justify-between">
        <span>11 Views</span>
        <p className="paragraph">{question.text}</p>

        <div className="single_question_name">
          <span>{question.askedBy}</span>
          <p>{formatDateSimple(question.askDate)}</p>
        </div>
      </div>

      <div className="questionComponent">
        <div className="qustion_left">
          <div>12 answers</div>
          <div>3444 views</div>
        </div>
        <div className="question_center">
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            voluptas nulla fuga labore mollitia, vel esse dolor officiis tenetur
            aliquid dignissimos porro laudantium maiores quibusdam eaque ipsum
            ratione impedit excepturi.
          </p>
        </div>
        <div className="question_right">
          <span>asked</span>
        </div>
      </div>
      <div className="questionComponent">
        <div className="qustion_left">
          <div>12 answers</div>
          <div>3444 views</div>
        </div>
        <div className="question_center">
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            voluptas nulla fuga labore mollitia, vel esse dolor officiis tenetur
            aliquid dignissimos porro laudantium maiores quibusdam eaque ipsum
            ratione impedit excepturi.
          </p>
        </div>
        <div className="question_right">
          <span>asked</span>
        </div>
      </div>
    </Layout>
  );
};

export default SingleQuestion;
