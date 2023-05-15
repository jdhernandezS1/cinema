// import movies from "../movies.json";
import { MovieCard } from './MovieCard';
import styles from '../css/moviesGrid.module.css'
import React from "react";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export function GridMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <>
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
        }
      </ul>
    </>
  )
}