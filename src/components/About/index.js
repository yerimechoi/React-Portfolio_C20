import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function About() {
    const overallStyle = { padding: '10px' };
    return (
        <main style={overallStyle}>
            <h1>About Me</h1>
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <p>Ye Rim (Esther) Choi is a UX/UI designer and a developer based in Toronto, Canada. She graduated from architecture but decided it wasn’t for her. Two things Esther is passionate about is design and technology. She began to explore different areas of design and technology and found UX/UI was the right fit. However, she wanted to make her designs come to life by learning different coding languages. She took BrainStation UX/UI courses and is in the process of taking UofT SCS coding bootcamp.</p>
        </main>
    )
};

export default About;