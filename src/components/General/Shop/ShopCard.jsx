import React, { useState } from "react";
import styled from "styled-components";

import ShopCardImage from "./ShopCardImage";
import Tooltip from "../Tooltip/Tooltip";
import { printify } from "../../../helpers/PrintifyNumbers";
import Badge from "../../General/Badge/Badge";

const ShopCard = (props) => {
  //--start=> only for demo purposes
  const [showElements, setShowElements] = useState(false);
  // const [showCollectionBadge, setShowCollectionBadge] = useState(true);

  const onClickHandler_ToggleItemBadges = () => {
    setShowElements(!showElements);
  };
  // eslint-disable-next-line no-use-before-define
  // const onClickHandler_ToggleTeamBadge = () => {
  //   //eslint-disable-line
  //   setShowCollectionBadge(!showCollectionBadge);
  // };

  // const collectionBadges = showCollectionBadge ? props.collectionBadges : "";

  // el.collectionBadges.map(getBadgeIcons);
  //--end=> only for demo purposes

  const favCount = props.favorite || "-1";

  return (
    <Styled onClick={onClickHandler_ToggleItemBadges}>
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
                <a href="https://abv.bg">{props.collectionName}</a>
              </div>
              <div className="collection-data__annotations">
                {props.collectionBadges.map((badgeName, i) => (
                  <Tooltip content={badgeName} key={i}>
                    <Badge type="Collection" name={badgeName} />
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="card-name">{props.itemName}</div>
          </div>
          <div className="info--top__right">
            <span>Price</span>
            <div className="price">
              <div className="price__amount">{printify(props.priceValue)}</div>
              <div className="price__currency">{props.priceCurrency}</div>
            </div>
          </div>
        </div>
        <div className="info--bottom">
          <div className="annotations-icons">
            {props.annotationBadges.map((annotation, i) => (
              <Tooltip content={annotation} key={i}>
                <Badge type="Annotation" name={annotation} />
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
    </Styled>
  );
};

const Styled = styled.div`
  width: 30rem;
  height: 40rem;
  border-radius: 1rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 0px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* transform: translateY(-1px);  */
    /* border: none; */
    /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; //for white background  */
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
      height: 90%;
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
            overflow: hidden;
            padding-right: 0.5rem;

            display: flex;
            align-items: center;

            font-weight: 500;

            a {
              &:link,
              &:visited,
              &:active {
                color: inherit;
                text-decoration: inherit;
                font-weight: inherit;
              }

              &:hover {
                color: var(--anchorTag-color-hover);
              }
            }
          }

          &__annotations {
            display: flex;
            align-items: center;
          }
        }

        .card-name {
          text-overflow: ellipsis;
          overflow: hidden;

          font-size: 1.4rem;
          font-weight: 600;
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
export default ShopCard;
