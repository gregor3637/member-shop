import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import PriceLabelBlock from "./PriceLabelBlock/PriceLabelBlock";

const AssetCardInfo = ({ className, data }) => {
  return (
    <Wrapper className={className}>
      <MainX>
        <TitleContainerX>
          <Link to={`item/${data.id}`}>
            <TitleX>{data.general.name}</TitleX>
          </Link>
        </TitleContainerX>
        <PriceLabelBlock data={data} />
      </MainX>
    </Wrapper>
  );
};

const TitleX = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;

  font-size: 1.2rem;
  font-weight: 500;
`;

const TitleContainerX = styled.div`
  flex: 1;
  min-width: 0;
  padding-right: 1rem;

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

const MainX = styled.div`
  padding: 0 0.5rem;
  flex: 1;

  display: flex;
`;

const Wrapper = styled.div`
  padding-top: 1.4rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default AssetCardInfo;
