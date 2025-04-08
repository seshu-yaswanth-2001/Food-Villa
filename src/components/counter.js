import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        Add 1
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
