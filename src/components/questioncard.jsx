import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";
import { nanoid } from "nanoid";
import { Trash2, Plus } from "lucide-react";

import "./QuestionCard.css";

function QuestionCard({ question, number }) {

  const { dispatch } =
    useContext(QuestionContext);

  const handleChange = (field, value) => {
    dispatch({
      type: "UPDATE_QUESTION",
      payload: {
        id: question.id,
        field,
        value,
      },
    });
  };

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

  const removeQuestion = () => {
    dispatch({
      type: "DELETE_QUESTION",
      payload: question.id,
    });
  };

  return (
    <div className="question-card">

      <div className="question-header">
        <h3>{number}</h3>

        <button
          className="delete-btn"
          onClick={removeQuestion}
        >
          <Trash2 size={18} />
        </button>
      </div>

      <input
        type="text"
        placeholder="Enter question"
        value={question.text}
        onChange={(e) =>
          handleChange("text", e.target.value)
        }
      />

      <select
        value={question.type}
        onChange={(e) =>
          handleChange("type", e.target.value)
        }
      >
        <option value="short">
          Short Answer
        </option>

        <option value="boolean">
          True / False
        </option>
      </select>

      {question.type === "boolean" && (
        <button
          className="child-btn"
          onClick={addChild}
        >
          <Plus size={16} />
          Add Child Question
        </button>
      )}

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