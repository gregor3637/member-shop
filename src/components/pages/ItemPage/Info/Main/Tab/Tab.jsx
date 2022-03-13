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
  height: 100%;

  a:first-child {
    margin-bottom: 1rem;
  }
`;

export default Tab;
