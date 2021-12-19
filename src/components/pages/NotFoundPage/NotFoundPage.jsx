import React from "react";
import styled from "styled-components";

const NotFoundPage = (props) => {
  console.log("--------------------111!! NotFoundPage ==============");
  return (
    <Styled>
      <p>Page not fouond!</p>
    </Styled>
  );
};

const Styled = styled.div`
  background-color: green;
`;

export default NotFoundPage;
