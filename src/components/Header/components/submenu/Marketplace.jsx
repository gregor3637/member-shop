import styled from "styled-components";

import { LinkX, UlX, LiX, ImgX } from "../StyleComponents";
import AutoAwesomeMotionOutlinedIcon from "@mui/icons-material/AutoAwesomeMotionOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import GrainOutlinedIcon from "@mui/icons-material/GrainOutlined";

const Marketplace = () => {
  return (
    <Wrapper>
      <UlX>
        <LiX>
          <LinkModifiedX to="/marketplace">
            <GrainOutlinedIcon />
            <span>Browse</span>
          </LinkModifiedX>
        </LiX>
        <LiX>
          <LinkModifiedX to="/trending">
            <InsightsOutlinedIcon />
            <span>Trending</span>
          </LinkModifiedX>
        </LiX>
        <LiX>
          <LinkModifiedX to="/collections">
            <AutoAwesomeMotionOutlinedIcon />
            <span>Collections</span>
          </LinkModifiedX>
        </LiX>
      </UlX>
    </Wrapper>
  );
};

const LinkModifiedX = styled(LinkX)`
  font-size: 1.6rem;
  font-weight: 700;

  display: flex;

  img {
    color: black;
    height: 2rem;
  }

  svg {
    /* color: var(--color-grey50); */
    transform: scale(1.6);
    margin: 0 0.6rem;
    margin-right: 1.6rem;
  }
`;

const Wrapper = styled.div`
  margin: 1rem;
`;

export default Marketplace;
