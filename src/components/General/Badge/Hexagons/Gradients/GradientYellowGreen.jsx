import React from "react";

const GradientYellowGreen = ({ id }) => {
  return (
    <linearGradient x1="0" y1="0" x2="100%" y2="100%" id={id}>
      <stop stopColor="#a3a032" offset="0" />
      <stop stopColor="#0d5224" offset="100%" />
    </linearGradient>
  );
};

export default GradientYellowGreen;
