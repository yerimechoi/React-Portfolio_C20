import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    const overallStyle = { padding: '20px', fontFamily: 'Helvetica', fontSize: '20px' };
    const linkStyle = { textDecoration: 'none', color: 'black' };
    const style = { padding: '10px' };

    return (
        <footer style={overallStyle}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}  
            >
                <div style={style}>
                    <a href='https://github.com/yerimechoi' style={linkStyle}>
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                        <p>GitHub</p>
                    </a>
                </div>
                <div style={style}>
                    <a href='https://www.linkedin.com/in/ye-rim-esther-choi/' style={linkStyle}>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        <p>LinkedIn</p>
                    </a>
                </div>
                <div style={style}>
                    <a href='/Contact' style={linkStyle}>
                        <FontAwesomeIcon icon="fa-solid fa-address-book" />
                        <p>Contact Me</p>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;