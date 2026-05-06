import Home from "./pages/Home";
import { QuestionProvider } from "./context/QuestionContext";

function App() {
  return (
    <QuestionProvider>
      <Home />
    </QuestionProvider>
  );
}

export default App;