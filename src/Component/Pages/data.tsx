import React from "react";
import {
  MovieWrapper,
  YoutubePlay,
  MovieInfo,
  MovieInfoTitle,
  ScrollWrapper,
  MovieInfoTitleTwo,
  TitleHeader,
  TitleDescription,
  TitleActor,
  TitleRated,
  RatedShowTime,
  OtherMovies,
} from "./style";
import { BsFillCircleFill } from "react-icons/bs";

const MoviePlay = () => {
  return (
    <>
      <MovieWrapper>
        <ScrollWrapper>
          <YoutubePlay></YoutubePlay>
          <MovieInfo>
            <MovieInfoTitle>
              <TitleHeader>
                <div>
                  <p>Top Gun Maverick</p>
                  <BsFillCircleFill size={7} />
                  <p>2022</p>
                  <BsFillCircleFill size={7} />
                  <p>PG-13</p>
                  <BsFillCircleFill size={7} />
                  <p>2h 10m</p>
                </div>
                <span></span>
                <span></span>
              </TitleHeader>
              <TitleDescription></TitleDescription>
              <TitleActor>
                <div>
                  <p>Director: </p>
                  <span>Jet</span>
                </div>

                <div>
                  <p>Wriiters: </p>
                  <span>Jet</span>
                </div>

                <div>
                  <p>Star: </p>
                  <span>Jet</span>
                </div>
              </TitleActor>
              <TitleRated></TitleRated>
            </MovieInfoTitle>
            <MovieInfoTitleTwo>
              <RatedShowTime></RatedShowTime>
              <OtherMovies></OtherMovies>
            </MovieInfoTitleTwo>
          </MovieInfo>
        </ScrollWrapper>
      </MovieWrapper>
    </>
  );
};

export default MoviePlay;
