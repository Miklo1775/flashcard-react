import BackContent from "./BackContent";
import FrontContent from "./FrontContent";

import React, { useState } from "react";
const Flashcard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <h1>TITLE</h1>
      {flipped ? <FrontContent /> : <BackContent />}
    </div>
  );
};

export default Flashcard;
