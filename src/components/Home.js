import React, { useState, useEffect } from "react";
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

//custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const [{ state, loading, error }, fetchFilms] = useHomeFetch();

  console.log(state);
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <FilmThumb />
      <Spinner />
      <LoadMore />
    </>
  );
};

export default Home;
