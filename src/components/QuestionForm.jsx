import Model from "../model";
import React, { useState } from "react";

import { m } from "./fakestackoverflow";

export default function QuestionForm({ setShowPage }) {
  const [title, setTitle] = useState("");
  const [text, setQuestionText] = useState("");
  const [tags, setTags] = useState([]);
  const [username, setUsername] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuestionTextChange = (event) => {
    setQuestionText(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value.split(" "));
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  let validateObj = validate(title, text, tags, username);
  console.log(validateObj);

  return (
    <div className="question-form">
      <label>Question Title*</label>
      <br />
      <input
        type="text"
        placeholder="Limit title to 100 characters or less"
        maxLength="100"
        required
        onChange={handleTitleChange}
      />
      {!validateObj.titleBool && (
        <div>
          <p>Error: Title cannot be empty or more than 100 Characters</p>
        </div>
      )}
      <br />

      <label>Question Text*</label>
      <br />
      <textarea
        placeholder="Add details"
        height="200px"
        width="100px"
        onChange={handleQuestionTextChange}
      ></textarea>
      {!validateObj.textBool && (
        <div>
          <p>Error: </p>
        </div>
      )}

      <br />

      <label>Tags*</label>
      <br />
      <input
        type="text"
        placeholder="Add keywords separated by whitespace"
        required
        onChange={handleTagsChange}
      />
      {!validateObj.tagsBool && (
        <div>
          <p>Error: Cannot be Empty</p>
        </div>
      )}
      <br />

      <label>Username*</label>
      {!validateObj.userNameBool && (
        <div>
          <p>Error: Cannot be Empty</p>
        </div>
      )}
      <br />
      <input
        type="text"
        placeholder="Your username"
        required
        onChange={handleUsernameChange}
      />
      <br />
      <div>
        <div className="topBlock">
          <button
            className="submitButton"
            onClick={() => {
              if (
                validateObj.titleBool &&
                validateObj.textBool &&
                validateObj.userNameBool &&
                validateObj.tagsBool
              ) {
                m.addQuestion(title, text, username, tags);
                setShowPage("mainPage");
                console.log(m);
              }
            }}
          >
            Post Question
          </button>
        </div>
        <div className="topBlock">
          <p
            style={{
              color: "red",
              width: "300px",
              fontSize: "12px",
              textAlign: "right",
            }}
          >
            * indicates mandatory fields
          </p>
        </div>
      </div>
    </div>
  );
}

function validate(title, text, tags, username) {
  let obj = {
    titleBool: true,
    textBool: true,
    tagsBool: true,
    userNameBool: true,
  };
  if (title.length === 0 || title.length > 100) {
    obj.titleBool = false;
  }
  if (text.length === 0) {
    obj.textBool = false;
  }
  if (tags.length > 5 || tags.filter((t) => t.length < 10).length == 0) {
    obj.tagsBool = false;
  }
  if (username.length === 0) {
    obj.userNameBool = false;
  }

  return obj;
}
