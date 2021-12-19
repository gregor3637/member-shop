import React, { useContext } from "react";
import styled from "styled-components";
import ItemCardContext from "../../../../store/ItemCardContext";
import ButtonRounded from "../../../General/Buttons/ButtonRounded";

const ItemDescriptionFooter = () => {
  const ctx = useContext(ItemCardContext);
  
  return (
    <Styled>
      <Button>
        Buy for {ctx.sellValue} {ctx.chainAbbreviation}
      </Button>
      <Button>Place a bid</Button>
    </Styled>
  );
};

const Button = styled(ButtonRounded)`
  padding: 1rem 3rem;
  flex: 1;

  font-size: 2.2rem;
`;

const Styled = styled.footer`
  position: sticky;
  width: 100%;
  bottom: 0px;
  padding: 4rem 0 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
  backdrop-filter: blur(5px) saturate(200%);
  -webkit-backdrop-filter: blur(5px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.8);
  /* border-radius: 12px; */
  border-top: 1px solid var(--border-color);

  button:first-child {
    margin-right: 3rem;
  }
`;

export default ItemDescriptionFooter;
