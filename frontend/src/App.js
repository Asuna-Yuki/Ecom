import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Product from "./components/layouts/Product";
import Cart from "./components/layouts/Cart";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
