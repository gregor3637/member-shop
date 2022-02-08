import React from "react";

const GradientRedViolete = ({ id }) => {
  return (
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id={id}>
      <stop stopColor="#bf2050" offset="0" />
      <stop stopColor="#6417ff" offset="100%" />
    </linearGradient>
  );
};

export default GradientRedViolete;
