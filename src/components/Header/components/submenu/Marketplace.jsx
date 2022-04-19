import styled from "styled-components";

import { LinkX, UlX, LiX, ImgX } from "../StyleComponents";
import All from "../../../../img/HeaderNav/All.svg";

const Marketplace = () => {
  return (
    <UlX>
      <LiX>
        <LinkModifiedX to="/help">
          <ImgX src={All} alt="" />
          <span>New</span>
        </LinkModifiedX>
      </LiX>
      <LiX>
        <LinkX to="/docs">
          {/* <ImgX src={IMG} alt="" /> */}
          <span>🌈  Art</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/docs">
          {/* <ImgX src={IMG} alt="" /> */}
          <span>🎵  Music</span>
        </LinkX>
      </LiX>
    </UlX>
  );
};

const LinkModifiedX = styled(LinkX)`
  img {
    height: 2rem;
  }
`;

export default Marketplace;
