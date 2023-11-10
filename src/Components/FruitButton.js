import React from "react";

const FruitButton = ({ fruits, color }) => {
  return (
    <div>
      <button>{fruits}</button>
      <p>
        {fruits} is {color} in color
      </p>
    </div>
  );
};
export default FruitButton;