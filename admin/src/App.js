import React from "react";

import "./app.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListsList from "./pages/listsList/ListsList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <>
          <Topbar />
          <div className="appContainer">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userid" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />

              <Route path="/movies" element={<ProductList />} />
              <Route path="/product/" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />

              <Route path="/lists" element={<ListsList />} />
              <Route path="/list" element={<List />} />
              <Route path="/newList" element={<NewList />} />
            </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
