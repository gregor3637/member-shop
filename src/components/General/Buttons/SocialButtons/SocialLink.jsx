import React from "react";
import styled from "styled-components";

// import FAIcon from "../../FAIcon/FAIcon";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Medium from "../../../../img/SocialNetworkIcons/Medium";
import YouTube from "../../../../img/SocialNetworkIcons/YouTube";
import Telegram from "../../../../img/SocialNetworkIcons/Telegram";
import Discord from "../../../../img/SocialNetworkIcons/Discord";
import Twitter from "../../../../img/SocialNetworkIcons/Twitter";
import Instagram from "../../../../img/SocialNetworkIcons/Instagram";

// const socialIcons = {
//   fb: {
//     name: "Facebook",
//     icon: faFacebook,
//   },

//   email: {
//     name: "email",
//     icon: faPaperPlane,
//   },
// };

const other = {
  in: {
    name: "Instagram",
    icon: <Instagram />,
  },
  tw: {
    name: "Twitter",
    icon: <Twitter />,
  },
  dis: {
    name: "Discord",
    icon: <Discord />,
  },
  tel: {
    name: "Telegram",

    icon: <Telegram />,
  },
  yt: {
    name: "YouTube",
    icon: <YouTube />,
  },
  med: {
    name: "Medium",
    icon: <Medium />,
  },
};

const SocialLink = ({ icon, className, style, iconSize }) => {
  return (
    <Wrapper style={style} className={className}>
      {other[icon].icon}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  width: 5rem;
  height: 5rem;
  background-color: none;

  /* border: 1px solid var(--color-black); */
  background: var(--color-grey20);
  border-radius: 1rem;
  color: var(--anchorTag-color-link);
  color: var(--color-black);

  cursor: pointer;

  align-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.4s ease;

  &:hover {
    background: var(--color-grey40);
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default SocialLink;
