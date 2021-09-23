import React, { useState } from "react";
import styled from "styled-components";
import ShopCardImage from "./ShopCardImage";

import Tooltip from "../Tooltip";

const ShopItemNew = (props) => {
  //--start=> only for demo purposes
  const [showElements, setShowElements] = useState(false);
  const [showCollectionBadge, setShowCollectionBadge] = useState(true);

  const onClickHandler_ToggleItemBadges = () => {
    setShowElements(!showElements);
  };
  const onClickHandler_ToggleTeamBadge = () => {
    setShowCollectionBadge(!showCollectionBadge);
  };

  const collectionBadges = showCollectionBadge ? props.collectionBadges : "";
  //--end=> only for demo purposes

  const favCount = props.favorite || "-1";

  return (
    <ShopItemStyled onClick={onClickHandler_ToggleItemBadges}>
      <ShopCardImage
        imgUrl={props.imgSrc}
        type={props.type}
        favorite={favCount}
      />

      <div className="info">
        <div className="info--top">
          <div className="info--top__left">
            <div className="collection-data">
              <div className="collection-data__name">
                {props.collectionName}
              </div>
              <div className="collection-data__annotations">
                {collectionBadges}
              </div>
            </div>
            <div className="card-name">{props.itemName}</div>
          </div>
          <div className="info--top__right">
            <span>Price</span>
            <div className="price">
              <div className="price__amount">{props.priceValue}</div>
              <div className="price__currency">{props.priceCurrency}</div>
            </div>
          </div>
        </div>
        <div className="info--bottom">
          <div className="annotations-icons">
            {props.annotations.map((el, i) => (
              <Tooltip content="Ice" key={i}>
                {el}
              </Tooltip>
            ))}
          </div>
          <div className="collection-supply">{props.collectionSupply}</div>
          <div className="bid">
            <span>Bid</span>
            <div className="bid__amount">{props.bidValue}</div>
            <div className="bid__currency">{props.priceCurrency}</div>
          </div>
        </div>
      </div>
    </ShopItemStyled>
  );
};

const ShopItemStyled = styled.div`
  width: 30rem;
  height: 40rem;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; */
  }

  .debug__image {
    width: 100%;
    height: 70%;
  }

  .info {
    width: 100%;
    height: 30%;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    &--top {
      width: 100%;
      height: 60%;
      padding-bottom: 1rem;
      border-bottom: 1px solid black;

      display: flex;
      flex-direction: row;

      &__left {
        width: 80%;
        padding-right: 2rem;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        .collection-data {
          display: flex;
          height: 40%;

          &__name {
            text-overflow: ellipsis;
            overflow: hidden;
            padding-right: 0.5rem;
          }
        }

        .card-name {
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }

      &__right {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-end;

        .price {
          display: flex;
          font-weight: 600;
          font-size: 1.4rem;

          &__amount {
            padding-right: 0.5rem;
          }
        }
      }
    }

    &--bottom {
      display: grid;
      height: 40%;
      padding-top: 0.5rem;
      grid-template-columns: 33% 1fr 33%;

      .annotations-icons {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;

        div {
          display: flex;
          flex: 0;
        }
      }

      .collection-supply {
        flex-basis: 0;
        flex-shrink: 0;
        flex-grow: 1;

        text-align: center;
      }

      .bid {
        flex-basis: 0;
        flex-grow: 1;
        flex-shrink: 0;

        display: flex;
        justify-content: end;

        color: #009aff;
        font-size: 1.1rem;
        font-weight: 600;

        div:not(:first-child) {
          padding-left: 0.3rem;
        }
      }
    }
  }
`;
export default ShopItemNew;
