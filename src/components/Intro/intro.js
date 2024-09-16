import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/meg.JPG';
import './intro.css';

const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I`m <span className='introName'>Ingrid</span> <br />Backend Developer</span>

                <p className="introPara"> I study for a bachelor in computer science: programming and system architecture at University of Oslo.</p>
                <Link to = "/components/Resume/cv" >
                <button className="hireButton">Hire me</button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className="bg"></img>
        </section>
    )

}

export default Intro;

