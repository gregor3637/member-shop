import withSvgHOC from "./withSvgHOC";

const LargeDisplaySVG = () => {
  return (
    <>
      <rect x="5" y="5" width="5" height="5"></rect>
      <rect x="14" y="5" width="5" height="5"></rect>
      <rect x="14" y="14" width="5" height="5"></rect>
      <rect x="5" y="14" width="5" height="5"></rect>
    </>
  );
};

export default withSvgHOC(LargeDisplaySVG);
