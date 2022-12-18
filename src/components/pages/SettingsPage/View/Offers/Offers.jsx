import React, { useRef, useState } from "react";
import styled from "styled-components";

import SubmitFormButton from "../../components/SubmitFormButton/SubmitFormButton";
import {
  getAllOffers,
  updateAllOffer,
  updateSingleOffer,
} from "../../../../../lib/api_Profile_Offers";
import useInit from "../../../../../hooks/useInit";
import useHttp2 from "../../../../../hooks/useHttp2";
import OfferItem from "./OfferItem/OfferItem";

const Offers = (props) => {
  const {
    sendRequest,
    data: tableItemsData,
    error,
    status,
  } = useHttp2(getAllOffers, true, []);

  useInit(sendRequest);
  const itemsEls = useRef({});

  const handleAllItemsUpdate = (ev) => {
    ev.preventDefault();

    const finData = Object.keys(itemsEls.current).reduce((acc, keyName) => {
      acc[keyName] = itemsEls.current[keyName].value;
      return acc;
    }, {});

    const response = updateAllOffer(finData);
    console.log("POST > data.result = ", response);
  };

  const handleSingleItemUpdate = async (itemName, itemInputValue) => {
    const result = await updateSingleOffer(itemName, itemInputValue);
    console.log("POST > data.result = ", result);
  };

  return (
    <Wrapper>
      <h2>Offer Settings</h2>
      <form onSubmit={handleAllItemsUpdate}>
        {tableItemsData.map((itemData, index) => {
          return (
            <OfferItem
              key={index}
              data={itemData}
              onSaveClick={handleSingleItemUpdate}
              // ref={(element) => itemsEls.current.splice(index, 1, element)}
              ref={(element) => {
                itemsEls.current[itemData.itemName] = element;
              }}
            />
          );
        })}
        <SubmitFormButton type="submit">Save</SubmitFormButton>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 60rem;
  margin: 0 auto;

  & > h2 {
    margin-bottom: 1.6rem;

    font-size: 3rem;
    text-align: center;
  }
`;

export default Offers;
