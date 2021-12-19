import React from "react";
import styled from "styled-components";

import img_1 from "../../../../../img/sectionCard/SectionCard_Articles.jpg";
import img_2 from "../../../../../img/sectionCard/SectionCard_Careers.jpg";
import img_3 from "../../../../../img/sectionCard/SectionCard_Events.jpg";

import CardItem from "./CardItem";

const Styled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;

const Cards = (props) => {
  const cards = {
    eventInfo: {
      img: img_1,
      sectionName: "Events",
      cardTitle: "Find out current, past and future events",
      cardDescription:
        "Discover extraordinary  events which might change the way you play, communicate.",
      backgroundColor: "#bc3e54",
    },
    articleInfo: {
      img: img_2,
      sectionName: "Articles",
      cardTitle: "Shared knowledge and opinions",
      cardDescription:
        "Read direct from the source. Find interesting and not so much known info about many things you would have thought that you know.",
      backgroundColor: "#f2b28f",
    },
    careerInfo: {
      img: img_3,
      sectionName: "Careers",
      cardTitle: "Your future is Our future",
      cardDescription: "Have the skills we need ? Don't hesitate, send us a CV",
      backgroundColor: "#000000",
    },
  };

  return (
    <Styled>
      <CardItem cardInfo={cards.eventInfo} />
      <CardItem cardInfo={cards.articleInfo} />
      <CardItem cardInfo={cards.careerInfo} />
    </Styled>
  );
};

export default Cards;
