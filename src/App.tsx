import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface CounterProps {
  initialCount: number;
}
function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount);

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
          <Counter initialCount={3} />
        </header>
      </div>
    );
  }
}

export default App;
