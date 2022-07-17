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
import AdminDashboard from "./components/admin/AdminDashboard";
import UserList from "./components/admin/UserList";
import UserInfo from "./components/admin/UserInfo";
import EditUser from "./components/admin/EditUser";
import ProductList from "./components/admin/ProductList";
import ProductInfo from "./components/admin/ProductInfo";
import EditProduct from "./components/admin/EditProduct";
import CreateProduct from "./components/admin/CreateProduct";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import { loadCart } from "./actions/cart";
import OrderList from "./components/admin/OrderList";

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
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/admin/userlist' element={<UserList />} />
          <Route path='/admin/user/:id' element={<UserInfo />} />
          <Route path='/admin/user/edit' element={<EditUser />} />
          <Route path='/admin/productlist' element={<ProductList />} />
          <Route path='/admin/product/:id' element={<ProductInfo />} />
          <Route path='/admin/product/edit' element={<EditProduct />} />
          <Route path='/admin/product/create' element={<CreateProduct />} />

          <Route path='/admin/orderlist' element={<OrderList />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
