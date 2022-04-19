import styled from "styled-components";
import { Link } from "react-router-dom";

import { LinkX, UlX, LiX } from "../StyleComponents";

import YouTube from "../../../../img/SocialNetworkIcons/YouTube";
import Discord from "../../../../img/SocialNetworkIcons/Discord";
import Twitter from "../../../../img/SocialNetworkIcons/Twitter";
import Instagram from "../../../../img/SocialNetworkIcons/Instagram";

const Resources = (props) => {
  return (
    <UlX>
      <LiX>
        <LinkX to="/helppp">
          <span>HelpCenter</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/docs">
          <span>Docs</span>
        </LinkX>
      </LiX>
      <LiModifiedX>
        <SocialContainerX>
          <SocialLinkX to="www.youtube.com">
            <YouTube />
          </SocialLinkX>

          <SocialLinkX to="www.twitter.com">
            <Twitter />
          </SocialLinkX>

          <SocialLinkX to="www.instagram.com">
            <Instagram />
          </SocialLinkX>

          <SocialLinkX to="www.discord.com">
            <Discord />
          </SocialLinkX>
        </SocialContainerX>
      </LiModifiedX>
    </UlX>
  );
};

const SocialLinkX = styled(Link)`
  height: 2rem;
  color: var(--color-grey40);

  &:hover {
    color: var(--color-black);
  }
`;

const SocialContainerX = styled.div`
  padding: 0 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: red;
  fill: red;
`;

const ImgX = styled.img`
  height: 2rem;

  &:hover {
    background-color: red;
  }
`;

const LiModifiedX = styled(LiX)`
  &:last-child:hover {
    box-shadow: none;
  }
`;

export default Resources;
