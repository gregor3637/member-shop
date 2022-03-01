import withSvgHOC from "./withSvgHOC";

const TableDisplaySVG = () => {
  return (
    <>
      <rect x="4" y="5" width="16" height="2"></rect>
      <rect x="4" y="11" width="16" height="2"></rect>
      <rect x="4" y="17" width="16" height="2"></rect>
    </>
  );
};

export default withSvgHOC(TableDisplaySVG);
