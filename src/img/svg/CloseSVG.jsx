import withSvgHOC from "./withSvgHOC";

const CloseSVG = () => (
  <>
    <line x1="8" y1="16" x2="16" y2="8" strokeWidth="2" />
    <line x1="8" y1="8" x2="16" y2="16" strokeWidth="2" />
  </>
);
export default withSvgHOC(CloseSVG);
