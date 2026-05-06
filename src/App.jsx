import "./App.css";

import { useContext } from "react";
import { nanoid } from "nanoid";

import QuestionCard from "./components/questioncard";
import PreviewTree from "./components/previewtree";

import { QuestionContext } from "./context/QuestionContext";

function App() {

  const { questions, dispatch } =
    useContext(QuestionContext);

  const addQuestion = () => {
    dispatch({
      type: "ADD_QUESTION",
      payload: {
        id: nanoid(),
        text: "",
        type: "short",
        children: [],
      },
    });
  };

  return (
    <div className="app">

      <div className="app-container">

        {/* HEADER */}

        <div className="app-header">
          <h1>Nested Question Form</h1>

          <p>
            Build dynamic nested questionnaires
            with conditional child questions.
          </p>
        </div>

        {/* MAIN PANEL */}

        <div className="glass-panel">

          {/* ACTION BAR */}

          <div className="action-bar">

            <button
              className="primary-btn"
              onClick={addQuestion}
            >
              + Add New Question
            </button>

          </div>

          {/* FORM */}

          <div className="form-wrapper">

            {questions.length === 0 ? (
              <div className="empty-state">

                <h2>No Questions Yet</h2>

                <p>
                  Start building your dynamic
                  questionnaire.
                </p>

              </div>
            ) : (
              questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  number={`Q${index + 1}`}
                />
              ))
            )}

          </div>

          {/* SUBMIT */}

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <button className="secondary-btn">
              Submit Form
            </button>
          </div>

        </div>

        {/* PREVIEW */}

        <div className="preview-wrapper">

          <PreviewTree questions={questions} />

        </div>

      </div>

    </div>
  );
}

export default App;