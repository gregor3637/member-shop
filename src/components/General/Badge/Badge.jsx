import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faEye,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faRavelry} from "@fortawesome/free-brands-svg-icons";

import {
  faFingerprint,
  faTshirt,
  faHammer,
  faShieldAlt,
  faHardHat,
  faVial,
  faPaw,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  Collection: {
    Verified: faCheckCircle,
    New: faStar,
    Trending: faEye,
    default: faTimesCircle,
  },
  Annotation: {
    rare: faRavelry,
    unique: faFingerprint,

    wearable: faTshirt,
    weapon: faHammer,
    armor: faShieldAlt,
    shield: faShieldAlt,
    helmet: faHardHat,
    consumable: faVial,

    companion: faPaw,
    mercenaries: faUserFriends,

    default: faTimesCircle,
  },
  default: faTimesCircle,
};

const Styled = styled.div`
  padding: 0 0.2rem;
  font-size: 1.2rem;
`;

const Badge = ({ type, name }) => {
  let Icon = icons["default"];

  if (icons[type] && icons[type][name]) {
    Icon = icons[type][name];
  }

  const IconContainer = (
    <FontAwesomeIcon icon={Icon} className="icon"></FontAwesomeIcon>
  );

  return <Styled>{IconContainer}</Styled>;
};

export default Badge;
