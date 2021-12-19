import React from "react";
import styled from "styled-components";
import SectionHeadingLink from "./SectionHeadingLink";

const Heading = (props) => {
  return (
    <HeadingStyled>
      {props.children}
      <SectionHeadingLink text={props.text} url={props.link} />
    </HeadingStyled>
  );
};

const HeadingStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Heading;
