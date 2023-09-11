import React from "react";
import { HamburgerMenu, HeaderComp, Logo, MainWrapper, SearchComp, SlideContent, SlideWrapper } from "./style";


const Slide = () => {
  return (
    <>
      <MainWrapper>
        <SlideWrapper>
            <HeaderComp>
                <Logo></Logo>
                <SearchComp></SearchComp>
                <HamburgerMenu>
                    <p>Sign in</p>
                    <div></div>
                </HamburgerMenu>
            </HeaderComp>
            <SlideContent></SlideContent>
        </SlideWrapper>
      </MainWrapper>
    </>
  );
};

export default Slide;
