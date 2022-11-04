import React, { useState } from "react";

export const Greeting = () => {
  const [change, setChange] = useState(false);

  const changeParagraph = () => {
    setChange(state => !state.change);
  }

  return (
    <>
      <div>Hello World!</div>
      { !change && <p>It's good to see you!</p> }
      { change && <p>Change!</p> }
      <button onClick={changeParagraph}>Change</button>
    </>
  );
};

export default Greeting;
