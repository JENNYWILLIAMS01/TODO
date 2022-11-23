import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  // let counter = 0;
  const buttonClickHandler = () => {
    setCounter(prevCounter => prevCounter + 1);
    console.log(counter);
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const incrementByHandler = ()  => {
    setCounter(prevCounter => prevCounter + Number(input));
  };
  const decrementByHandler = ()  => {
    setCounter(prevCounter => prevCounter > 0 ? prevCounter - Number(input):0);
  };
  

  return (
    <div>
      <p> counter: {counter} </p>
      <button className="counter__button mr-2" onClick={buttonClickHandler}>
        Increment
      </button>
      <button
        className="counter__button"
        onClick={() => setCounter((p) => (p > 0 ? p - 1 : p))}
      >
        Decrement
      </button>
      <br />
       <input placeholder="Enter a number" type="number" min="0" value={input} onChange={inputChangeHandler} />
       <button className="counter__button" onClick={incrementByHandler}>
        IncrementBy
      </button>
      <button className="counter__button" onClick={decrementByHandler}>
        DecrementBy
      </button>
    </div>
  );
};

export default Counter;
