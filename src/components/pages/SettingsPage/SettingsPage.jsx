import React from "react";

import MenuView from "../../General/Outlook/MenuView/MenuView";
import Billboard from "../MarketplacePage/Billboard/Billboard";
import Menu from './Menu/Menu';
import View from "./View/View";

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
