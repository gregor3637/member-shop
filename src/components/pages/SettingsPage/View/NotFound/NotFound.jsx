import React from "react";
import styled from "styled-components";
import NotFoundPage from "../../../NotFoundPage/NotFoundPage";

const NotFound = (props) => {
  return (
    <Wrapper>
      <NotFoundPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

export default NotFound;
