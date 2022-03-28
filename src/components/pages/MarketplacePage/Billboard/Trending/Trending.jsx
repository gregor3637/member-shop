import React from "react";

import Body from "./Body";
import Header from "./Header";

const Trending = (data) => {
  return {
    type: "trending",
    // header: <Header {...data} />,
    // body: <Body {...data} />,
    header: (data) => <Header {...data} />,
    body: (data) => <Body {...data} />,
  };
};

export default Trending;
