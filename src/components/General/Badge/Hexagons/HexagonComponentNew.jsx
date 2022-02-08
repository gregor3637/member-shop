import React from "react";
import styled from "styled-components";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faEye,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

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
import HexagonSVGNewNewNew from "../../../img/svg/HexagonSVGNewNewNew";

const HexagonComponentNew = (props) => {
  return (
    <Wrapper>
      <HexagonSVGNewNewNew />
      <FontAwesomeIconX
        color="white"
        icon={faFingerprint}
        size="1x"
        className="icon"
      />
    </Wrapper>
  );
};

const FontAwesomeIconX = styled(FontAwesomeIcon)`
  position: absolute;
`;

const Wrapper = styled.div`
  width: max-content;
  height: max-content;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    //hexagon
    width: 2rem;
    height: auto;
    fill: "url(#gradientNew)";
  }
`;

export default HexagonComponentNew;
