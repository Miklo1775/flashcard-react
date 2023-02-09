import Flashcard from "../components/Flashcard";
import { flashcardObj } from "../components/CreateForm";
import uuid from "react-uuid";

const Cards = () => {
  return (
    <div>
      {flashcardObj.map((flashcard) => {
        return (
          <Flashcard
            id={flashcard.id}
            key={uuid()}
            question={flashcard.question}
            answer={flashcard.answer}
            subject={flashcard.subject}
          />
        );
      })}
    </div>
  );
};

export default Cards;
