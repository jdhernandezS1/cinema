import React from "react";
import { Link } from "react-router-dom";
import stylesGrid from "../../css/moviesGrid.module.css";
import styles from "../../css/Header/nav.module.css";

let moviesTitle = stylesGrid.moviesTitle
let hvrBounceIn = stylesGrid.hvrBounceIn
let item = styles.item
let navBarPc = styles.navBarPc
export function NavBarPc() {
    return (
        <>
            <nav className={navBarPc}>
                <ul>
                    <li>
                        <Link to="/" className={item}>
                            <span className={moviesTitle + " " + hvrBounceIn} >
                                OmeCast
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={item}>Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog" className={item}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/Movies" className={item}>Movies</Link>
                    </li>
                    <li>
                        <Link to="/About" className={item}>About</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}