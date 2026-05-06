import { createContext, useReducer, useEffect } from "react";
import questionReducer from "../reducers/questionReducer";

export const QuestionContext = createContext();

const initialState = {
  questions: [],
};

export const QuestionProvider = ({ children }) => {
  const savedData = localStorage.getItem("nestedQuestions");

  const [state, dispatch] = useReducer(
    questionReducer,
    savedData ? JSON.parse(savedData) : initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "nestedQuestions",
      JSON.stringify(state)
    );
  }, [state]);

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions,
        dispatch,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};