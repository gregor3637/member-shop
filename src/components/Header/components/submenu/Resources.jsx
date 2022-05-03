import styled from "styled-components";

import { LinkX, UlX, LiX } from "../StyleComponents";

import YouTube from "../../../../img/SocialNetworkIcons/YouTube";
import Discord from "../../../../img/SocialNetworkIcons/Discord";
import Twitter from "../../../../img/SocialNetworkIcons/Twitter";
import Instagram from "../../../../img/SocialNetworkIcons/Instagram";

const Resources = (props) => {
  return (
    <Wrapper>
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
            <SocialLinkX
              href={"https://www.youtube.com"}
              target="_blank"
              rel="noreferrer"
            >
              <YouTube />
            </SocialLinkX>

            <SocialLinkX
              href={"https://www.twitter.com"}
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </SocialLinkX>

            <SocialLinkX
              href={"https://www.instagram.com"}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </SocialLinkX>

            <SocialLinkX
              href={"https://www.discord.com"}
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
            </SocialLinkX>
          </SocialContainerX>
        </LiModifiedX>
      </UlX>
    </Wrapper>
  );
};

const SocialLinkX = styled.a`
  /* background: var(--test-r); */
  height: 2rem;
  color: var(--color-grey40);

  &:hover {
    color: var(--color-black);
  }
`;

const SocialContainerX = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: red;
  fill: red;
`;

const LiModifiedX = styled(LiX)`
  margin-top: 1rem;
  padding: 0;

  border-top: 1px solid var(--color-grey40);
  border-radius: 0;

  &:last-child:hover {
    box-shadow: none;
  }

  &:hover {
    /* box-shadow: var(--boxShadow-dropdown); */
    background: var(--color-none);
  }
`;

const Wrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
`;

export default Resources;
