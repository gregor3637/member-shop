import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AsyncSelect from "react-select/async";
import { components } from "react-select";

import {
  getMostPopularCollections,
  getCollectionsBySubstr,
} from "../../../../lib/api";
import useHttp from "../../../../hooks/useHttp";
import FormButton from "../../Buttons/FormButton";

const { Option } = components;
// import { handleInputChange } from "react-select/dist/declarations/src/utils";
// import { AsyncPaginate } from "react-select-async-paginate"; // for pagination

const IconOption = (props) => (
  <Option {...props}>
    <OptionsX>
      <img src={props.data.logo} alt={props.data.label} />
      {props.data.label}
    </OptionsX>
  </Option>
);

const FakeOrStolen = (props) => {
  // const [value, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const { sendRequest, data: mostPopular } = useHttp(
    getMostPopularCollections,
    true
  );

  // const handleInputChange = (value) => {};

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Styled>
      <span>Original Collection</span>
      <AsyncSelectX
        cacheOptions
        defaultOptions={mostPopular}
        loadOptions={getCollectionsBySubstr}
        components={{ Option: IconOption }}
        // onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <FormButton disabled={selectedValue === null}>Report</FormButton>
    </Styled>
  );
};

const AsyncSelectX = styled(AsyncSelect)`
  padding-top: 1rem;
  font-size: 1.4rem;
`;

const Styled = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  & > span:first-child {
    font-size: 1.6rem;
    font-weight: 700;
  }

  ${FormButton} {
    margin-top: 3rem;
    align-self: center;
  }
`;

const OptionsX = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 3rem;
    border-radius: 50%;
    padding-right: 1rem;
  }
`;

export default FakeOrStolen;
