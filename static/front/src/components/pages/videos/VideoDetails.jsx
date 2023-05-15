import React from "react";
// import movie from "../movie.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../../../utils/httpClient";
import { Stars } from "./Stars";
import styles from "../../../css/movies/movies.module.css";

export function MovieDet() {
    const { videoId } = useParams();
    console.log(videoId)
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + videoId).then((data) => {
            setMovie(data);
        });
    }, [videoId]);
    console.log(movie)
    if (!movie) {
        return null;
      }
    let title = movie.title
    let genres = movie.genres.map(genre => genre.name).join(", ")
    let overview = movie.overview
    let vote_average = movie.vote_average
    let production_companies = movie.production_companies.map(production => production.name).join(", ")
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <>
            <div className={styles.videoCard}>
                <h1 className={styles.strongText}>{title}</h1>
                <div>
                    <picture>
                        <img src={imgUrl} alt="title" />
                    </picture>
                </div>
                <div className={styles.description}>
                    <strong className={styles.strongText}>Genre: </strong>{genres}
                    <p>
                        <strong className={styles.strongText}>Overview: </strong> {overview}
                    </p>
                    <p>
                        Rating: {vote_average}
                    </p>
                    <p>
                        <strong className={styles.strongText}>Production Companies: </strong> {production_companies}
                    </p>
                    {
                        <Stars number={parseInt(vote_average)} />
                    }
                </div>
            </div>
        </>
    )
}

