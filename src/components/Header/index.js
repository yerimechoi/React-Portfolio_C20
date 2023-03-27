import React from 'react';

function Header({ currentPage, handlePageChange }) {
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

    return (
        <nav className="headerStyle">
            <div className="headerNavStyle">
                <a href="#" onClick={() => handlePageChange('Home')}>YREC</a>
            </div>

            <div className="flex">
                <div className="headerNavLi">
                    <a href="#about" onClick={() => handlePageChange('About')}>About</a>
                </div>
                <div className="headerNavLi">
                    <a href="/work" onClick={() => handlePageChange('Work')}>Work</a>
                </div>
                <div className="headerNavLi">
                    <a href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                </div>
                <div className="headerNavLi">
                    <button onClick={onButtonClick}>Resume</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;