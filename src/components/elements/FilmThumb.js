import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const FilmThumb = ({ image, filmId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="filmthumb" />
    ) : (
      <img src={image} alt="filmthumb" />
    )}
  </StyledMovieThumb>
);

export default FilmThumb;
