const BlockchainSVG = ({
  svg,
  size = 18,
  color = "#000000",
  fill = "#000000",
}) => {
  return (
    <svg
      viewBox="0 0 16 18"
      fill="none"
      width="16"
      height="16"
      xlmns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.13623L8.3721 0.348862L15.3721 4.34886L15.75 4.5648V5.00004L15.75 13V13.4636L15.3354 13.6709L8.33541 17.1709L8 17.3386L7.66459 17.1709L0.66459 13.6709L0.25 13.4636L0.25 13L0.25 5.00004L0.25 4.5648L0.627896 4.34886L7.6279 0.348862L8 0.13623ZM1.75 12.5365L1.75 6.29243L7.25 9.43529L7.25 15.2865L1.75 12.5365ZM8.75 15.2865L14.25 12.5365L14.25 6.29243L8.75 9.43529L8.75 15.2865ZM8 1.86386L13.4883 5.00004L8 8.13623L2.51167 5.00004L8 1.86386Z"
      ></path>
    </svg>
  );
};

export default BlockchainSVG;
