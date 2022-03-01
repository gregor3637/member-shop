import React from "react";
import styled from "styled-components";
import BundleView from "./BundleView/BundleView";
import SingleItemView from "./SingleItemView";

const View = ({ data }) => {
  const isBundle = data.bundleItems?.length > 0;

  return (
    <Wrapper>
      {!isBundle && <SingleItemView data={data} />}
      {isBundle && <BundleView data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  flex: 1;
`;

export default View;
