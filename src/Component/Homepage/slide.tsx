import React, { useState } from "react";
import {
  ContentDetails,
  Featuredheader,
  FeaturedNsearcMovei,
  HamburgerMenu,
  HeaderComp,
  Logo,
  MainWrapper,
  MovieArea,
  MovieCard,
  MovieWrapper,
  SearchComp,
  SlideContent,
  SlideWrapper,
} from "./style";

const Slide = () => {
  const [featured, setFeatured] = useState(true);
  const [searchResult, setSearchResult] = useState(false);
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
          <SlideContent>
            <ContentDetails>
              <h1>John Wick 3</h1>
              <div>
                <div>
                  <div></div>
                  <span>10.0/100</span>
                </div>
                <div>
                  <div></div>
                  <span>97%</span>
                </div>
              </div>
              <p>
                John Wick is on the run after killing a member of the
                international assassins' guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
              <button>Watch trailer</button>
            </ContentDetails>
          </SlideContent>
        </SlideWrapper>
      </MainWrapper>

      <MovieWrapper>
        {featured && (
          <>
            <MovieArea>
              <Featuredheader>
                <h3>Featured Movie</h3>
                <div>see more</div>
              </Featuredheader>
              <FeaturedNsearcMovei>
                <MovieCard></MovieCard>
              </FeaturedNsearcMovei>
            </MovieArea>
          </>
        )}

        {searchResult && (
          <>
            <MovieArea>
              <Featuredheader>
                <h3>Searched Movie</h3>
                <div>see more</div>
              </Featuredheader>
            </MovieArea>
          </>
        )}
      </MovieWrapper>
    </>
  );
};

export default Slide;
