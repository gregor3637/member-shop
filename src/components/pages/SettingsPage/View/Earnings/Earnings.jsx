import React from "react";
import styled from "styled-components";

import useInit from "../../../../../hooks/useInit";
import { getAllEarnings } from "../../../../../lib/api_Profile_Earnings";
import useHttp2 from "../../../../../hooks/useHttp2";
import Table from "./Table/Table";
import AbsentEarnings from "./AbsentEarnings/AbsentEarnings";
import LoadingSpinner from "../../../../General/LoadingSpinner/LoadingSpinner";

const Earnings = () => {
  const {
    sendRequest,
    data: tableItemsData,
    error,
    status,
  } = useHttp2(getAllEarnings, true, []);

  useInit(sendRequest);

  return (
    <Wrapper>
      <h2>Earnings</h2>
      <p>
        **You will only receive a payout if you have accumulated more than $100
        worth of fees.
      </p>

      <DisplayContainerX>
        {status === "pending" ? (
          <LoadingSpinner />
        ) : (
          <>
            {tableItemsData.length > 0 && <Table data={tableItemsData} />}
            {tableItemsData.length === 0 && <AbsentEarnings />}
          </>
        )}
      </DisplayContainerX>
    </Wrapper>
  );
};

const DisplayContainerX = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > h2 {
    font-size: 3rem;
    text-align: center;
  }

  & > p {
    margin-bottom: 2rem;

    text-align: center;
    padding-bottom: 1rem;
    font-size: 1.4rem;
  }
`;

export default Earnings;
