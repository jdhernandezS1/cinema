import { MovieCard } from '../../MovieCard';
import styles from '../../../css/moviesGrid.module.css'
import React from "react";
import { useEffect, useState } from "react";
import { get } from "../../../utils/httpClient";



export function GridMovies() {
    let pagination = styles.pagination
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/movie/upcoming").then((data) => {
            setMovies(data.results);
        });
    }, []);

    // Paginate
    let itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(movies.length / itemsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <ul className={styles.moviesGrid}>
                {
                    currentItems.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </ul>
            {/* Pagination Fragment */}
            <div className={pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={"btnPag " + currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    )
};
