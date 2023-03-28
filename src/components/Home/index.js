import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

function Home() {  
    const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

    return (
        <main className="home">
            <h2 className="welcome">Welcome!</h2>
            <div className="bounce">
                <Bounce><h1>Ye Rim (Esther) Choi</h1></Bounce>
                <h2>is a <span className="word">Developer</span> and <span className="word">UX/UI Designer</span> who uses her background in architecture to create accessible designs for a better user experience.</h2>
            </div>
        </main>
    )
};

export default Home;