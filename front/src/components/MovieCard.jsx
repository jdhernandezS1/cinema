import styles from '../css/moviesGrid.module.css'
import React from "react";

export function MovieCard({movie}) {
    let title = movie.title
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
      <li className={styles.moviesCard}>
        <div>
            <picture>
                <img src={imgUrl} alt="title" className={styles.moviesImg}/>
            </picture>
        </div>
        <div>
            <p>
                {title}
            </p>
        </div>
      </li>
    )
}