import { Link } from "react-router-dom";
import Model from "../model.js";
import { m } from "./fakestackoverflow.js";
import React, { useState } from "react";
// import QuestionForm from './QuestionForm.js';

export default function Question({
  title,
  tagIDs,
  askedBy,
  askDate,
  views,
  ans,
  qid,
}) {
  return (
    <Link to={qid} className="href">
      <div className="questionComponent">
        <div className="qustion_left">
          <div>{ans} answers</div>
          <div>{views} views</div>
        </div>
        <div className="question_center">
          <h4>{title}</h4>
          <div className="tags">
            <a href="#" className="tag">
              web-scripting
            </a>
            <a href="#" className="tag">
              html
            </a>
            <a href="#" className="tag">
              urls
            </a>
          </div>
        </div>
        <div className="question_right">
          <span>
            {askedBy} asked {askDate}
          </span>
        </div>
      </div>
    </Link>
  );
}
