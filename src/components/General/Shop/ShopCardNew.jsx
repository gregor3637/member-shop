import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ShopCardImage from "./ShopCardImage";
import Tooltip from "../Tooltip/Tooltip";
import { printify } from "../../../helpers/PrintifyNumbers";
import Badge from "../../General/Badge/Badge";

const ShopCardNew = ({ data }) => {
  const id = data.id;
  const imgSrc = data.imgSrc;
  const type = data.type;
  const favCount = data.favorite || "-1";
  const collectionName = data.collectionName;
  const collectionBadges = data.collectionBadges;
  const itemName = data.details.name;
  const priceValue = data.details.listPrice;
  const priceCurrency = data.currency;
  const bidValue = data.bids[data.bids.length - 1].value;
  const collectionSupply = data.details.edition + "/" + data.details.editionSupply;
  const annotationBadges = data.details.annotations;

  return (
    <Styled>
      <LinkX to={`item/${id}`}>
        <ShopCardImageOverriX imgUrl={imgSrc} type={type} favorite={favCount} />
        <div className="info">
          <div className="info--top">
            <div className="info--top__left">
              <div className="collection-data">
                <div className="collection-data__name">
                  <div to="https://abv.bg">{collectionName}</div>
                </div>
                <div className="collection-data__annotations">
                  {collectionBadges.map((badgeName, i) => (
                    <Tooltip content={badgeName} key={i}>
                      {/* <Badge type="Collection" name={badgeName} /> */}
                    </Tooltip>
                  ))}
                </div>
              </div>
              <div className="card-name">{itemName}</div>
            </div>
            <div className="info--top__right">
              <span>Price</span>
              <div className="price">
                <div className="price__amount">{printify(priceValue)}</div>
                <div className="price__currency">{priceCurrency}</div>
              </div>
            </div>
          </div>
          <div className="info--bottom">
            <div className="annotations-icons">
              {annotationBadges.map((annotation, i) => (
                <Tooltip content={annotation} key={i}>
                  <Badge type="Annotation" name={annotation} />
                </Tooltip>
              ))}
            </div>
            <div className="collection-supply">{collectionSupply}</div>
            <div className="bid">
              <span>Bid</span>
              <div className="bid__amount">{bidValue}</div>
              <div className="bid__currency">{priceCurrency}</div>
            </div>
          </div>
        </div>
      </LinkX>
    </Styled>
  );
};

const ShopCardImageOverriX = styled(ShopCardImage)`
  flex: 5;
`;

const LinkX = styled(Link)`
  width: 26rem;
  height: 36rem;

  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: var(--color-text);

  border-radius: 1rem;
  border-bottom: 1px solid var(--color-border-light);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* transform: translateY(-1px);  */
    /* box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px; //for white background  */
  }

  .info {
    /* background-color: green; */
    margin: 0.5rem 1rem;

    flex: 2;

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

const Styled = styled.article`
  /* background-color: red; */
`;
export default ShopCardNew;
