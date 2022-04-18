import React, { useState } from "react";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AppsList from "./components/AppsList";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <AppsList />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="General">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer></Footer>
    </div>
  );
}

export default App;
