import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderTab = () => {
      if (currentPage === 'About') {
          return <About />;
      } if (currentPage === 'Portfolio') {
          return <Portfolio />;
      }if (currentPage === 'Contact') {
          return <Contact />;
      }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderTab()}
      <Footer />
    </div>
  );
}

export default App;
