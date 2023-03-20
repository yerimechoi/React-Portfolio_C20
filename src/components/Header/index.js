import React from 'react';

function Header(currentPage, handlePageChange) {
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

    const overallStyle = {
        fontFamily: 'Helvetica',
        backgroundColor: '#424875',
        padding: '10px',
        display: 'flex',
        flexDirection: 'center',
        justifyContent: 'space-between',
        marginBottom: '50px',
    };

    const linkStyle = {
        padding: '23px',
        margin: '23px',
    };

    const titleLinkStyle = {
        padding: '20px',
        margin: '20px',
    }

    const titleStyle = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '30px',
    }

    const style = {
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
    }

    return (
        <nav style={overallStyle}>
            <div
            style={{
            }}>
                <div style={titleLinkStyle}>
                    <a href="/" style={titleStyle} onClick={() => handlePageChange('About')} className={currentPage === 'About'}>Esther Choi</a>
                </div>
            </div>

            <div
            style={{
                display: 'flex',
            }}
            >
                <div style={linkStyle}>
                    <a href="/" style={style} onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                </div>
                <div style={linkStyle}>
                    <a href="/portfolio" style={style} onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </div>
                <div style={linkStyle}>
                    <a href="/contact" style={style} onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </div>
                <div>
                    <button onClick={onButtonClick}
                        style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            fontSize: '20px',
                            cursor: 'pointer',
                            padding: '23px',
                            margin: '23px',
                            color: 'white',
                        }}>Resume</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;