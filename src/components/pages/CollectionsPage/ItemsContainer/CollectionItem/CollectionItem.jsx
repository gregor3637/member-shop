import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VerifiedIcon from "../../../../../img/svg/VerifiedIcon";

const CollectionItem = ({ data }) => {
  return (
    <Wrapper to={`collection/${data.collectionName.replaceAll(" ", "-")}`}>
      <ViewX>
        <img src={data.backgroundImg} alt="" />
      </ViewX>
      <FooterX>
        <AvatarContainerX>
          <img src={data.creator.avatar} alt="" />
        </AvatarContainerX>
        <ProjectNameX>
          <h4>{data.collectionName}</h4>
          {data.details.isVerified && <VerifiedIcon />}
        </ProjectNameX>
        <CreatorNameX>
          by&nbsp;<h4> {data.creator.name}</h4>{" "}
          {data.creator.isVerified && <VerifiedIconX />}
        </CreatorNameX>
      </FooterX>
    </Wrapper>
  );
};

const VerifiedIconX = styled(VerifiedIcon)`
  transform: scale(0.8);
`;

const AvatarContainerX = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);

  height: 5.5rem;
  width: 5.5rem;
  padding: 0.3rem;

  /* overflow: hidden; */
  border-radius: 50%;
  border: 1px solid var(--color-grey20);
  background: var(--color-white);

  img {
    height: 100%;
    border-radius: 50%;
  }
`;

const ProjectNameX = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CreatorNameX = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-black);

  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;

  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ViewX = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
    width: 100%;

    object-fit: cover;

    border-radius: 1rem;
    background: var(--color-white);
  }
`;

const FooterX = styled.div`
  position: relative;

  padding-top: 2rem;
  flex-basis: 10%;
  width: 100%;
  flex-basis: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.6rem;
  }
`;

const Wrapper = styled(Link)`
  height: 100%;
  height: 44rem;
  padding: 1rem;
  min-width: 0;
  flex: 1;

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: 1rem;

  text-decoration: none;
  color: inherit;
`;

export default CollectionItem;
