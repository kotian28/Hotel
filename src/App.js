import React from "react";
import "../src/css/style.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Menu from "../src/components/Menu";
import Review from "../src/components/Review";
import Contact from "../src/components/Contact";
import Blog from "../src/components/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu/>
      <Review/>
      <Contact/>
      <Blog/>
    </>
  );
};

export default App;


