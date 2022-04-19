const HexagonSVG = ({
  svg,
  size = 24,
  color = "#000000",
  fill = "#000000",
}) => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient x1="0" y1="0" x2="100%" y2="100%" id="gradient">
        <stop stopColor="#c86dd7" offset="0" />
        <stop stopColor="#3023ae" offset="100%" />
      </linearGradient>
      <circle fill="url(#gradient)" cx="36" cy="36" r="20" />
    </svg>
  );

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 17.32050807568877 20"
    >
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stopColor:rgb(255,255,0);stop-opacity:1" />
          <stop offset="100%" style="stopColor:rgb(255,0,0);stop-opacity:1" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad3)" />
      {/* <path
        fill="url(#grad3)"
        // fill="#000"
        d="M8.660254037844386 0L17.32050807568877 5L17.32050807568877 15L8.660254037844386 20L0 15L0 5Z"
      ></path> */}
    </svg>
  );
};

export default HexagonSVG;
