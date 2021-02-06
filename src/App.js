import { useContext } from "react";
import "./App.css"
import { MainContext } from "./state/main/mainProvider";

// Manual testing of multi-window support, as this is difficult to automate

function App() {

  const {state, setters, windowManager} = useContext(MainContext);

  return (
    <div className="App">
      {window.name}
      <br/>
      <button onClick={() => {
        windowManager.open(window.location.href, window.name === "main" ? "child" : "grandchild")
      }}>
        Open Child Window
      </button>
      <br/>
      <input type="number" value={state.num1} onChange={e => {setters.setNum1(e.target.value)}} />
    </div>
  );
}

export default App;
