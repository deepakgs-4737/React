import React, { useState } from "react";
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((currentValue) => currentValue + 1);
  }

  const subCount = () => {
    setCount((currentValue) => currentValue - 1);
  }

  return (
    <div>

      <h1 className="counter">Counter: {count}</h1>
        {/* <button onClick={addCount}>Increase Count</button> */}
    
     <br></br>
      <div className="button">
        <button onClick={addCount} className="m-2 bg-success text-white">
          +
        </button>
        <button onClick={subCount} className="m-2 bg-danger text-white">
          -
        </button>
      </div>
    
    </div>
  );
};

export default Counter;
