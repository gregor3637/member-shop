import React from "react";
import styled from "styled-components";
import NavigationButton from "./NavigationButton/NavigationButton";

const Tab = (props) => {
  return (
    <Wrapper>
      <NavigationButton
        urlPath={props.homePath}
        label={props.label}
        isOpen={true}
        isForwards={false}
      />
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background: var(--test-y); */
  height: 100%;
`;

export default Tab;
