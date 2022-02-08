import React from "react";
import styled from "styled-components";

import LikesButton from "../../Buttons/LikesButton";

const AssetCardHeader = ({
  data: {
    general: {
      project: { name: projectName },
      socials: { favorites },
    },
  },
  className,
}) => {
  return (
    <Wrapper className={className}>
      <InnerWrapperX>
        <DescriptionX>
          <ImgWrapperX>
            <img
              src="https://lh3.googleusercontent.com/YLakJPj0dPFefWeWUnbX34_WNh0sedXHO0DLzrfR87UCvXUv4jc2f1bMBvYvXZ1psywbwkDgaZZyRZsNkDvl2OSqhy6ZEIVYPqIv=s64"
              alt="avatar"
            />
          </ImgWrapperX>
          <h2>{projectName}</h2>
        </DescriptionX>

        <LikesButtonX favorite={favorites} />
      </InnerWrapperX>
    </Wrapper>
  );
};

const ImgWrapperX = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  flex: 0 0 3.2rem;

  border: 1px solid var(--border-color);
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const DescriptionX = styled.a`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  overflow: hidden; // min-width: 0;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const LikesButtonX = styled(LikesButton)`
  overflow: hidden;
  width: min-content;
`;

const InnerWrapperX = styled.div`
  padding-top: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

export default AssetCardHeader;
