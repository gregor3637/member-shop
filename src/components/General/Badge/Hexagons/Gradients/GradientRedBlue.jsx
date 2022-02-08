import React from "react";

const GradientRedBlue = ({ id }) => {
  return (
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id={id}>
      <stop stopColor="#ff0000" offset="0" />
      <stop stopColor="#3023ae" offset="100%" />
    </linearGradient>
  );
};

export default GradientRedBlue;
