import React from "react";

import Menu from "./Menu/Menu";
import View from "./View/View";
import MenuView from "../../General/SeparationOutlookComponents/MenuView/MenuView";
import Billboard from "../MarketplacePage/Billboard/Billboard";


const SettingsPage = (props) => {
  return (
    <MenuView>
      <section name="menu">
        <Menu />
        <Billboard />
      </section>
      <section name="view">
        <View />
      </section>
    </MenuView>
  );
};



export default SettingsPage;
