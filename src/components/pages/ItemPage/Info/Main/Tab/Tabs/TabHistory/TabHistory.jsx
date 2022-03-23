import React, { useState } from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import HistoryEventModal from "../../../../../../../General/Modal/SingleItem/HistoryEventModal";
import HistoryButton from "./Button/HistoryButton";
import HistoryFilter from "./Filter/HistoryFilter";

const TabHistory = ({ history }) => {
  const [selectedData, setSelectedData] = useState();
  const [ignoredTypes, setIgnoredTypes] = useState([]);

  const elements = history
    .slice(0)
    .filter((x) => !ignoredTypes.includes(x.type))
    .reverse()
    .map((entry, idx) => {
      return (
        <HistoryButton
          key={idx}
          data={entry}
          onClick={() => setSelectedData(entry)}
        />
      );
    });

  return (
    <Wrapper>
      {selectedData && (
        <HistoryEventModal
          onClose={() => setSelectedData(null)}
          data={selectedData}
        />
      )}
      <HistoryFilterX onApplyFilter={(vals) => setIgnoredTypes(vals)} />
      <DivX>
        <ScrollbarX forceVisible="y" autoHide={true}>
          {elements}
        </ScrollbarX>
      </DivX>
    </Wrapper>
  );
};

const DivX = styled.div`
  flex: 1;
  overflow: hidden;
  padding-top: 1rem;
`;

const ScrollbarX = styled(SimpleBar)`
  height: 100%;
`;

const HistoryFilterX = styled(HistoryFilter)`
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  button:first-of-type:before,
  button:last-of-type:after {
    border: none;
  }
`;
export default TabHistory;
