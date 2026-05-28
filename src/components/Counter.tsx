import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  // define here
  //destructure
  const [count, setCount] = useState(0);
  // count -> state variable
  // setCount -- function to update the state variable
  useEffect(() => {
    console.log("Component is mounted on the screen");

    return () => {
        console.log("Component Unmounts");
    }
  }, [])

  function handleIncrement() {
    setCount(count + 1);
  }
  
  function handleDecrement(){
    setCount(count - 1);
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default Counter;
