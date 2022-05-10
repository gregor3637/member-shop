import { useCallback, useReducer } from "react";

import { getCollections } from "../lib/api_Trending";
import httpReducer from "./httpReducer";
import useTrendingPageContext from "./TrendingPage/useTrendingPageContext";

const apiByType = {
  collection: getCollections,
  creators: getCollections,
  collectors: getCollections,
  auctions: getCollections,
};

function useHttpTrendingPage(startWithPending = false, initialData = null) {
  const {
    state: {
      type: { selected: selectedType },
    },
  } = useTrendingPageContext();

  console.log(" 0 out-start initialData", initialData);

  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: initialData,
    error: null,
  });

  const sendRequest = useCallback(
    async function (...args) {
      // console.log(" 1 inside httpState", httpState);
      // console.log(" 1 inside  initialData", initialData);
      dispatch({ type: "SEND", responseData: initialData });
      try {
        const request = apiByType[selectedType];
        // console.log("1.2 inside type", selectedType);
        // console.log("1.2 inside request", request);
        const responseData = await request(...args);
        // console.log("1.2 inside responseData", responseData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [selectedType, initialData]
  );

  console.log(" 2 out end httpState", httpState);

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttpTrendingPage;
