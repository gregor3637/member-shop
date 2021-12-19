import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import useHttp from "../../../hooks/useHttp";
import { getSingleCard } from "../../../lib/api";
import ItemCardContext from "../../../store/ItemCardContext";
import ItemDescription from "./Elements/ItemDescription";

const ItemPage = (props) => {
  const params = useParams();
  const {
    sendRequest,
    data: loadedCard,
    error,
    status,
  } = useHttp(getSingleCard, true);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    document.body.style["overflow-y"] = "scroll";

    return () => {
      document.body.style["overflow-y"] = "none";
    };
  }, []);

  if (status === "pending") {
    return <div>loading...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log("loadedCard ====================");
  console.log(loadedCard);

  return (
    <ItemCardContext.Provider value={loadedCard}>
      <Styled>
        <OuterX>
          <InnerX>
            <div>
              <img
                // src="https://static.turbosquid.com/Preview/2019/11/16__17_52_47/CoverImage.jpg9988E0CD-074F-4988-BD5A-8A75FB46C8F3Large.jpg"
                // src="https://img.rarible.com/prod/image/upload/t_big/prod-itemImages/0x26fd3e176c260e7fef019966622419dabfebb299:147/b2947afd"
                // src="https://media.sketchfab.com/models/86fd6cec31e347289571a039852c02ed/thumbnails/d5826ebcceac4a36a2e2c1382506ab39/5da9b4d3987f4c7396a4ffe179a149bf.jpeg"
                src={loadedCard.imgSrc}
                alt=""
              />
            </div>
          </InnerX>
        </OuterX>
        <ItemDescription />
      </Styled>
    </ItemCardContext.Provider>
  );
};

const InnerX = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 10rem;

  div {
    max-width: 100%; //---- important
    min-height: 0; //----- important
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      max-height: 100%;
      max-width: 100%;

      background-color: red;
      border-radius: 1rem;
    }
  }
`;

const OuterX = styled.div`
  background: red;
  position: fixed;
  width: calc(100% - 60rem);
  height: calc(100% - 27rem); //7rem from parent and (top + bot-margin)
  margin: 10rem 0 10rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Styled = styled.div`
  width: 100%;
  height: calc(100% - 7rem);

  /* display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr min-content; */
`;

export default ItemPage;
