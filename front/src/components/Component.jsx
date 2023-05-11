import movies from "../movies.json";
import {MovieCard} from './MovieCard';
import styles from '../css/moviesGrid.module.css'
import React from "react";

export function GridMovies() {
    return (
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))

        }
      </ul>
      )
}