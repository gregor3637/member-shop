import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Watched from "../../../pages/MarketplacePage/FilterResults/AssetsView/TableView/Watch/Watch";
import LikesButton from "../../Buttons/LikesButton";

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
          <h2>{projectName}</h2>
        </LinkX>

        <Watched id={id} favoritesCount={favorites} />
      </InnerWrapperX>
    </Wrapper>
  );
};

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
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  overflow: hidden; // min-width: 0;

  color: inherit; /* blue colors for links too */
  text-decoration: inherit;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const LikesButtonX = styled(LikesButton)`
  overflow: hidden;
  width: min-content;
`;

const InnerWrapperX = styled.div`
  padding-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

export default AssetCardHeader;
