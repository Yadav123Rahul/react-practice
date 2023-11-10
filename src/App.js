import React from "react";
import FruitButton from "./Components/FruitButton";
const App = () => {
  let p1style = { textAlign: "center" };
  let a = 100;

  return (
    <div>
      <h1 style={{ color: "red" }}>Rahul</h1>
      <p style={p1style}>paragraph</p>
      <h3>Value is {a}</h3>

      <FruitButton fruits="Apple" color="red" />
    </div>
  );
};

export default App;
