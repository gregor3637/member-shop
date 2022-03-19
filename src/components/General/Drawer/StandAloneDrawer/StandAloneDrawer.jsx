import React from "react";

import useToggle from "../../../../hooks/useToggle";
import Drawer from "../Drawer";

const StandAloneDrawer = ({
  label,
  onClick,
  annotation,
  className: version,
  icon,
  children,
}) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const handleClick = () => {
    toggleOpen();
    onClick();
  };

  return (
    <Drawer
      className={version}
      icon={icon}
      isOpen={isOpen}
      label={label.charAt(0).toUpperCase() + label.slice(1)}
      annotation={annotation}
      // onClick={toggleOpen}
      onClick={handleClick}
    >
      {children}
    </Drawer>
  );
};

export default StandAloneDrawer;
