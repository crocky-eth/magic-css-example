import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="col-red bg-yellow border-bottom">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="border">Border</div>
      <div className="flex-center justify-around">
        <p className="col-red">Flex 1</p>
        <p className="col-blue">Flex 2</p>
        <p className="col-yellow">Flex 3</p>
      </div>
      <div className="cursor">cursor</div>
      <button className="background-gradient col-blue">button</button>
    </div>
  );
}
