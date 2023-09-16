import SideNav from "./sidenav";
import { MobileTitleDisplay, ScrollBbar, StarRated, Wrappers } from "./style";
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
import StStarLogoar from "../../asset/Untitled.png";
import axios from "axios";

interface Movie {
  imdb_id: string;
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  backdrop_path: string;
  runtime: number;
}

interface CastMember {
  order: number;
  name: string;
}

const Page = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState<Movie | null>(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [directorName, setDirectorName] = useState("");
  const [writerName, setWriterName] = useState("");
  const [topCharacters, setTopCharacters] = useState<CastMember[]>([]);

  // console.log("imdb id is:", imdb_id);

  const apiKey = process.env.REACT_APP_API_KEY;
  const authToken = `Bearer ${apiKey}`;

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        setMovieInfo(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, [id]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/videos`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        if (response.data.results.length > 0) {
          setTrailerKey(response.data.results[0].key);
          // console.log(response.data.results);
        } else {
          setTrailerKey(null);
        }
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, [id]);

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          const credits = response.data;

          const director = credits.crew.find(
            (crewMember: { job: string }) =>
              crewMember.job.toLowerCase() === "director"
          );

          const writter = credits.crew.find(
            (crewMember: { job: string }) =>
              crewMember.job.toLowerCase() === "story"
          );

          if (writter) {
            // setDirectorName(director.name);
            console.log(writter.name);
          } else {
            // setDirectorName("Director Not Found");
            console.log("not found");
          }

          const sortedCast = credits.cast.sort(
            (a: { order: number }, b: { order: number }) => a.order - b.order
          );

          if (sortedCast) {
            // console.log(
            //   "Top 3 Characters:",
            //   sortedCast
            //     .slice(0, 3)
            //     .map((character: { name: string }) => character.name)
            // );
            setTopCharacters(sortedCast.slice(0, 3));
          } else {
            console.log("Character not found");
          }

          if (director) {
            setDirectorName(director.name);
            // console.log(director.name);
          } else {
            // setDirectorName("Director Not Found");
            console.log("not found");
          }
        } else {
          console.error("Failed to fetch movie credits");
        }
      })
      .catch((error) => {
        console.log("error fetching data", error);
      });
  }, [id]);

  // console.log(movieInfo);

  return (
    <>
      <Wrappers>
        <SideNav />
        {/* <MoviePlay /> */}
        <MovieWrapper>
          <ScrollWrapper>
            <YoutubePlay>
              <>
                {trailerKey ? (
                  <iframe
                    title="Movie Trailer"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <iframe
                      title="Movie Trailer"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </>
                )}
              </>
            </YoutubePlay>
            <MovieInfo>
              <ScrollBbar>
                <MovieInfoTitle>
                  <TitleHeader>
                    <div>
                      {movieInfo ? (
                        <div>
                          <p data-testid="movie-title">
                            {movieInfo.original_title}
                          </p>
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                      <BsFillCircleFill size={7} />
                      {movieInfo ? (
                        <>
                          <p data-testid="movie-release-date">
                            {movieInfo.release_date}
                          </p>
                        </>
                      ) : (
                        <>
                          <p>Loading...</p>
                        </>
                      )}
                      <BsFillCircleFill size={7} />
                      <p>PG-13</p>
                      <BsFillCircleFill size={7} />
                      {movieInfo ? (
                        <>
                          <p data-testid="movie-runtime">{movieInfo.runtime}</p>
                          <p>m</p>
                        </>
                      ) : (
                        <>
                          <p>Loading...</p>
                        </>
                      )}
                    </div>
                    {/* <span></span> */}
                    {/* <span></span> */}
                  </TitleHeader>
                  <MobileTitleDisplay>
                    <div>
                      <p>Title</p>
                      {movieInfo ? (
                        <>
                          <span data-testid="movie-title">
                            {movieInfo.original_title}
                          </span>
                        </>
                      ) : (
                        <span>Loading...</span>
                      )}
                    </div>

                    <div>
                      <p>Date</p>
                      {movieInfo ? (
                        <>
                          <span data-testid="movie-release-date">
                            {movieInfo.release_date}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>Loading.....</span>
                        </>
                      )}
                    </div>

                    <div>
                      <p>Time</p>
                      {movieInfo ? (
                        <>
                          <span data-testid="movie-runtime">
                            {movieInfo.runtime}
                          </span>
                          <span>m</span>
                        </>
                      ) : (
                        <>
                          <span>Loading...</span>
                        </>
                      )}
                    </div>
                  </MobileTitleDisplay>
                  <TitleDescription>
                    {movieInfo ? (
                      <>
                        <p data-testid="movie-overview">{movieInfo.overview}</p>
                      </>
                    ) : (
                      <>
                        <p>Loading...</p>
                      </>
                    )}
                  </TitleDescription>
                  <TitleActor>
                    <div>
                      <p>Director: </p>
                      <span>{directorName}</span>
                    </div>

                    <div>
                      <p>Writers: </p>
                      <span>Writer not Found</span>
                    </div>

                    <div>
                      <p>Star: </p>
                      <>
                        {topCharacters ? (
                          <>
                            {topCharacters.map((character: CastMember) => (
                              <>
                                <span key={character.name}>
                                  {character.name}
                                </span>{" "}
                              </>
                            ))}
                          </>
                        ) : (
                          <p>Loading...</p>
                        )}
                      </>
                    </div>
                  </TitleActor>
                  {/* <TitleRated></TitleRated> */}
                </MovieInfoTitle>
                <MovieInfoTitleTwo>
                  <RatedShowTime>
                    <StarRated>
                      <div></div>
                      {movieInfo ? (
                        <>
                          <p>{movieInfo.vote_average}k</p>
                          <span>|30k</span>
                        </>
                      ) : (
                        <>
                          <p>Loading...</p>
                        </>
                      )}
                    </StarRated>
                  </RatedShowTime>
                  {/* <OtherMovies></OtherMovies> */}
                </MovieInfoTitleTwo>
              </ScrollBbar>
            </MovieInfo>
          </ScrollWrapper>
        </MovieWrapper>
      </Wrappers>
    </>
  );
};

export default Page;
