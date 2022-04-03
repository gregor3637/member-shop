import React, { useContext, useState } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import ItemCardContext2 from "../../../../store/Item/ItemCardContext2";
import BundleItem from "./BundleItem/BundleItem";
import Count from "./Count/Count";

const ItemView = ({ footerHeight }) => {
  const ctx = useContext(ItemCardContext2);
  const [mainViewSource, setMainViewSource] = useState(ctx.general.src);
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(0);

  const elementClickHandler = (elData, i) => {
    setCurrentSelectedIndex(Number(i));
    setMainViewSource(elData.general.src);
  };

  return (
    <Wrapper>
      <InnerX>
        <div>
          <img src={mainViewSource} alt="" />
        </div>
      </InnerX>

      {ctx.bundleItems && (
        <Count
          total={ctx.bundleItems.length}
          current={currentSelectedIndex + 1}
        />
      )}
      {ctx.bundleItems && (
        <BundleContainerX style={{ height: footerHeight + "px" }}>
          <ScrollbarX>
            <div>
              {ctx.bundleItems.map((elData, i) => {
                console.log("i ", i);
                return (
                  <BundleItemX
                    key={i}
                    index={i}
                    itemData={elData}
                    onClick={() => elementClickHandler(elData, i)}
                  />
                );
              })}
            </div>
          </ScrollbarX>
        </BundleContainerX>
      )}
    </Wrapper>
  );
};

const BundleItemX = styled(BundleItem)`
  margin-left: 1rem;
`;

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
  width: 100%;

  .simplebar-content {
    height: 100%;
    display: flex;

    & > div {
      display: flex;
      margin: 0 auto;
      align-items: center;

      ${BundleItemX}:first-of-type {
        margin-left: 0;
      }
    }
  }
`;

const BundleContainerX = styled.div`
  width: 100%;
  padding: 0 2rem;

  display: flex;

  border-top: 1px solid var(--color-border);
`;

const InnerX = styled.div`
  width: 100%;
  flex: 1;

  div {
    max-width: 100%; //---- important
    min-height: 0; //----- important
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: auto;
      max-height: 100%;
      max-width: 100%;

      background-color: red;
      border-radius: 1rem;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  background: var(--color-white);
  /* background: var(--test-r); */
  flex: 1;
  height: 100%;

  overflow: clip;
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-border);
  border-radius: var(--market-filters--outerWrapper-radius);
`;

export default ItemView;
