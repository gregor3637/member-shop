import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import FormButton from "../../Buttons/FormButton";

const Other = (props) => {
  let { quoteId } = useParams();

  return (
    <Styled>
      For other trust and safety reporting, please contact us by
      <LinkX
        to={{
          pathname: "/requests/new",
          search: `?ticket_form_id=${quoteId}`,
        }}
        target="_blank"
      >
        submitting a ticket.
      </LinkX>
      <FormButton type="button" onClick={props.onClose}>
        Close
      </FormButton>
    </Styled>
  );
};

const Styled = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;

  font-size: 1.4rem;
`;

const LinkX = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 15rem;

  font-weight: 600;
  text-decoration: none;
  color: var(--color-link-blue);

  span {
    margin-left: 1rem;
  }
  svg {
    font-size: 3rem;
  }
`;

export default Other;
