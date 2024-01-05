import "./App.css";
import Counter from "./components/counter/ReduxCounter";
import { Provider } from "react";
function App() {
  return (
    <Provider>
      <Counter />
    </Provider>
  );
}

export default App;
