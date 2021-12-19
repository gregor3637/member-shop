import withSvgHOC from "./withSvgHOC";

const SmallDisplaySVG = () => {
  return (
    <>
      <rect x="5" y="5" width="2" height="2"></rect>
      <rect x="11" y="5" width="2" height="2"></rect>
      <rect x="17" y="5" width="2" height="2"></rect>
      <rect x="5" y="11" width="2" height="2"></rect>
      <rect x="11" y="11" width="2" height="2"></rect>
      <rect x="17" y="11" width="2" height="2"></rect>
      <rect x="5" y="17" width="2" height="2"></rect>
      <rect x="11" y="17" width="2" height="2"></rect>
      <rect x="17" y="17" width="2" height="2"></rect>
    </>
  );
};

export default withSvgHOC(SmallDisplaySVG);
