import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div>
      <Header />
        <Navigation
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      <Footer />
    </div>
  );
}

export default App;
