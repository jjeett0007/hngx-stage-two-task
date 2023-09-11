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
  MovieBanner,
  MovieCard,
  MovieDetails,
  MovieWrapper,
  SearchComp,
  SlideContent,
  SlideWrapper,
} from "./style";
import { AiFillPlayCircle, AiFillHeart } from "react-icons/ai";

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
              <button>
                <div>
                  <AiFillPlayCircle size={25} />
                </div>
                <span>Watch trailer</span>
              </button>
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
                <MovieCard>
                  <MovieBanner>
                    <div>
                      <div></div>
                      <div>
                        <AiFillHeart />
                      </div>
                    </div>
                  </MovieBanner>
                  <MovieDetails>
                    <h5>USA, 2016 - Current</h5>
                    <h4>Stranger Things</h4>

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

                    <p>Action, Adventure, Horror</p>
                  </MovieDetails>
                </MovieCard>
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
