import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
