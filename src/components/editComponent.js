import React, { useState } from "react";
import { flashcardObj } from "./CreateForm";
import { useParams } from "react-router-dom";

const EditForm = () => {
  const id = useParams().id - 1;
  const [question, setQuestion] = useState(flashcardObj[id].question);
  const [answer, setAnswer] = useState(flashcardObj[id].answer);
  const [subject, setSubject] = useState(flashcardObj[id].subject);

  const handleSubmit = (event) => {
    event.preventDefault();
    flashcardObj[id].question = question;
    flashcardObj[id].answer = answer;
    flashcardObj[id].subject = subject;

    console.log(flashcardObj);
    setQuestion("");
    setAnswer("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Edit Flashcard</h1>
        <label>Question: </label>
        <input
          type="text"
          name="question"
          placeholder="question"
          value={question}
          onChange={(ev) => setQuestion(ev.target.value)}
        />
        <label>Answer:</label>
        <input
          type="text"
          name="answer"
          placeholder="answer"
          value={answer}
          onChange={(ev) => setAnswer(ev.target.value)}
        />
        <label htmlFor="subject">Choose a Subject:</label>
        <select
          // id="subject"
          // name="subject"
          onChange={(ev) => {
            console.log(ev.target.value);
            setSubject(ev.target.value);
          }}
        >
          <option value="">Select Subject</option>
          <option value="math">Math</option>
          <option value="science">Science</option>
          <option value="history">History</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <button type="button">Delete</button>
    </>
  );
};

export default EditForm;
