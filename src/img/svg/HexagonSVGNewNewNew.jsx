const HexagonSVGNewNewNew = ({
  svg,
  size = 24,
  color = "#000000",
  fill = "#000000",
}) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradientNew">
        <stop stopColor="#00ff5e" offset="0" />
        <stop stopColor="#3023ae" offset="100%" />
      </linearGradient>
      <path
        fill="url(#gradientNew)"
        // fill="#000"

        d="M10 0L20 5L20 17L10 22L0 17L0 5Z"
      ></path>
    </svg>
  );
};

export default HexagonSVGNewNewNew;
