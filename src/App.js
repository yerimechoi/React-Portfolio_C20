import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderTab = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'About') {
      return <About />;
    } if (currentPage === 'Work') {
      return <Work />;
    } if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderTab()}
      <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default App;
