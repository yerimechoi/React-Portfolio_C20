import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function About() {
    const overallStyle = {
        padding: '60px 60px',
        fontFamily: 'Helvetica',
        color: '#2f3356',
    };

    const iconStyle = {
        fontSize: '150px',
        padding: '10px 0 10px 0',
        margin: '0 25px 0 10px'
    }

    const layoutStyle = {
        display: 'flex',
        flexDirection: 'row',
        margin: '50px 0 0 0',
    }

    const paraStyle = {
        padding: '10px 0 10px 0',
        margin: '25px 10px 0 75px'
    }

    return (
        <main style={overallStyle}>
            <h1>About Me</h1>
            <div style={layoutStyle}>
                <h1 style={iconStyle}><FontAwesomeIcon icon={solid("user")} /></h1>
                <h3 style={paraStyle}>Ye Rim (Esther) Choi is a UX/UI designer and a developer based in Toronto, Canada. She graduated from architecture but decided it wasn’t for her. Two things Esther is passionate about is design and technology. She began to explore different areas of design and technology and found UX/UI was the right fit. However, she wanted to make her designs come to life by learning different coding languages. She took BrainStation UX/UI courses and is in the process of taking UofT SCS coding bootcamp.</h3>
            </div>

        </main>
    )
};

export default About;