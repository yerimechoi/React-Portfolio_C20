import React from 'react';

function Header() {
    const onButtonClick = () => {
        fetch('resume.pdf').then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                const fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.download = 'resume.pdf';
                fileLink.click();
            })
        })
    };

    const overallStyle = { padding: '20px', fontFamily: 'Helvetica', fontSize: '20px'};
    const linkStyle = { padding: '10px', textDecoration: 'none', color: 'black' };

    return (
        <nav style={overallStyle}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div>
                    <a href="/" style={linkStyle}>Esther Choi</a>
                </div>
                <div>
                    <a href="/" style={linkStyle}>About</a>
                </div>
                <div>
                    <a href="/portfolio" style={linkStyle}>Portfolio</a>
                </div>
                <div>
                    <a href="/contact" style={linkStyle}>Contact</a>
                </div>
                <div>
                    <button onclick={onButtonClick}
                    style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '20px'
                    }}>Resume</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;