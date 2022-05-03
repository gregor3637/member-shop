import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserProfileCard = (props) => {
  const ownerName = props.data.contract.creator.name;
  const avatar = props.data.contract.creator.avatar;

  return (
    <Wrapper className={props.className}>
      <LinkX to={`user/${ownerName}`}>
        <ImgWrapperX>
          <img src={avatar} alt="avatar" />
        </ImgWrapperX>
        <ProjectTitleX>{ownerName}</ProjectTitleX>
      </LinkX>
    </Wrapper>
  );
};

const ProjectTitleX = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-black);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
`;

const ImgWrapperX = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  flex: 0 0 3.2rem;
  margin-right: 0.4rem;

  border: 1px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const LinkX = styled(Link)`
  display: flex;
  align-items: center;

  /* min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; */

  color: inherit;
  text-decoration: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default UserProfileCard;
