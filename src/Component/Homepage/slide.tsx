import React, { useEffect, useState } from "react";
// import Skeleton from "@mui/material/Skeleton";
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
  SlideWrappper,
} from "./style";
import {
  AiFillPlayCircle,
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineRight,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
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

const Slide = () => {
  const [featured, setFeatured] = useState(true);
  const [searchResult, setSearchResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);
  const [searchedMovies, setsearchedMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const authToken =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTYyZDA0MjU1Yzg3OGRiMWRhYWE5YWExYzY2OWViZSIsInN1YiI6IjY0Yjk1MGUwNmFhOGUwMDBiMGIwYTEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j5GXCaGvAlGNzLwvf2ROT_p8rUZdcm5v7XEDjZu8NlE";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        setFeaturedMovies(response.data.results);
        setIsLoading(false);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log("error fetching movies", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return;
    }

    setFeatured(false);
    setSearchResult(true);
    setIsLoading(true);

    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`;

    axios
      .get(searchUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        setsearchedMovies(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error fetching movies", error);
        setIsLoading(false);
      });
  };

  const fetchIMDbID = async (movieID: number) => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieID}/external_ids`;
      const apiUrls = `https://api.themoviedb.org/3/movie/${movieID}/videos`;

      const youresponse = await axios.get(apiUrls, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      console.log("video response", youresponse);

      const response = await axios.get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: authToken,
        },
      });

      // console.log("Response from IMDb ID endpoint:", response);

      if (response.status === 200) {
        return response.data.imdb_id;
      } else {
        console.error(
          "Error fetching IMDb ID:",
          response.status,
          response.statusText
        );
        return null;
      }
    } catch (error) {
      console.error("Error fetching IMDb ID:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchIMDbIDs = async () => {
      const movieIDs = featuredMovies.map((movie) => movie.id);
      const imdbIDs = await Promise.all(
        movieIDs.map((movieID) => fetchIMDbID(movieID))
      );

      setFeaturedMovies((prevMovies) =>
        prevMovies.map((movie, index) => ({
          ...movie,
          imdb_id: imdbIDs[index] || "",
        }))
      );

      setsearchedMovies((prevMovies) =>
        prevMovies.map((movie, index) => ({
          ...movie,
          imdb_id: imdbIDs[index] || "",
        }))
      );

      console.log("IMDb IDs for featured movies:", imdbIDs);
    };

    if (!isLoading) {
      fetchIMDbIDs();
    }
  }, [featuredMovies, isLoading]);

  useEffect(() => {
    const apiUrls = `https://api.themoviedb.org/3/movie/top_rated`;

    axios
      .get(apiUrls, {
        headers: {
          Accept: "applicatioj/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        const data = response.data.results.slice(0, 5);
        setTopRatedMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
      });
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % topRatedMovies.length
      );
    }, 6000);

    return () => clearInterval(slideTimer);
  }, [currentSlideIndex, topRatedMovies]);

  const handleClose = () => {
    setFeatured(true);
    setSearchResult(false);
  };

  return (
    <>
      <MainWrapper>
        <SlideWrapper>
          <HeaderComp>
            <Logo></Logo>
            <SearchComp>
              <input
                type="text"
                placeholder="search for your favorite movies here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div>
                <BsSearch
                  onClick={handleSearch}
                  color="white"
                  size={25}
                  strokeWidth={1}
                />
              </div>
            </SearchComp>
            <HamburgerMenu>
              <p>Sign in</p>
              <div>
                <AiOutlineMenu size={20} color="white" />
              </div>
            </HamburgerMenu>
          </HeaderComp>
          {topRatedMovies.map((rated, index) => {
            return (
              <>
                <SlideContent
                  customBg={`https://image.tmdb.org/t/p/original/${rated.backdrop_path}`}
                  key={rated.id}
                  style={{
                    transform: `translateX(${
                      (index - currentSlideIndex) * 100
                    }%)`,
                    transition:
                      "transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s",
                  }}
                >
                  <ContentDetails>
                    <h1>{rated.title}</h1>
                    <div>
                      <div>
                        <div></div>
                        <span>{rated.vote_average}/100</span>
                      </div>
                      <div>
                        <div></div>
                        <span>97%</span>
                      </div>
                    </div>
                    <p>{rated.overview}</p>
                    <button>
                      <div>
                        <AiFillPlayCircle size={25} />
                      </div>
                      <span>Watch trailer</span>
                    </button>
                  </ContentDetails>
                </SlideContent>
              </>
            );
          })}
        </SlideWrapper>
      </MainWrapper>

      <MovieWrapper>
        {featured && (
          <>
            <MovieArea>
              <Featuredheader>
                <h3>Featured Movie</h3>
                <div>
                  <p>
                    see more <AiOutlineRight size={25} />{" "}
                  </p>
                </div>
              </Featuredheader>
              <FeaturedNsearcMovei>
                <>
                  {isLoading ? (
                    <>
                      <p>Searching...</p>
                    </>
                  ) : (
                    <>
                      {featuredMovies.map((index) => (
                        <MovieCard id={index.imdb_id} key={index.imdb_id}>
                          <MovieBanner
                            customBg={`https://image.tmdb.org/t/p/original/${index.poster_path}`}
                          >
                            <div>
                              <div></div>
                              <div>
                                <AiFillHeart size={20} color="white" />
                              </div>
                            </div>
                          </MovieBanner>
                          <MovieDetails>
                            <h5>USA, {index.release_date}</h5>
                            <h4>{index.title}</h4>

                            <div>
                              <div>
                                <div></div>
                                <span>{index.vote_average}/10</span>
                              </div>
                              <div>
                                <div></div>
                                <span>97%</span>
                              </div>
                            </div>

                            <p>Action, Adventure, Horror</p>
                          </MovieDetails>
                        </MovieCard>
                      ))}
                    </>
                  )}
                </>
              </FeaturedNsearcMovei>
            </MovieArea>
          </>
        )}

        {searchResult && (
          <>
            <MovieArea>
              <Featuredheader>
                <h3>Searched Movie</h3>
                <div onClick={handleClose}>close search</div>
              </Featuredheader>
              <FeaturedNsearcMovei>
                <>
                  {isLoading ? (
                    <>
                      <MovieCard>
                        <MovieBanner customBg="">
                          {/* <Skeleton
                            variant="rectangular"
                            width={210}
                            height={118}
                          /> */}
                        </MovieBanner>
                        <MovieDetails>
                          {/* <Skeleton />
                          <Skeleton animation="wave" />
                          <Skeleton animation={false} /> */}
                        </MovieDetails>
                      </MovieCard>
                    </>
                  ) : (
                    <>
                      {searchedMovies.length === 0 ? (
                        <p>No result</p>
                      ) : (
                        <>
                          {searchedMovies.map((index) => (
                            <MovieCard id={index.imdb_id} key={index.imdb_id}>
                              <MovieBanner
                                customBg={`https://image.tmdb.org/t/p/original/${index.poster_path}`}
                              >
                                <div>
                                  <div></div>
                                  <div>
                                    <AiFillHeart size={20} color="white" />
                                  </div>
                                </div>
                              </MovieBanner>
                              <MovieDetails>
                                <h5>{index.release_date}</h5>
                                <h4>{index.title}</h4>

                                <div>
                                  <div>
                                    <div></div>
                                    <span>{index.vote_average}/10</span>
                                  </div>
                                  <div>
                                    <div></div>
                                    <span>97%</span>
                                  </div>
                                </div>

                                <p>Action, Adventure, Horror</p>
                              </MovieDetails>
                            </MovieCard>
                          ))}
                        </>
                      )}
                      {/* {searchedMovies.map((index) => (
                        <MovieCard id={index.imdb_id} key={index.imdb_id}>
                          <MovieBanner
                            customBg={`https://image.tmdb.org/t/p/original/${index.poster_path}`}
                          >
                            <div>
                              <div></div>
                              <div>
                                <AiFillHeart size={20} color="white" />
                              </div>
                            </div>
                          </MovieBanner>
                          <MovieDetails>
                            <h5>{index.release_date}</h5>
                            <h4>{index.title}</h4>

                            <div>
                              <div>
                                <div></div>
                                <span>{index.vote_average}/10</span>
                              </div>
                              <div>
                                <div></div>
                                <span>97%</span>
                              </div>
                            </div>

                            <p>Action, Adventure, Horror</p>
                          </MovieDetails>
                        </MovieCard>
                      ))} */}
                    </>
                  )}
                </>
              </FeaturedNsearcMovei>
            </MovieArea>
          </>
        )}
      </MovieWrapper>
    </>
  );
};

export default Slide;
