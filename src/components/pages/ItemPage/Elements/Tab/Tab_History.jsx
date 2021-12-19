import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../../../../General/Tooltip/Tooltip";

// TODO: is this used ?!
// const historyData = [
//   {
//     id: 1,
//     event: "Mint",
//     price: 1234567890123456789,
//     currency: "ETH",
//     from: "B323234965412365412541294311289541625131628541269",
//     to: "Crypto-Kitties-Auction",
//     date: "2 years ago41536214391",
//   },
//   {
//     id: 2,
//     event: "Transfer",
//     price: 12,
//     currency: "ETH",
//     from: "B32323",
//     to: "Crypto-Kitties-Auction",
//     date: "2 years ago",
//   },
//   {
//     id: 3,
//     event: "List",
//     price: 12,
//     currency: "ETH",
//     from: "B32323",
//     to: "Crypto-Kitties-Auction",
//     date: "2 years ago",
//   },
//   {
//     id: 3,
//     event: "Sale",
//     price: 12,
//     currency: "ETH",
//     from: "B32323",
//     to: "Crypto-Kitties-Auction1876d46asdsa",
//     date: "2 years ago",
//   },
//   {
//     id: 3,
//     event: "Bid",
//     price: 12,
//     currency: "ETH",
//     from: "B32323",
//     to: "Crypto-Kitties-Auction",
//     date: "2 years ago",
//   },
// ];

const map = {
  Mint: faBabyCarriage,
  Transfer: faExchangeAlt,
  List: faTag,
  Sale: faShoppingCart,
  Bid: faHandPaper,
  BidCancel: faHandRock,
};

const Tab_History = ({ history }) => {
  const elements = history.map((_, idx, arr) => {
    let el = arr[arr.length - 1 - idx];
    const icon = map[el.event];
    const iconContainer = (
      <Tooltip placement="right" content={el.event} key={idx}>
        <EventIconContainerX>
          <StyledIconFontAwesome
            icon={icon}
            className="icon"
          ></StyledIconFontAwesome>
        </EventIconContainerX>
      </Tooltip>
    );

    return (
      <ElementX key={idx}>
        <ShortColumnX style={{ paddingLeft: "0.5rem" }}>
          <div>{iconContainer}</div>
        </ShortColumnX>
        <ShortColumnX>
          {el.price}
          <span> {el.currency}</span>
        </ShortColumnX>
        <LongColumnX>
          <a href="abv.bg">{el.from}</a>
        </LongColumnX>
        <LongColumnX>
          <a href="abv.bg">{el.to}</a>
        </LongColumnX>
        <MediumColumnX>
          <DateX href="abv.bg">
            <span>{el.date}</span>
            <StyledIconFontAwesome
              icon={faExternalLinkAlt}
              className="icon"
            ></StyledIconFontAwesome>
          </DateX>
        </MediumColumnX>
      </ElementX>
    );
  });

  return (
    <Styled>
      <NavX>
        <ShortColumnX style={{ paddingLeft: "0.5rem" }}>Event</ShortColumnX>
        <ShortColumnX>Price</ShortColumnX>
        <LongColumnX>From</LongColumnX>
        <LongColumnX>To</LongColumnX>
        <MediumColumnX>Date</MediumColumnX>
      </NavX>
      <Timeline></Timeline>
      {elements}
    </Styled>
  );
};

const EventIconContainerX = styled.div`
  width: 3rem;
  height: 3rem;

  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-white);

  display: flex;

  justify-content: center;
  align-items: center;
`;

const StyledIconFontAwesome = styled(FontAwesomeIcon)``;
const ElementX = styled.div`
  margin-bottom: 1.5rem;
  z-index: 5;

  display: flex;
  align-items: center;

  font-size: 1.4rem;

  svg {
    font-size: 1rem;
  }

  a {
    color: #2081e2;
    text-decoration: none;
  }
`;

const DateX = styled.a`
  display: flex;
  align-items: center;

  span {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ${StyledIconFontAwesome} {
    margin-right: 0.5rem;
  }
`;

const TruncateX = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ShortColumnX = styled(TruncateX)`
  flex: 1 0 50px;
  margin-right: 2rem;

  display: flex;
`;

const MediumColumnX = styled(TruncateX)`
  flex: 1 0 110px;
`;

const LongColumnX = styled(TruncateX)`
  flex: 1 0 150px;
  margin-right: 1rem;
`;

const NavX = styled.div`
  position: sticky;
  padding-top: 1rem;
  padding-bottom: 1rem;
  top: 11.5rem;
  z-index: 10;
  background-color: var(--color-white);
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 248, 253, 1) 100%
  );
  display: flex;

  font-size: 1rem;
  font-weight: 600;
`;

const Timeline = styled.div`
  width: 5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 2rem;
    width: 0;
    height: calc(100% - 2rem);
    border: 1px dotted #aaaaaa;
    border-style: dashed;
  }
`;

const Styled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Tab_History;
