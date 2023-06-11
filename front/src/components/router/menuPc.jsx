import React from "react";
import { Link } from "react-router-dom";
import stylesGrid from "../../css/moviesGrid.module.css";
import styles from "../../css/Header/nav.module.css";

let moviesTitle = stylesGrid.moviesTitle
let item = styles.item
let navBarPc = styles.navBarPc
export function NavBarPc() {
    return (
        <>
            <nav className={navBarPc}>
                        <Link to="/" className={item + " " +moviesTitle }>
                                OmeCast
                        </Link>
                <ul className="menu">

                    <li>
                        <Link to="/Blog" className={item}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/Movies" className={item}>Movies</Link>
                    </li>
                    <li>
                        <Link to="/About" className={item}>About Us </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}