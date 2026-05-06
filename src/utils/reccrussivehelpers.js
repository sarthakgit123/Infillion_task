export const addChildQuestion = (
  questions,
  parentId,
  child
) => {
  return questions.map((question) => {
    if (question.id === parentId) {
      return {
        ...question,
        children: [...question.children, child],
      };
    }

    return {
      ...question,
      children: addChildQuestion(
        question.children,
        parentId,
        child
      ),
    };
  });
};

export const updateQuestion = (
  questions,
  id,
  field,
  value
) => {
  return questions.map((question) => {
    if (question.id === id) {
      return {
        ...question,
        [field]: value,
      };
    }

    return {
      ...question,
      children: updateQuestion(
        question.children,
        id,
        field,
        value
      ),
    };
  });
};

export const deleteQuestion = (questions, id) => {
  return questions
    .filter((question) => question.id !== id)
    .map((question) => ({
      ...question,
      children: deleteQuestion(
        question.children,
        id
      ),
    }));
};