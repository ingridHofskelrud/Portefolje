import React from 'react';
import resume from '../../assets/resume.png';
import './cv.css';

const Cv = () => {
    return (
        <section>
            <img src={resume} alt="Profile" className="resume"></img>
        </section>
        );
}

export default Cv;