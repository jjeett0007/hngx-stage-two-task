import React from "react";
import SideNav from "./sidenav";
import { Wrappers } from "./style";
import MoviePlay from "./data";

const Page = () => {
  return (
    <>
      <Wrappers>
        <SideNav />
        <MoviePlay />
      </Wrappers>
    </>
  );
};

export default Page;
