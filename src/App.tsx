import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <>
      <p>
        Counter: {count}
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </p>
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
