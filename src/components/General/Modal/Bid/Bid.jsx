import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import PriceInput from "../../../../store/Marketplace/Filters/Types/Price/FilterMenu/PriceInput/PriceInput";
import currencyOptions from "../../../../store/Marketplace/Filters/Types/Price/FilterMenu/CurrencyOptions/CurrencyOptions";
import DrawerCurrency from "../../../../store/Marketplace/Filters/Types/Price/FilterMenu/CurrencySelect/Drawer.jsx/CurrencyDrawer";
import DaysDrawer from "../../../../store/Marketplace/Filters/Types/Price/FilterMenu/CurrencySelect/Drawer.jsx/DaysDrawer";
import Checkbox from "../../Checkbox/Checkbox";
import ActionButton from "../../../pages/MarketplacePage/CommonElements/ActionButton/ActionButton";

const Bid = ({ itemData, onClose }) => {
  const [isAgreeingToTerms, setIsAgreeingToTerms] = useState(false);
  const [isAgreeingToUncheckedItems, setIsAgreeingToUncheckedItems] =
    useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [val, setVal] = useState("00:01");
  const [currency, setCurrency] = useState(Object.keys(currencyOptions)[0]);
  const [expirationDays, setExpirationDays] = useState();

  const handleChange = (e) => {
    // let inputVal = e.target.value.replace(/[^0-9.]/g, "");
    setVal(e.target.value);
  };

  console.log("currency ", currency);

  return (
    <Wrapper>
      <ItemDataX>
        <LinkX to="">
          <span>{itemData.general.name}</span>
        </LinkX>
      </ItemDataX>

      <ViewX>
        <img src={itemData.general.src} alt="" />
      </ViewX>

      <InputContainerX>
        <PriceInputWrapper>
          <span>Price</span>

          <InputFieldsX>
            {/* <CurrencySelectX
            currency={currency}
            setCurrency={setCurrency}
            currencyOptions={currencyOptions}
          /> */}
            <DrawerCurrencyX
              currency={currency}
              setCurrency={setCurrency}
              currencyOptions={currencyOptions}
            />

            <PriceInputX
              value={minPrice}
              onChange={setMinPrice}
              placeholder="Amount"
            />
          </InputFieldsX>

          <BallanceX>
            <span>
              Balance:&nbsp;{"0.000000"}
              &nbsp;{"WETH"}
            </span>
          </BallanceX>
        </PriceInputWrapper>

        <PriceInputWrapper>
          <span>Offer Expiration</span>

          <InputFieldsX>
            <DaysDrawerX
              selected={expirationDays}
              setSelected={setExpirationDays}
            />
            <LabelX onClick={() => {}}>
              <AccessTimeIcon />
              <input
                type="time"
                id="appt"
                name="appt"
                value={val}
                onChange={handleChange}
                required
              />
            </LabelX>
          </InputFieldsX>
        </PriceInputWrapper>
      </InputContainerX>

      <ConditionsX>
        <CheckboxX
          setIsChecked={setIsAgreeingToTerms}
          label="I agree with terms of services and payment"
        />
        <CheckboxX
          setIsChecked={setIsAgreeingToUncheckedItems}
          label="I agree with terms of services and payment"
        />
        <ActionButton
          text={"Place bid"}
          onClick={() => {}}
          isDisabled={!isAgreeingToTerms || !isAgreeingToUncheckedItems}
        />
      </ConditionsX>
    </Wrapper>
  );
};

//------------------------
const CheckboxX = styled(Checkbox)`
  margin-bottom: 0.5rem;

  span {
    color: var(--color-grey50);
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const ConditionsX = styled.div`
  margin-top: 3rem;
`;

///--------------------------
const LinkX = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  word-break: break-word;
`;

const ItemDataX = styled.span`
  font-size: 2rem;

  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ViewX = styled.div`
  margin-top: 1rem;

  display: flex;
  justify-content: center;

  img {
    width: 10rem;
    height: 10rem;

    border-radius: 1rem;
    overflow: hidden;
  }
`;

const LabelX = styled.label`
  flex: 3;
  padding: 0 1rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  outline: none;
  border: 1px solid var(--market-filters--price--input-price--border-color);
  border-radius: var(--market-filters--price--input-price--border-radius);

  color: var(--color-grey50);
  text-align: end;

  &::placeholder {
    color: var(--market-filters--price--input-price--placeholder-color);
    opacity: 1; /* Firefox */
  }

  &:hover {
    border-color: var(--market-filters--price--input-price--border-color-hover);
  }
  &:focus {
    border-color: var(--market-filters--price--input-price--border-color-focus);
  }

  input {
    color: currentColor;
    background: none;
    border: none;
    outline: none;
  }

  svg {
    color: currentColor;
  }
`;

const PriceInputX = styled(PriceInput)`
  height: 4rem;

  flex: 3;

  font-size: 1.4rem;
  text-align: end;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--color-grey50);
    opacity: 1; /* Firefox */
  }
`;

const DaysDrawerX = styled(DaysDrawer)`
  height: 4rem;
  flex: 2;

  color: var(--color-grey50);
`;

const DrawerCurrencyX = styled(DrawerCurrency)`
  height: 4rem;
  flex: 2;

  color: var(--color-grey50);
  font-size: 1.2rem;
  font-weight: 500;
`;

const InputFieldsX = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const InputContainerX = styled.div`
  margin: 2rem 0;
`;

const BallanceX = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: 1.2rem;
`;

const PriceInputWrapper = styled.div`
  width: 100%;
`;

//--------------------
const Wrapper = styled.div`
  /* width: 100%; */
  padding: 1rem;
  margin: 0 1rem;

  border-radius: 1rem;
  border: 1px solid var(--color-grey20);

  input[type="time"]::-webkit-calendar-picker-indicator {
    background: none;
    display: none;
  }

  input[type="time"]::-webkit-clear-button {
    display: none;
  }
`;

export default Bid;
