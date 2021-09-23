import React, { useState } from "react";
import styled from "styled-components";
import ShopCardImage from "./ShopCardImage";

import Tooltip from "../Tooltip";

const ShopItem = (props) => {
  const [showElements, setShowElements] = useState(false);

  const onOverHandler = () => {
    setShowElements(!showElements);
  };

  return (
    <ShopItemStyled onClick={onOverHandler}>
      <ShopCardImage
        imgUrl="https://public.nftstatic.com/static/nft/zipped/316b937f6ce043ca885aef2908984df9_zipped.png"
        type={props.type}
        favorites={props.favorite}
      />

      <div className="info">
        <div className="info--top">
          <div className="info--top__left">
            <div className="collection-data">
              <div className="collection-data__name">{props.collection}</div>
              <div className="collection-data__annotations">
                {props.collectionBadges}
              </div>
            </div>
            <div className="card-name">{props.name}</div>
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
            <Tooltip content="Ice">{props.annotations} </Tooltip>
            <Tooltip content="Ice">{props.annotations} </Tooltip>
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
            {showElements && (
              <Tooltip content="Ice">{props.annotations} </Tooltip>
            )}
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
  height: 42rem;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .info {
    width: 100%;
    flex: 1;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    &--top {
      width: 100%;
      height: 70%;
      padding-bottom: 2rem;
      border-bottom: 1px solid black;

      flex: 0;
      display: flex;
      flex-direction: row;

      &__left {
        flex-basis: 80%;

        .collection-data {
          display: flex;
        }
      }

      &__right {
        flex-basis: 20%;
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
      height: 30%;
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
export default ShopItem;