import * as React from "react";
import { useState, useEffect } from "react";
import usePrevious from "./components/usePrevious";

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    console.log("Текущее число:", count);
    console.log("Предыдущее число:", prevCount);
  }, [count, prevCount]);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;