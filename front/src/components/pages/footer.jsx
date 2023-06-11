import React from "react";
import styles from "../../css/footer/footer.module.css"
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export function Footer() {
    let foot = styles.foot
    let links = styles.links
    let references = styles.references
    return (
        <footer className="footer">
            <hr />
            <div className={"footer-links " + links}>
                <ul className={"" + links}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className={"container " + foot}>
                <div className="footer-social">
                    <div className={references}>
                        <h3>Developed By</h3>
                        <p>David Hernandez </p>
                        <a href="https://www.linkedin.com/in/9david-hernandez7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/jdhernandezS1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>
                <p className="footer-disclaimer">This is An Personal Project Just Academy objetives all Rights Reserved.</p>
            </div>
        </footer>
    );
}