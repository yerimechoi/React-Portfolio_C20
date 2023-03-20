import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Footer() {
    const overallStyle = { 
        padding: '0', 
        fontFamily: 'Helvetica', 
        fontSize: '20px', 
        width: '100%',
        backgroundColor: '#424875',
        marginTop: '50px',
    };

    const linkStyle = { 
        color: 'white', 
        fontSize: '30px' 
    };

    const style = { 
        padding: '30px 40px 30px 40px'
    };

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
                        <FontAwesomeIcon icon={brands ("github")} />
                    </a>
                </div>
                <div style={style}>
                    <a href='https://www.linkedin.com/in/ye-rim-esther-choi/' style={linkStyle}>
                        <FontAwesomeIcon icon={brands ("linkedin")} />
                    </a>
                </div>
                <div style={style}>
                <a href='https://www.linkedin.com/in/ye-rim-esther-choi/' style={linkStyle}>
                        <FontAwesomeIcon icon={solid ("address-card")} />
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;