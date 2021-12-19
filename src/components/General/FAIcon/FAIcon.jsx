import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FAIcon = (props) => {
  const size = props.size ? props.size + "x" : "2x";
  return (
    <FontAwesomeIcon
      icon={props.icon}
      size={size}
      className="icon"
    ></FontAwesomeIcon>
  );
};

export default FAIcon;
