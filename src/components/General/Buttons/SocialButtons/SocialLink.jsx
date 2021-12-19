import React from "react";
import styled from "styled-components";

import FAIcon from "../../FAIcon/FAIcon";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const socialIcons = {
  fb: {
    name: "Facebook",
    icon: faFacebook,
  },
  tw: {
    name: "Twitter",
    icon: faTwitter,
  },
  in: {
    name: "Instagram",
    icon: faInstagram,
  },
  email: {
    name: "email",
    icon: faPaperPlane,
  },
};

const SocialLink = (props) => {
  return (
    <Styled style={props.style} className={props.className}>
      <FAIcon icon={socialIcons[props.icon].icon} size={props.iconSize}></FAIcon>
    </Styled>
  );
};

const Styled = styled.a`
  width: 7rem;
  height: 7rem;
  background-color: none;

  border: 1px solid var(--color-black);
  border-radius: 1rem;
  color: var(--anchorTag-color-link);

  cursor: pointer;

  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s ease;

  &:hover {
    color: var(--color-white);
    background-color: var(--color-black);
  }
`;

export default SocialLink;
