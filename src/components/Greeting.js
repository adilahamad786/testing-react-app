import React, { useState } from "react";
import Output from "./Output";

export const Greeting = () => {
  const [change, setChange] = useState(false);

  const changeParagraph = () => {
    setChange(state => !state.change);
  }

  return (
    <>
      <div>Hello World!</div>
      { !change && <Output>It's good to see you!</Output> }
      { change && <Output>Change!</Output> }
      <button onClick={changeParagraph}>Change</button>
    </>
  );
};

export default Greeting;
