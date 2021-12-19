const FilterSVG = ({ svg, size = 24, color = "#000000", fill = "#000000" }) => {
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
      <path strokeWidth="1.5" d="M21 8.25H10m-5.25 0H3"></path>
      <path
        strokeWidth="1.5"
        d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
      <path strokeWidth="1.5" d="M3 15.75h10.75m5 0H21"></path>
      <path
        strokeWidth="1.5"
        d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default FilterSVG;
