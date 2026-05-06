import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { nanoid } from "nanoid";

import {
  Trash2,
  Plus,
  GripVertical,
} from "lucide-react";

import "./QuestionCard.css";

function QuestionCard({
  question,
  number,
}) {

  const { dispatch } =
    useContext(QuestionContext);

  /* =========================
     HANDLE INPUT CHANGE
  ========================= */

  const handleChange = (
    field,
    value
  ) => {

    dispatch({
      type: "UPDATE_QUESTION",

      payload: {
        id: question.id,
        field,
        value,
      },
    });
  };

  /* =========================
     ADD CHILD QUESTION
  ========================= */

  const addChild = () => {

    dispatch({
      type: "ADD_CHILD",

      payload: {
        parentId: question.id,

        child: {
          id: nanoid(),
          text: "",
          type: "short",
          children: [],
        },
      },
    });
  };

  /* =========================
     DELETE QUESTION
  ========================= */

  const removeQuestion = () => {

    dispatch({
      type: "DELETE_QUESTION",
      payload: question.id,
    });
  };

  return (

    <div className="question-card">

      {/* =========================
          HEADER
      ========================= */}

      <div className="question-header">

        <div className="header-left">

          <div className="drag-icon">
            <GripVertical size={20} />
          </div>

          <h3>{number}</h3>

        </div>

        <button
          className="delete-btn"
          onClick={removeQuestion}
        >
          <Trash2 size={18} />
        </button>

      </div>

      {/* =========================
          QUESTION INPUT
      ========================= */}

      <input
        type="text"
        placeholder="Enter question"
        value={question.text}
        onChange={(e) =>
          handleChange(
            "text",
            e.target.value
          )
        }
      />

      {/* =========================
          QUESTION TYPE
      ========================= */}

      <select
        value={question.type}
        onChange={(e) =>
          handleChange(
            "type",
            e.target.value
          )
        }
      >

        <option value="short">
          Short Answer
        </option>

        <option value="boolean">
          True / False
        </option>

      </select>

      {/* =========================
          ADD CHILD BUTTON
      ========================= */}

      {question.type === "boolean" && (

        <button
          className="child-btn"
          onClick={addChild}
        >

          <Plus size={16} />

          Add Child Question

        </button>

      )}

      {/* =========================
          CHILD QUESTIONS
      ========================= */}

      <div className="children">

        {question.children.map(
          (child, index) => (

            <QuestionCard
              key={child.id}
              question={child}
              number={`${number}.${index + 1}`}
            />

          )
        )}

      </div>

    </div>
  );
}

export default QuestionCard;