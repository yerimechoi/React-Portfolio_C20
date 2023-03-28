import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {
    return (
        <main className="about">
            <h2 className="headerAbout">About Me</h2>
            <div className="aboutMeLayout">
                <h1 className="icon">
                    <FontAwesomeIcon icon={solid ("user")} />
                    </h1>
                <p className="aboutMePara">Ye Rim (Esther) Choi is a UX/UI Designer and a Developer based in Toronto, Canada. She graduated from architecture but decided it wasn’t for her. Two things Esther is passionate about is design and technology. She began to explore different areas of design and technology and found UX/UI was the right fit. However, she wanted to make her designs come to life by learning different coding languages. She took BrainStation UX/UI courses and is in the <span className="word">process of taking UofT SCS coding bootcamp.</span></p>
            </div>
            <div>
                <h3 className="aboutMeSubHeader">Education</h3>
                <ul className="aboutMeUl">
                    <li>Present: Certificate, Coding Bootcamp, UofT CSC</li>
                    <li>Spring 2022: Certificate for UX Design, BrainStation</li>
                    <li>Winter 2022: Certificate for UI Design, BrainStation</li>
                    <li>Summer 2021: BDes, Environmental Design, OCAD University</li>
                </ul>
            </div>
        </main>
    )
};

export default About;