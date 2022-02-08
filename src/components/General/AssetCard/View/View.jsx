import React from "react";
import styled from "styled-components";
import BundleView from "./BundleView/BundleView";
import SingleItemView from "./SingleItemView";

const View = (props) => {
  const isBundle = props.data.items && props.data.items.length > 0;

  return (
    <Wrapper>
      {!isBundle && <SingleItemView data={props.data} />}
      {isBundle && <BundleView data={props.data} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  flex: 1;
`;

export default View;
