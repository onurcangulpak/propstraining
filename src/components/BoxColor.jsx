import React from "react";

const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r},${g},${b})`;

  const boxStyle = {
    backgroundColor: rgbColor,
    width: "400px",
    height: "100px",
    border: "1px solid #000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    margin: '15px 16px'
  };

  return (
    <div style={boxStyle}>
      <p> {rgbColor} </p>
    </div>
  );
};

export default BoxColor;
