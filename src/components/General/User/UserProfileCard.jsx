import React from "react";
import styled from "styled-components";

const UserProfileCard = (props) => {
  return (
    <UserProfileCardStyled className={props.className}>
      <div>
        <img
          src="https://f8n-production.imgix.net/creators/profile/oqmfnwhtq-untitled-artwork-gif-dxqjb7.gif?q=45&w=34&h=34&auto=format%2Ccompress&fit=crop&dpr=2"
          alt=""
        />
      </div>
      <span>Border Apes Yached Club</span>
    </UserProfileCardStyled>
  );
};

const UserProfileCardStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;

    margin-right: 1rem;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default UserProfileCard;
