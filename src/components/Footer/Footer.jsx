import React from "react";
import styled from "styled-components";

import MainPageInputStyled from "../Inputs/MainPageInput";
import ButtonRounded from "../General/Buttons/ButtonRounded";
import SocialLink from "../General/Buttons/SocialButtons/SocialLink";

const Footer = (props) => {
  return (
    <Wrapper>
      <Div>
        <Nav>
          <span>Marketplace</span>
          <a href="abv.bg">All</a>
          <a href="abv.bg">New</a>
          <a href="abv.bg">Artists</a>
          <a href="abv.bg">Settings</a>
        </Nav>
        <Nav>
          <span>My Account</span>
          <a href="abv.bg">Profile</a>
          <a href="abv.bg">Favorites</a>
          <a href="abv.bg">My Collections</a>
          <a href="abv.bg">Settings</a>
        </Nav>
        <Nav>
          <span>Company</span>
          <a href="abv.bg">About</a>
          <a href="abv.bg">Terms</a>
          <a href="abv.bg">Careers</a>
          <a href="abv.bg">Help center</a>
          <a href="abv.bg">Privacy policy</a>
        </Nav>
        <ContactsDiv>
          <InputDiv>
            <span>Get the latest updates</span>
            <InputInnerDiv>
              <MainPageInputStyled
                style={{ paddingLeft: "1rem" }}
                type="text"
                placeholder="Search items, collections and accounts"
              />
              <ModifiedButton>Sign up</ModifiedButton>
            </InputInnerDiv>
            <br />
          </InputDiv>
          <SocialNav>
            <SocialLink style={{ marginRight: "1rem" }} icon="fb" />
            <SocialLink style={{ marginRight: "1rem" }} icon="tw" />
            <SocialLink style={{ marginRight: "1rem" }} icon="in" />
            <SocialLink style={{ marginRight: "1rem" }} icon="email" />
          </SocialNav>
        </ContactsDiv>
      </Div>
    </Wrapper>
  );
};

const ModifiedButton = styled(ButtonRounded)`
  margin-left: 1rem;
  padding: 1rem;

  background-color: var(--anchorTag-color-link);

  font-size: 1.6rem;
  color: var(--color-white);

  transition: all 0.4s ease;

  &:hover {
    background-color: var(--color-black);
  }
`;

const Wrapper = styled.footer`
  position: relative;
  margin-top:auto; 

  /* clear: both;
  height: 300px;
  margin-top: -300px; */

  padding: 3rem 14rem 5rem 14rem;
  background-color: #dddccf;

  &:before {
    background: linear-gradient(-45deg, #ffffff 8px, transparent 0),
      linear-gradient(45deg, #ffffff 8px, transparent 0);
    background-position: left-bottom;
    background-repeat: repeat-x;
    background-size: 16px 16px;
    content: " ";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 16px;
    transform: rotate(180deg);
  }
`;

const Div = styled.div`
  display: flex;

  span {
    font-size: 1.6rem;
    font-weight: 600;
    padding-bottom: 1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  flex: 1;



  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: var(--anchorTag-color-link);
    text-decoration: inherit;
    font-weight: 500;
    font-size: 1.4rem;

    &:hover {
      color: var(--color-black);
    }
  }
`;

const InputInnerDiv = styled.div`
  position: relative;

  display: flex;
`;

const ContactsDiv = styled.div`
  flex: 1.5;
`;

const SocialNav = styled.nav`
  display: flex;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export default Footer;
