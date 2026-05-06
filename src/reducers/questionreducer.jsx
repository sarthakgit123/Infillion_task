import {
  addChildQuestion,
  deleteQuestion,
  updateQuestion,
} from "../utils/reccrussivehelpers";

const questionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PARENT":
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };

    case "ADD_CHILD":
      return {
        ...state,
        questions: addChildQuestion(
          state.questions,
          action.payload.parentId,
          action.payload.child
        ),
      };

    case "UPDATE_QUESTION":
      return {
        ...state,
        questions: updateQuestion(
          state.questions,
          action.payload.id,
          action.payload.field,
          action.payload.value
        ),
      };

    case "DELETE_QUESTION":
      return {
        ...state,
        questions: deleteQuestion(
          state.questions,
          action.payload
        ),
      };

    default:
      return state;
  }
};

export default questionReducer;