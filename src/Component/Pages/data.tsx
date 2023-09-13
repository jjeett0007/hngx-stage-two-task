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

const MoviePlay = () => {
  return (
    <>
      <MovieWrapper>
        <ScrollWrapper>
          <YoutubePlay></YoutubePlay>
          <MovieInfo>
            <MovieInfoTitle>
                <TitleHeader></TitleHeader>
                <TitleDescription></TitleDescription>
                <TitleActor></TitleActor>
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
