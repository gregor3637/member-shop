import React from "react";

import CloseSVG from "../../../../../../img/svg/CloseSVG";
import SelectedFilterButton from "../../SelectedFilterButton";

const CollectionButtons = (dispatchType, context, dispatcher) => {
  return context.map((x, i) => {
    return (
      <SelectedFilterButton
        key={i}
        onClick={() => {
          dispatcher({ type: dispatchType, value: x });
        }}
      >
        <span>{x}</span>
        <CloseSVG color="#fff" />
      </SelectedFilterButton>
    );
  });
};

export default CollectionButtons;
