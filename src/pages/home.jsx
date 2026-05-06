import { useContext, useState, useEffect} from "react";
import { QuestionContext } from "../context/QuestionContext";
import QuestionCard from "../components/QuestionCard";
import PreviewTree from "../components/PreviewTree";
import { nanoid } from "nanoid";

import "../styles/home.css";

function Home() {
  const { questions, dispatch } =
    useContext(QuestionContext);

  const [submitted, setSubmitted] = useState(() => {
  const saved = localStorage.getItem("submitted");

  return saved ? JSON.parse(saved) : false;
});

useEffect(() => {
  localStorage.setItem(
    "submitted",
    JSON.stringify(submitted)
  );
}, [submitted]);

  const addParentQuestion = () => {
    dispatch({
      type: "ADD_PARENT",
      payload: {
        id: nanoid(),
        text: "",
        type: "short",
        children: [],
      },
    });
  };

  return (
    <div className="home">

      <div className="container">

        <h1>Nested Question Form</h1>

        <button
          className="add-btn"
          onClick={addParentQuestion}
        >
          Add New Question
        </button>

        <div className="question-list">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              number={`Q${index + 1}`}
            />
          ))}
        </div>

        <button
          className="submit-btn"
          onClick={() => setSubmitted(true)}
        >
          Submit Form
        </button>

        {submitted && (
          <PreviewTree questions={questions} />
        )}
      </div>

    </div>
  );
}

export default Home;