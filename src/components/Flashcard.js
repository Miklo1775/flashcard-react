import BackContent from "./BackContent";
import FrontContent from "./FrontContent";

import { Link } from "react-router-dom";

import React, { useState } from "react";
const Flashcard = (props) => {
  const [flipped, setFlipped] = useState(true);

  return (
    <div className={props.subject} onClick={() => setFlipped(!flipped)}>
      <h1>Question: {props.question}</h1>
      <h2>Subject: {props.subject}</h2>
      {flipped ? <FrontContent /> : <BackContent answer={props.answer} />}
      <Link to={`/edit/${props.id}`}>Edit/Delete</Link>
    </div>
  );
};

export default Flashcard;
