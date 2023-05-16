import React from 'react'
import { GridMovies } from './home/HomeGrid';
import styles from "../../css/home/home.module.css"

export function Home() {
  let title = styles.title
  let titleHighlight = styles.titleHighlight
  return (
    <div className="home-view">
      <div className={title}>
        <h1>
          New <span className={titleHighlight}>Titles</span>
        </h1>
      </div>
      <GridMovies />
    </div>);
}
