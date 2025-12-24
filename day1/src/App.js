import { useState } from "react";
import Display from "./components/Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Display count={count} />
    </div>
  );
}

export default App;
