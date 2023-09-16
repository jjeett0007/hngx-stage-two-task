import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
  const [display, showDisplay] = useState(false);
  const [hasFetchedIMDbIDs, setHasFetchedIMDbIDs] = useState(false);
  const fetchIMDbIDsRef = useRef(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  const authToken = `Bearer ${apiKey}`;

  useEffect(() => {
    setTimeout(() => {
      const apiUrl = `https://api.themoviedb.org/3/movie/top_rated`;

      axios
        .get(apiUrl, {
          headers: {
            Accept: "application/json",
            Authorization: authToken,
          },
        })
        .then((response) => {
          const data = response.data.results.slice(0, 10);
          setFeaturedMovies(data);
          setIsLoading(false);
          // console.log(response.data.results);
        })
        .catch((error) => {
          console.log("error fetching movies", error);
          setIsLoading(false);
        });
    }, 5000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        showDisplay(true);
      }, 7000);
    }
  }, [isLoading]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      return;
    }

    setFeatured(false);
    setSearchResult(true);
    setIsLoading(true);

    setTimeout(() => {
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
    }, 5000);
  };

  const fetchIMDbID = async (movieID: number) => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieID}/external_ids`;

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
    if (!isLoading && !hasFetchedIMDbIDs && !fetchIMDbIDsRef.current) {
      fetchIMDbIDsRef.current = true;

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

        // console.log("IMDb IDs for featured movies:", imdbIDs);
      };

      fetchIMDbIDs();
      setHasFetchedIMDbIDs(true);
    }
  }, [featuredMovies, isLoading, hasFetchedIMDbIDs]);

  useEffect(() => {
    const apiUrls = `https://api.themoviedb.org/3/movie/popular`;

    axios
      .get(apiUrls, {
        headers: {
          Accept: "applicatioj/json",
          Authorization: authToken,
        },
      })
      .then((response) => {
        const data = response.data.results.slice(0, 10);
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
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                    </>
                  ) : (
                    <>
                      {featuredMovies.map((index) => (
                        <MovieCard data-testid="movie-card" key={index.id}>
                          <MovieBanner customBg="">
                            <div>
                              <div></div>
                              <div>
                                <AiFillHeart size={20} color="white" />
                              </div>
                            </div>
                            <img
                              data-testid="movie-poster"
                              src={`https://image.tmdb.org/t/p/original/${index.poster_path}`}
                              alt="poster"
                            />
                          </MovieBanner>
                          <MovieDetails>
                            <h5 data-testid="movie-release-date">
                              {index.release_date}
                            </h5>
                            <h4>
                              <Link to={`/movie/${index.id}`}>
                                <p data-testid="movie-title">
                                  {index.title}
                                </p>
                              </Link>
                            </h4>

                            <div>
                              <div>
                                <div></div>
                                <span>{index.vote_average}</span>
                                <span>/10</span>
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
                      {/* {display && (
                        <>
                          
                        </>
                      )} */}
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
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                      <MovieCard>
                        <MovieBanner customBg="">
                          <Skeleton height={400} />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </MovieBanner>
                      </MovieCard>
                    </>
                  ) : (
                    <>
                      {display && (
                        <>
                          {searchedMovies.length === 0 ? (
                            <p>No result</p>
                          ) : (
                            <>
                              {searchedMovies.map((index) => (
                                <MovieCard
                                  id={index.imdb_id}
                                  key={index.imdb_id}
                                >
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
                                    <h4>
                                      <Link to={`/movie/${index.id}`}>
                                        <p data-testid="movie-release-date">
                                          {index.title}
                                        </p>
                                      </Link>
                                    </h4>

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
                      )}
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
