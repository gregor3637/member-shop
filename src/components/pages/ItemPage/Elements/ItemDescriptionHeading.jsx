import React, { useContext} from "react";
import styled from "styled-components";

import LikesButton from "../../../General/Buttons/LikesButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import ItemCardContext from "../../../../store/ItemCardContext";
import CreditBlock from "./Creadits/CreditBlock";
import ItemAdditionalOptions from "./ItemAdditionalOptions";

const ItemDescriptionHeading = () => {
  const ctx = useContext(ItemCardContext);

  return (
    <Styled>
      <DivX>
        <TopX>
          <LeftX>
            <h2>{ctx.details.name}</h2>
          </LeftX>
          <RightHeadingX>
            <LikesButtonOverrided favorite={ctx.favorite} />
            <ItemAdditionalOptions>
              <MoreX>
                <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
              </MoreX>
            </ItemAdditionalOptions>
          </RightHeadingX>
        </TopX>
        <Description>
          <p>{ctx.details.description}</p>
        </Description>
        <BotX>
          <CreditBlock
            title="Creator"
            user={ctx.creator}
            annotations={ctx.creator.royalties + "% royalties"}
          />
          <CreditBlock title="Owner" user={ctx.ownersData[0].user} />
        </BotX>
      </DivX>
    </Styled>
  );
};

const Description = styled.div`
  margin: 2rem 0;

  font-size: 1.2rem;
  font-weight: 600;
`;

const BotX = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopX = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivX = styled.div`
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LeftX = styled.div`
  overflow: hidden;

  h2 {
    font-size: 3rem;
  }
`;

const RightHeadingX = styled.div`
  position: relative;
  margin-left: 1rem;

  align-self: start;

  display: flex;
`;

const MoreX = styled.div`
  padding: 0 2rem;

  display: flex;
  align-items: center;

  color: var(--color-black);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    border-color: var(--color-black);
  }
`;

const LikesButtonOverrided = styled(LikesButton)`
  padding: 1rem 1rem;
  margin-right: 2rem;

  color: var(--color-black);

  border: 1px solid var(--border-color);
  border-radius: 1rem;
  cursor: pointer;

  svg {
    color: var(--color-black);

    &.clicked {
      color: var(--color-red-pale);
    }
  }

  &:hover {
    border-color: var(--color-black);
  }
`;
const Styled = styled.header`
  position: relative;
`;

export default ItemDescriptionHeading;
