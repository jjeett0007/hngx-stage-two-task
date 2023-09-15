import SideNav from "./sidenav";
import { Wrappers } from "./style";
// import MoviePlay from "./data";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
import axios from "axios";

interface Movie {
  imdb_id: string;
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
}

const Page = () => {
  const { imdb_id } = useParams();
  const [movieInfo, setMovieInfo] = useState<Movie[]>([]);

  console.log("imdb id is:", imdb_id);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTYyZDA0MjU1Yzg3OGRiMWRhYWE5YWExYzY2OWViZSIsInN1YiI6IjY0Yjk1MGUwNmFhOGUwMDBiMGIwYTEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5GXCaGvAlGNzLwvf2ROT_p8rUZdcm5v7XEDjZu8NlE";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/find/${imdb_id}?external_source=imdb_id`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        setMovieInfo(response.data.movie_results);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, [imdb_id]);

  return (
    <>
      <Wrappers>
        <SideNav />
        {/* <MoviePlay /> */}
        <MovieWrapper>
          <ScrollWrapper>
            <YoutubePlay></YoutubePlay>
            <MovieInfo>
              <MovieInfoTitle>
                <TitleHeader>
                  <div>
                    {movieInfo.length > 0 ? (
                      <div>
                        {movieInfo.map((movie) => (
                          <p key={movie.id}>{movie.title}</p>
                        ))}
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
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
      </Wrappers>
    </>
  );
};

export default Page;
