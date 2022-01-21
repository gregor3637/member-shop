const CheckmarkSVG = ({
  svg,
  size = 18,
  color = "#000000",
  fill = "#000000",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 11"
    >
      <path d="M1 5L5 9L13 1"></path>
    </svg>
  );
};

export default CheckmarkSVG;
