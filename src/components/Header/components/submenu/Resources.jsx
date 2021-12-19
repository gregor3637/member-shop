import styled from "styled-components";
import { Link } from "react-router-dom";

import IMG from "../../../../img/header/navigation/allnfts-light.svg";
import { LinkX, UlX, LiX } from "../StyleComponents";

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
      <LiXLocale>
        <SocialContainer>
          <SocialLink to="www.youtube.com">
            <ImgX src={IMG} alt="" />
          </SocialLink>

          <SocialLink to="www.tweeter.com">
            <ImgX src={IMG} alt="" />
          </SocialLink>

          <SocialLink to="www.instagram.com">
            <ImgX src={IMG} alt="" />
          </SocialLink>

          <SocialLink to="www.discord.com">
            <ImgX src={IMG} alt="" />
          </SocialLink>
        </SocialContainer>
      </LiXLocale>
    </UlX>
  );
};

const SocialLink = styled(Link)`
  height: 2rem;
`;

const SocialContainer = styled.div`
  padding: 0 1rem;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImgX = styled.img`
  height: 2rem;

  &:hover {
    background-color: red;
  }
`;

const LiXLocale = styled(LiX)`
  &:last-child:hover {
    box-shadow: none;
  }
`;

export default Resources;
