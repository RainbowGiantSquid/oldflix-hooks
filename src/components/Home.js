import React, { useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "../config";

//import Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import FilmThumb from "./elements/FilmThumb";
import Spinner from "./elements/Spinner";
import LoadMore from "./elements/LoadMore";
import NoImage from "./images/no_image.jpg";

//custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const [
    {
      state: { films, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchFilms,
  ] = useHomeFetch();
  const [searchTerm, setDearchTerm] = useState("");

  //if th9e fist one (films[0]) is not there
  if (error) return <div>Something went wrong...</div>;
  if (!films[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {films.map((film) => (
          <FilmThumb
            key={film.id}
            clickable
            image={
              film.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${film.poster_path}`
                : NoImage
            }
            filmId={film.id}
            filmName={film.original_title}
          />
        ))}
      </Grid>
      <FilmThumb />
      <Spinner />
      <LoadMore />
    </>
  );
};

export default Home;
