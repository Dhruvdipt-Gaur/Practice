import React, { useState ,useContext } from "react";
import { myContext } from "./Context";
const Counter = () => {
const {counting,add} = useContext(myContext)
  return (
    <>
      <div>
        <p>{counting}</p>
        <button onClick={() => add()}>add</button>
      </div>
    </>
  );
};

export default Counter;
