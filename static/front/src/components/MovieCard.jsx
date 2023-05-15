import styles from '../css/moviesGrid.module.css'
import React from "react";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
    let title = movie.title
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <>
            <li className={styles.moviesCard}>
                <Link to={"video/" + movie.id} key={movie.id} movie={movie} movieId={movie.id}>
                    <div>
                        <picture>
                            <img src={imgUrl} alt="title" className={styles.moviesImg} />
                        </picture>
                    </div>
                    <div >
                        <p className={styles.moviesCardTitle}>
                            {title}
                        </p>
                    </div>
                </Link>
            </li>
        </>
    )
}