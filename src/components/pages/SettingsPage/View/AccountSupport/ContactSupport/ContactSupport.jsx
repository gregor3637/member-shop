import React from "react";
import styled from "styled-components";

const ContactSupport = (props) => {
  return (
    <Wrapper>
      <p>
        Can't find the answers you’re looking for? <br /> You can
        <a href="">submit a request</a> here.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem 3rem;
  background-color: var(--color-grey10);

  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey50);

  a {
    text-decoration: inherit;
    color: var(--color-blue);
  }
`;

export default ContactSupport;
