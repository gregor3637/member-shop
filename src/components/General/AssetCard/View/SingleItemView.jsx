import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleItemView = ({ data }) => {
  return (
    <LinkX to={`itemTest/${data.id}`}>
      <img src={data.general.src} alt="avatar" />
    </LinkX>
  );
};

const LinkX = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    border-radius: 2rem;
    object-fit: cover;
  }
`;

export default SingleItemView;
