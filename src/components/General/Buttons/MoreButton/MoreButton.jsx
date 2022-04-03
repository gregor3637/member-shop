import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import AssetCardActionButton from "../AssetCardActionButton/AssetCardActionButton";
import ColorfulButton from "../AssetCardActionButton/ColorfulButton/ColorfulButton";

const MoreButton = ({ id, className, isBuyActive, isBidActive }) => {
  const history = useHistory();
  const [instance, setInstance] = useState(null);
  const [isTippyOpen, setIsTippyOpen] = useState(false);

  const detailsHandler = () => {
    history.push(`item/${id}`);
  };

  const onReportHandler = () => {
    instance.hide();
    // setShowReport(true);
  };

  const onShareHandler = () => {
    instance.hide();
    // setShowShare(true);

    console.log("instance ", instance);
  };

  const version = className;

  return (
    <TippyX
      content={
        <TippyContentX>
          <ColorfulButton label="Buy" isDisabled={!isBuyActive} />
          <ColorfulButtonX label="Bid" isDisabled={!isBidActive} />
          <SeparatorX>
            <div></div>
          </SeparatorX>

          <AssetCardActionButton onClick={detailsHandler} label={"Details"} />
          <AssetCardActionButton onClick={onShareHandler} label={"Share"} />
          <AssetCardActionButton onClick={onReportHandler} label={"Report"} />
        </TippyContentX>
      }
      onCreate={setInstance}
      onClickOutside={() => setIsTippyOpen(false)}
      arrow={false}
      interactive
      appendTo="parent"
      placement="bottom-start"
      trigger="click"
      hideOnClick
    >
      <MoreX
        className={isTippyOpen ? version + " more-opened" : version}
        onClick={() => setIsTippyOpen((old) => !old)}
      >
        <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
      </MoreX>
    </TippyX>
  );
};

const ColorfulButtonX = styled(ColorfulButton)`
  margin-top: 0.5rem;
`;

const MoreX = styled.div`
  width: 3rem;
  height: 2.6rem;
  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-black);
  border: 1px solid var(--border-color);
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey20);
  }

  &.more-opened {
    background: var(--color-blue);
    border: 1px solid var(--color-none);

    svg {
      color: white;
    }
  }
`;

//-------------------------

const SeparatorX = styled.div`
  width: 100%;
  padding: 1rem 1rem;

  div {
    max-width: 100%;
    height: 1px;
    background-color: var(--color-border);
  }
`;

const TippyContentX = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TippyX = styled(Tippy)`
  background-color: var(--color-white);
  z-index: 500;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 1rem;
`;

export default MoreButton;
