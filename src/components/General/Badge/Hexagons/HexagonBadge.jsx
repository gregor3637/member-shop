import React from "react";
import styled from "styled-components";

import HexagonSVG from "../../../../img/svg/HexagonSVG";

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

import HexagonSVGNew from "../../../../img/svg/HexagonSVGNew";
import GradientRedBlue from "./Gradients/GradientRedBlue";
import GradientGreenToDarkBlue from "./Gradients/GradientGreenToDarkBlue";
import GradientRedViolete from "./Gradients/GradientRedViolete";
import GradientYellowGreen from "./Gradients/GradientYellowGreen";

const badgeInfo = {
  unique: {
    gradient: <GradientRedBlue id="unique" />,
    icon: faFingerprint,
  },
  apparel: {
    gradient: <GradientGreenToDarkBlue id="apparel" />,
    icon: faTshirt,
  },
  accessory: {
    gradient: <GradientRedViolete id="accessory" />,
    icon: faVial,
  },
  companion: {
    gradient: <GradientYellowGreen id="companion" />,
    icon: faPaw,
  },
};

const Badge = ({ type }) => {
  return (
    <Wrapper>
      <HexagonSVGNew gradient={badgeInfo[type].gradient} id={type} />
      <FontAwesomeIconX
        color="white"
        icon={badgeInfo[type].icon}
        size="1x"
        className="icon"
      />
      {/* <HexagonSVGNew gradient={testGradient} id={"test"} />
      <FontAwesomeIconX
        color="white"
        icon={faFingerprint}
        size="1x"
        className="icon"
      /> */}
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
    /* fill: "url(#gradientNew)"; */
    /* background: linear-gradient(#e66465, #9198e5); */
  }
`;

export default Badge;
