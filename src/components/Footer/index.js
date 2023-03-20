import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from 'react-router-dom';

function Footer() {
    const overallStyle = { padding: '20px', fontFamily: 'Helvetica', fontSize: '20px', backgroundColor: 'black' };
    const linkStyle = { textDecoration: 'none', color: 'white' };
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
                    <button style={linkStyle}>
                        {/* <Link to="https://github.com/yerimechoi"> */}
                        <FontAwesomeIcon icon="fa-brands fa-github" />
                        {/* </Link> */}
                    </button>
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