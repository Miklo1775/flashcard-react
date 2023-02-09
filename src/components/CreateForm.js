import React, { useState } from "react";
import classes from "./CreateCards.module.css";

export const flashcardObj = [
  {
    id: 1,
    question: "Question 1?",
    answer: "Answer 1",
    subject: "history",
  },
  {
    id: 2,
    question: "Question 2?",
    answer: "Answer 2",
    subject: "math",
  },
];

const CreateForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("");

  const createNewCard = () => {
    return {
      id: flashcardObj.length + 1,
      question,
      answer,
      subject,
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(question);
    console.log(answer);
    console.log(subject);
    flashcardObj.push(createNewCard());
    console.log(flashcardObj);
    setQuestion("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Flashcard</h1>
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
  );
};

export default CreateForm;
