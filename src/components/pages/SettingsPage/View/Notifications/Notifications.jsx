import React from "react";
import styled from "styled-components";
import NotFoundPage from "../../../NotFoundPage/NotFoundPage";

const Notifications = (props) => {
  return (
    <Wrapper>
      <NotFoundPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: green; */
  height: 100%;
`;

export default Notifications;
