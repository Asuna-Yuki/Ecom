import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/layouts/Navbar";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Product from "./components/layouts/Product";
import Cart from "./components/layouts/Cart";
import Alert from "./components/layouts/Alert";
import Address from "./components/auth/Address";
import Payment from "./components/auth/Payment";
import Checkout from "./components/auth/Checkout";
import Order from "./components/auth/Order";
// Admin
import Users from "./components/admin/Users";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { loadCart } from "./actions/cart";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
if (!localStorage.cartItems) {
  localStorage.setItem("cartItems", JSON.stringify([]));
}
if (!localStorage.shippingAddress) {
  localStorage.setItem(
    "shippingAddress",
    JSON.stringify({ address: "", state: "", city: "", pincode: "" })
  );
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadCart());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/admin/users' element={<Users />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
