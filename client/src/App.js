import React, { useContext } from "react";
import "./app.css";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Watch from "./Pages/watch/Watch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Register />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/search" element={<Home type="search" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
      {/* <Home /> */}
      {/* <Watch /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </BrowserRouter>
  );
};

export default App;
