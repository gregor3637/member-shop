import React from "react";
import styled from "styled-components";

import useHttp2 from "../../../../hooks/useHttp2";
import useInit from "../../../../hooks/useInit";
import { getActivities } from "../../../../lib/api_Activity";
import ActivityItem from "./ActivityItem/ActivityItem";

const Body = (props) => {
  const { sendRequest, data, error, status } = useHttp2(
    getActivities,
    true,
    []
  );

  useInit(sendRequest);

  return (
    <Wrapper>
      {data.length > 0 &&
        data.map((item, i) => {
          return <ActivityItem itemData={item} key={i} />;
        })}

      {status !== "pending" && data.length === 0 && (
        <AbsentX>
          <h4>Nothing yet</h4>
          <div>
            <p>Looks like there`s still nothing.</p>
            <p> Activity will be shown here</p>
          </div>
          <button>Explore Member</button>
        </AbsentX>
      )}
    </Wrapper>
  );
};

const AbsentX = styled.div`
  margin-top: 5rem;
  flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;

  h4 {
    font-size: 2.4rem;
  }

  p {
    text-align: center;
    font-size: 1.8rem;
  }

  button {
    padding: 1rem 2rem;

    font-weight: 600;
    color: var(--color-white);

    border: none;
    border-radius: 9999px;
    background: var(--color-blue);
  }
`;

const Wrapper = styled.div`
  flex: 1;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Body;
