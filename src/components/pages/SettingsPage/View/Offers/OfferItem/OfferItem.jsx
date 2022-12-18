import React, { useState } from "react";
import styled from "styled-components";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FormikControl from "../../../../../General/Formik/FormikControl";
import VerifiedIcon from "../../../../../../img/svg/VerifiedIcon";

const OfferItem = ({ data, onSaveClick }, ref) => {
  const [val, setVal] = useState(123);

  return (
    <Wrapper>
      <DisplayInfoContainerX>
        <div className="offer-view">
          <img src={data.itemImg} alt="" />
        </div>
        <div className="offer-info">
          <span>{data.itemsCount} items </span>
          <div className="offer-info-name">
            <h4>{data.itemName}</h4>
            {data.isVerified && <VerifiedIcon />}
          </div>
          <span>
            {data.floorBid.amount} {data.floorBid.unit}
          </span>
        </div>
      </DisplayInfoContainerX>

      <input
        ref={ref}
        name={data.itemName}
        type="number"
        min={0}
        placeholder="min value"
        value={val}
        onChange={(ev) => {
          setVal(ev.target.value);
        }}
      />

      <button>
        <SettingsRoundedIcon />
      </button>
      <SaveButtonX onClick={() => onSaveClick(data.itemName, val)}>
        Save
      </SaveButtonX>
    </Wrapper>
  );
};

const SaveButtonX = styled.button`
  @media (max-width: 1100px) {
    display: none;
  }
`;

const DisplayInfoContainerX = styled.div`
  flex: 0 0 40rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 5rem;

    border-radius: 50%;
  }

  span {
    width: max-content;
  }

  .offer-info-name {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.4rem;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;

  border-bottom: 1px solid var(--color-grey50);

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default React.forwardRef(OfferItem);
