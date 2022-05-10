const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: action.responseData,
      error: null,
      status: "pending",
    };
  } else if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  } else if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  } else {
    throw new Error(`httpReducer | Unhandled action type: ${action.type}`);
  }
};

export default httpReducer;
