import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/bear.png';
import contactImg from '../../assets/heart.png';
import './navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="home">
                <Link to = "http://localhost:3000">Home</Link>
            </div>
            <div className = "aboutme">
                <Link to = "/components/AboutMe/moreMe">About</Link>
            </div>
            <div className = "subjects">
                <Link to = "/components/Subjects/subjects">Subjects</Link>
            </div>
            <div className = "projects">
                <Link to = "/components/Projects/projects">Projects</Link>
            </div>
            <button className="desktopMenuButton">
                <img src={contactImg} alt = "contactImg" className="desktopMenuImg" />Contact me</button>
        </nav>
    )
}

export default Navbar;