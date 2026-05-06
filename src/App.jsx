import "./App.css";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import { useContext } from "react";
import { nanoid } from "nanoid";

import QuestionCard from "./components/questioncard";
import PreviewTree from "./components/previewtree";

import { QuestionContext } from "./context/QuestionContext";

function App() {

  const { questions, dispatch } =
    useContext(QuestionContext);

  /* =========================
     ADD QUESTION
  ========================= */

  const addQuestion = () => {

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

  /* =========================
     DRAG & DROP
  ========================= */

  const handleDragEnd = (result) => {

    if (!result.destination) return;

    const items = [...questions];

    const [reorderedItem] =
      items.splice(result.source.index, 1);

    items.splice(
      result.destination.index,
      0,
      reorderedItem
    );

    dispatch({
      type: "REORDER_QUESTIONS",
      payload: items,
    });
  };

  return (

    <div className="app">

      <div className="app-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="app-header">

          <h1>
            Nested Question Form
          </h1>

          <p>
            Build dynamic nested questionnaires
            with conditional child questions.
          </p>

        </div>

        {/* =========================
            TWO PANEL LAYOUT
        ========================= */}

        <div className="content-layout">

          {/* =========================
              LEFT SIDE - BUILDER
          ========================= */}

          <div className="builder-section">

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

              {/* =========================
                  DRAG DROP FORM
              ========================= */}

              <DragDropContext
                onDragEnd={handleDragEnd}
              >

                <Droppable
                  droppableId="questions"
                >

                  {(provided) => (

                    <div
                      className="form-wrapper"

                      ref={provided.innerRef}

                      {...provided.droppableProps}
                    >

                      {questions.length === 0 ? (

                        <div className="empty-state">

                          <h2>
                            No Questions Yet
                          </h2>

                          <p>
                            Start building your
                            dynamic questionnaire.
                          </p>

                        </div>

                      ) : (

                        questions.map(
                          (question, index) => (

                            <Draggable
                              key={question.id}

                              draggableId={question.id}

                              index={index}
                            >

                              {(provided) => (

                                <div
                                  ref={provided.innerRef}

                                  {...provided.draggableProps}

                                  {...provided.dragHandleProps}
                                >

                                  <QuestionCard
                                    question={question}
                                    number={`Q${index + 1}`}
                                  />

                                </div>

                              )}

                            </Draggable>

                          )
                        )

                      )}

                      {provided.placeholder}

                    </div>

                  )}

                </Droppable>

              </DragDropContext>

            </div>

          </div>

          {/* =========================
              RIGHT SIDE - PREVIEW
          ========================= */}

          <div className="preview-section">

            <PreviewTree
              questions={questions}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;