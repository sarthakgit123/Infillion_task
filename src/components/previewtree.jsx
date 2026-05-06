import "./PreviewTree.css";

function PreviewTree({ questions }) {

  return (
    <div className="preview">

      <h2>Submitted Questions</h2>

      {questions.map((question, index) => (
        <RenderQuestion
          key={question.id}
          question={question}
          number={`Q${index + 1}`}
        />
      ))}

    </div>
  );
}

function RenderQuestion({
  question,
  number,
}) {
  return (
    <div className="preview-item">

      <p>
        <strong>{number}</strong> :
        {" "}
        {question.text}
      </p>

      {question.children.map(
        (child, index) => (
          <RenderQuestion
            key={child.id}
            question={child}
            number={`${number}.${index + 1}`}
          />
        )
      )}

    </div>
  );
}

export default PreviewTree;