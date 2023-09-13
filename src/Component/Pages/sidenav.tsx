import React from "react";
import { EarnArea, LogOutArea, LogoArea, NavArea, SideNavigation } from "./style";

const SideNav = () => {
  return (
    <>
      <SideNavigation>
        <LogoArea></LogoArea>
        <NavArea></NavArea>
        <EarnArea></EarnArea>
        <LogOutArea></LogOutArea>
      </SideNavigation>
    </>
  );
};

export default SideNav;
