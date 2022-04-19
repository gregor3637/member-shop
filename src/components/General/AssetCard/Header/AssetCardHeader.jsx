import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Watched from "../../../pages/MarketplacePage/FilterResults/AssetsView/TableView/Watch/Watch";

const AssetCardHeader = ({
  data: {
    id,
    project: { name: projectName },
    socialMedia: {
      stats: { favorites },
    },
    contract: {
      creator: { avatar },
      owner: { name: ownerName },
    },
  },
  className,
}) => {
  return (
    <Wrapper className={className}>
      <InnerWrapperX>
        <LinkX to={`user/${ownerName}`}>
          <ImgWrapperX>
            <img src={avatar} alt="avatar" />
          </ImgWrapperX>
          <ProjectTitleX>{projectName}</ProjectTitleX>
        </LinkX>

        <WatchedX id={id} favoritesCount={favorites} />
      </InnerWrapperX>
    </Wrapper>
  );
};

const WatchedX = styled(Watched)`
  flex-basis: max-content;
`;

const ProjectTitleX = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ImgWrapperX = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  flex: 0 0 3.2rem;

  border: 1px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const LinkX = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: inherit;
  text-decoration: inherit;
`;

const InnerWrapperX = styled.div`
  padding-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Wrapper = styled.header`
  width: 100%;
`;

export default AssetCardHeader;
