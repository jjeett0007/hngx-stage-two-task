import React from "react";
import LogoImage from "../../asset/Logo.png";
import {
  EarnArea,
  LogOutArea,
  LogoArea,
  NavArea,
  SideNavigation,
} from "./style";

const SideNav = () => {
  return (
    <>
      <SideNavigation>
        <LogoArea>
          <img src={LogoImage} alt="image" />
          <div>
            <p>MovieBox</p>
          </div>
        </LogoArea>
        <NavArea>
          <div>
            <img
              alt="logo"
              src="https://s3-alpha-sig.figma.com/img/2f94/9df6/ed9963b21c7ed4fb4e2fd5643aed0a3c?Expires=1695600000&Signature=LUxXOU1mMBszVcAu-vyI6V6M9Yv3WcCK4oozFqhQEMUi3NLAHQW7V2ELtZSTL1hyL-gr06iTNAlI5XFKG-P0dqmCetigRBeFDlmEMF96~oC7rPEGylsVh7Zvif943RWn3gaWaP57gjd2pjmpDrf2w5Qd47FlvHzSGvu4Fx0sKLKTx~DiPO0ShOJ-rsrKkxzEDJIeQH4iuJfWqLQqnp2mvPeY4Y2Zm3o12ABd881P7auhYrnmBr3a4PLFf9Znc4X3qV5Dbzsx5yaFFmR5f9~tA8RumRMaibyIOnSi1aMKW7lDs4TPgWZaf9YTY8ZG64SAtJFbqQPfmNgMbZKWmbryJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <p>Home</p>
          </div>
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/2509/08d8/a213cb9d68960e4f0354a5f4f968f0ee?Expires=1695600000&Signature=TtkdXP1iI9RuW~bqFYhcG8BMnM503UWy86LYGNcVHOmxnr52nPDHwqztXbk3qZGNk7cafCruvyA7MlCGb0p-EpCSJ2oqKCuOZJQqdJag2~m2tGqgKQr42alKkv7~cRK8BE9wFtNt5Ti1SzUCh8qsY7dgYtIodLggYVr-rludvS2yTo~oYjPEGAsLVZ6xCac7E2z3HIJSZi9ikxBLz3MNoU-NIbivqcMUEQIpS9KJYkdUUib3gY1NxE2NXvqqNvLOHP8SuM5k1YMJnMYS8gR24pWcB1B1NZ~BmKQ4lFvDJ-OJCelsFi0NfaCzvG-O1~zAN6N4JL1r7EqC1id9K7F1Bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="logo"
            />
            <p>Movie</p>
          </div>
        </NavArea>
        {/* <EarnArea></EarnArea> */}
        <LogOutArea></LogOutArea>
      </SideNavigation>
    </>
  );
};

export default SideNav;
