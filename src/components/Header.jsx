import React, { useState } from "react";
import "../styles/Header.styles.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <div className="navigation-container">
            <nav className="navigation">
                <Link to="/" className="logo">
                    <img alt="logo" src="../../assets/icon.svg" width={"30px"} />
                </Link>
                <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                    <FaBars />
                </button>
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <ul>
                        <li>
                            <Link onClick={() => setIsNavExpanded(false)} to="/">Home</Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsNavExpanded(false)} to="/about">About</Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsNavExpanded(false)} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsNavExpanded(false)} to="/skills">Skills</Link>
                        </li>
                        <li className="navigation-socials">
                            <a className="navigation-social" href="https://github.com/asrato" target={'_blank'}>
                                <img alt="github" src="../../assets/github.svg" className="navigation-icon" />
                            </a>
                            <a className="navigation-social" href="https://www.linkedin.com/in/asrato/" target={'_blank'}>
                                <img alt="linkedin" src="../../assets/linkedin.svg" className="navigation-icon" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;