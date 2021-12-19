import React from "react";
import styled from "styled-components";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PanoramaOutlinedIcon from "@material-ui/icons/PanoramaOutlined";

import LikesButton from "../../General/Buttons/LikesButton";
import TooltipSticker from "../../General/Tooltip/TooltipSticker";

const ShopCardImage = (props) => {
  let type = props.type || "Img";
  let typeIcon = <PanoramaOutlinedIcon />;

  if (props.type === "gif") {
    typeIcon = <PlayArrowIcon />;
  }

  return (
    <Styled className={props.className}>
      <img src={props.imgUrl} alt="" />

      <TypeStyledS>
        <TooltipSticker padding={"1rem 1rem"} content={type}>
          {typeIcon}
        </TooltipSticker>
      </TypeStyledS>

      <StickerX>
        <TooltipSticker padding={"1rem .5rem"} content="Favorite">
          <LikesButtonOverridedX favorite={props.favorite} />
        </TooltipSticker>
      </StickerX>
    </Styled>
  );
};

const LikesButtonOverridedX = styled(LikesButton)`
  color: var(--color-white);
`;

const Styled = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 70%;

  img {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StickerX = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

const TypeStyledS = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;

  color: white;

  svg {
    display: flex;
  }
`;

export default ShopCardImage;
