import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { clamp } from "lodash";

import PromotionNavigation from "./PromotionNavigation/PromotionNavigation";
import useHttp from "../../../../hooks/useHttp";
import { getPromotionData } from "../../../../lib/apiPromotion";
import Promotion from "./Types/Promotion/Promotion";
import Gift from "./Types/Gift/Gift";
import Article from "./Types/Article/Article";

const promotionTypes = {
  article: Article,
  promotion: Promotion,
  gift: Gift,
};

const Billboard = () => {
  const types = useMemo(() => Object.keys(promotionTypes), []);
  const [page, setPage] = useState(0);

  const { sendRequest } = useHttp(getPromotionData);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const changePage = (value) => {
    setPage((x) => clamp(x + value, 0, types.length - 1));
  };

  let typeData = promotionTypes[types[page]];

  return (
    <Wrapper>
      <HeaderX>
        <PromotionInfoX hasAnnotation={!!typeData.annotation}>
          <h4>{typeData.title}</h4>
          {typeData.annotation && <h5>{typeData.annotation}</h5>}
        </PromotionInfoX>
        <PromotionNavigation
          prevDisabled={page === 0}
          nextDisabled={page === types.length - 1}
          onPrev={() => changePage(-1)}
          onNext={() => changePage(1)}
        />
      </HeaderX>
      <BodyX>{typeData.body}</BodyX>
    </Wrapper>
  );
};

const PromotionInfoX = styled.div`
  flex: 1;
  overflow: hidden;
  font-size: 1.6rem;

  h4 {
    font-size: ${(props) => (props.hasAnnotation ? "1.4rem" : "1.6rem")};
  }
  h5 {
    font-size: 1rem;
    color: var(--color-grey50);
  }
`;
//-------------------------------

const HeaderX = styled.div`
  height: 40%;
  padding: 1rem 1rem 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  border-bottom: 1px solid var(--color-border);
`;

const BodyX = styled.div`
  height: 60%;
  padding: 1rem;
`;

const Wrapper = styled.div`
  background-color: var(--color-white);

  width: 100%;
  flex: 0 0 14rem;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default Billboard;
