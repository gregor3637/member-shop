import React, { useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AssetCardActionButton from "../../../../../General/Buttons/AssetCardActionButton/AssetCardActionButton";
import ReportModal from "../../../../../General/Modal/Report/ReportModal";
import ShareModalOverlay from "../../../../../General/Modal/ShareModalOverlay";

// import ReportModal from "../../../General/Modal/Report/ReportModal";
// import ShareModalOverlay from "../../../General/Modal/ShareModalOverlay";

const MoreButtonContent = ({ className, isBuyActive, isBidActive }) => {
  const [instance, setInstance] = useState(null);
  const [isTippyOpen, setIsTippyOpen] = useState(false);

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
    setIsTippyOpen(false);
    setShowReport(true);
  };

  const onShareHandler = () => {
    instance.hide();
    setIsTippyOpen(false);
    setShowShare(true);

    console.log("instance ", instance);
  };

  const version = className;

  return (
    <>
      {showReport && <ReportModal onClose={closeReport} />}
      {showShare && <ShareModalOverlay onClose={closeShare} />}

      <TippyX
        content={
          <TippyContentX>
            <AssetCardActionButton onClick={onShareHandler} label={"Share"} />
            <AssetCardActionButton onClick={onReportHandler} label={"Report"} />
          </TippyContentX>
        }
        onCreate={setInstance}
        onClickOutside={() => setIsTippyOpen(false)}
        arrow={false}
        interactive
        appendTo="parent"
        placement="bottom-end"
        trigger="click"
        hideOnClick
      >
        <MoreX
          className={isTippyOpen ? version + " more-opened" : version}
          onClick={() => setIsTippyOpen((old) => !old)}
        >
          <MoreHorizIcon />
        </MoreX>
      </TippyX>
    </>
  );
};

const MoreX = styled.div`
  width: 3rem;
  height: 2.6rem;
  padding: 0.5rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-black);
  border: 1px solid var(--color-none);
  /* border: 1px solid var(--border-color); */
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

export default MoreButtonContent;
