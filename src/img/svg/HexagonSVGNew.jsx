const HexagonSVGNew = ({ gradient, id }) => {
  return (
    <svg
      width="20"
      height="22"
      viewBox="0 0 20 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      {gradient}
      <path fill={`url(#${id})`} d="M10 0L20 5L20 17L10 22L0 17L0 5Z"></path>
    </svg>
  );
};

export default HexagonSVGNew;
