import React, { useState } from "react";
import styled from "styled-components";

import cloneX_Img from "../../../../../../img/marketCollectionsAvatar/cloneX.png";
import cryptoPunks_Img from "../../../../../../img/marketCollectionsAvatar/cryptoPunks.png";
import rtfkt_img from "../../../../../../img/marketCollectionsAvatar/RTFKT.png";
import slotie_img from "../../../../../../img/marketCollectionsAvatar/slotie.gif";
import sandbox_img from "../../../../../../img/marketCollectionsAvatar/theSandbox.png";

import Checkmark from "../../../../../General/Checkmark/Checkmark";
import useBouncer from "../../../../../../hooks/useBouncer";

const reasonsMap = {
  cloneX: { label: "cloneX", isSelected: false, img: cloneX_Img },
  rtfkt: { label: "RTFKT", isSelected: false, img: rtfkt_img },
  sandbox: { label: "The Sandbox", isSelected: false, img: sandbox_img },
  cloneX_1: { label: "cloneX", isSelected: false, img: cloneX_Img },
  rtfkt_1: { label: "RTFKT", isSelected: false, img: rtfkt_img },
  sandbox_1: { label: "The Sandbox", isSelected: false, img: sandbox_img },
  cryptoPunks: {
    label: "Crypto Punks",
    isSelected: false,
    img: cryptoPunks_Img,
  },
  slotie: {
    label: "Slotie NFT",
    isSelected: false,
    img: slotie_img,
  },
};

function collectionsFromServer(word) {
  return fetch(`https://randomuser.me/api/?page=${1}&results=10`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("echoFromServer data", data);
      return "Successsssssss";
    })
    .catch((err) => {
      return (err && err.message) || "Could not get comments.";
    });
}

const CollectionsComponentTest = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState([]);
  const collectionsDebouncer = useBouncer(collectionsFromServer, 500);

  const inputHandle = (ev) => {
    setInputValue(ev.target.value);
  };

  const handleSelection = (ev) => {
    let value = ev.target.innerText;
    console.log("handleSelection value", value);
    reasonsMap[value].isSelected = true;
    setSelected((old) => [...old, value]);
  };

  const handleDisableSelection = (ev) => {
    let value = ev.target.innerText;
    console.log("disable value", value);
    reasonsMap[value].isSelected = false;

    setSelected((old) => old.filter((item) => item !== value));
  };

  let filteredData = Object.keys(reasonsMap).filter((key) => {
    return (
      !reasonsMap[key].isSelected &&
      reasonsMap[key].label.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
  console.log("filteredData", filteredData);

  let filteredElements = filteredData.map((x, i) => {
    return (
      <CollectionButtonX key={i} onClick={handleSelection}>
        <CircleHolderX>
          <img src={reasonsMap[x].img} alt="" />
        </CircleHolderX>
        <span> {x}</span>
      </CollectionButtonX>
    );
  });

  let selectedElements = selected.map((x, i) => {
    return (
      <SelectedButton key={i} onClick={handleDisableSelection}>
        <CircleHolderX>
          <Checkmark />
        </CircleHolderX>
        <span>{x}</span>
      </SelectedButton>
    );
  });

  React.useEffect(() => {
    console.log("Effect collectionsDebouncer start update");
    // Try to get an echo! But only after we're done typing for 500ms
    collectionsDebouncer()
      .then((data) => {
        console.log("Effect collectionsDebouncer data ", data);
      })
      .catch((err) => {
        console.log("Effect collectionsDebouncer err ", err);
      });
  }, [collectionsDebouncer, inputValue]);

  return (
    <Styled>
      <input type="text" onInput={inputHandle} />
      <div>
        {selected.length > 0 && (
          <SelectedButtonsContainerX>
            {selectedElements}
          </SelectedButtonsContainerX>
        )}
        <CollectionButtonsContainer>
          {filteredElements}
        </CollectionButtonsContainer>
      </div>
    </Styled>
  );
};

const SelectedButtonsContainerX = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const CollectionButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CircleHolderX = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  overflow: hidden;
  transform: scale(0.9);

  img {
    height: 100%;
    width: 100%;
    background-color: var(--color-white);
  }
`;

const CollectionButtonX = styled.button`
  margin-bottom: 0.1rem;
  background-color: var(--color-none);

  display: flex;
  align-items: center;

  border: none;
  outline: none;
  cursor: pointer;

  span {
    margin-left: 1rem;
  }

  &:hover {
    ${CircleHolderX} {
      transform: scale(1);
    }
  }
`;

const SelectedButton = styled.button`
  margin-bottom: 0.1rem;
  background-color: var(--color-none);

  display: flex;
  align-items: center;

  border: none;
  outline: none;
  cursor: pointer;

  span {
    margin-left: 1rem;
  }

  &:hover {
    ${CircleHolderX} {
      transform: scale(1);
    }
  }
`;

const Styled = styled.div`
  width: 100%;

  background: gold;

  & > div {
    background: red;
    margin-top: 1rem;
    height: 200px;

    overflow: hidden;

    &:hover {
      overflow-y: auto;
    }

    &::-webkit-scrollbar {
      width: 0.7rem;
    }

    &::-webkit-scrollbar-track {
      background-color: none;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      border-left: 0;
      border-right: 0;
      background-color: var(--color-scrollbar);
    }
  }
`;

export default CollectionsComponentTest;
