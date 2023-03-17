import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Navigation(props) {
    const {
        currentTab
    } = props;

    const renderTab = () => {
        if (currentTab === 'About') {
            return <About />;
        } if (currentTab === 'Portfolio') {
            return <Portfolio />;
        }if (currentTab === 'Contact') {
            return <Contact />;
        }
    };

    return (
        <main>
            {renderTab()}
        </main>
    )
};

export default Navigation;