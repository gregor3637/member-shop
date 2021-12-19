import React from "react";

const CustomSVG = (props) => {
  const { size = 24, color = "#000000", fill = "#000000" } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {props.children}
    </svg>
  );
};

const withSvgHOC = (OldComponent) => (props) => {
  return (
    <CustomSVG {...props}>
      <OldComponent {...props} />
    </CustomSVG>
  );
};

export default withSvgHOC;
