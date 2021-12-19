import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

import ReportModal from "../../../General/Modal/Report/ReportModal";
import ShareModalOverlay from "../../../General/Modal/ShareModalOverlay";

const ItemAdditionalOptions = (props) => {
  const [instance, setInstance] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const closeReport = () => {
    setShowReport(false);
  };

  const closeShare = () => {
    setShowShare(false);
  };

  const onReportHandler = () => {
    instance.hide();
    setShowReport(true);
  };

  const onShareHandler = () => {
    instance.hide();
    setShowShare(true);
  };

  return (
    <>
      {showReport && <ReportModal onClose={closeReport} />}
      {showShare && <ShareModalOverlay onClose={closeShare} />}
      <TippyX
        content={
          <TippyWrapper>
            <ButtonX>New bid</ButtonX>
            <SeparatorX>
              <div></div>
            </SeparatorX>
            <ButtonX onClick={onReportHandler}>Report</ButtonX>
            <ButtonX onClick={onShareHandler}>Share</ButtonX>
          </TippyWrapper>
        }
        onCreate={setInstance}
        arrow={false}
        interactive
        appendTo="parent"
        placement="bottom-start"
        trigger="click"
        hideOnClick
      >
        {props.children}
      </TippyX>
    </>
  );
};

const TippyWrapper = styled.div`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SeparatorX = styled.div`
  width: 100%;
  padding: 1rem 1rem;

  div {
    max-width: 100%;
    height: 1px;
    background-color: var(--color-border);
  }
`;

const ButtonX = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;

  display: flex;

  font-size: 1.4rem;
  font-weight: 600;

  background-color: var(--color-white);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--color-border-light);
  }
`;

const TippyX = styled(Tippy)`
  background-color: var(--color-white);
  z-index: 500;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 1rem;
`;

export default ItemAdditionalOptions;
