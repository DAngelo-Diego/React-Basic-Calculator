import "./App.css";
import Button from "./components/button";
import Screen from "./components/screen";
import Clear from "./components/bClear";
import img from "./img/japan.png";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const calc = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Insert a number first!");
    }
  };

  return (
    <div className="App">
      <div className="japan">
        <img src={img} alt="japan" className="japan-logo" />
      </div>
      <div className="c-container">
        <Screen input={input} />
        <div className="row">
          <Button mC={addInput}>7</Button>
          <Button mC={addInput}>8</Button>
          <Button mC={addInput}>9</Button>
          <Button mC={addInput}>/</Button>
        </div>
        <div className="row">
          <Button mC={addInput}>4</Button>
          <Button mC={addInput}>5</Button>
          <Button mC={addInput}>6</Button>
          <Button mC={addInput}>*</Button>
        </div>
        <div className="row">
          <Button mC={addInput}>1</Button>
          <Button mC={addInput}>2</Button>
          <Button mC={addInput}>3</Button>
          <Button mC={addInput}>-</Button>
        </div>
        <div className="row">
          <Button mC={addInput}>0</Button>
          <Button mC={addInput}>.</Button>
          <Button mC={calc}>=</Button>
          <Button mC={addInput}>+</Button>
        </div>
        <div className="row">
          <Clear clear={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
