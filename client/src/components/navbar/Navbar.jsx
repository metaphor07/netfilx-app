import React, { useContext, useState } from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthAction";
import Setting from "../setting/Setting";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const [sOpen, setSOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");

  const { user, dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleSearch = () => {
    if (search === false) {
      setSearch(true);
    } else if (search === true && q !== "") {
      navigate(`/search?q=${q}`);
    } else {
      setSearch(false);
    }
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navContainer">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
          <NavLink to="/" className="link">
            <span className="navItem">Home</span>
          </NavLink>
          <NavLink to="/movies" className="link">
            <span className="navItem">Movies</span>
          </NavLink>
          <NavLink to="/series" className="link">
            <span className="navItem">Series</span>
          </NavLink>

          <NavLink to="/series" className="link">
            <span className="navItem">New</span>
          </NavLink>
          {/* 
          <NavLink to="/series" className="link">
            <span className="navItem">List</span>
          </NavLink> */}
        </div>
        <div className="right">
          {search && (
            <input
              className="inputSearch"
              type="text"
              placeholder="Search for movies, series, anime..."
              onChange={(e) => setQ(e.target.value)}
            />
          )}
          <SearchIcon className="icon" onClick={handleSearch} />
          <span
            className="navItem"
            onClick={() => (navigate = "/kids")}
            style={{ cursor: "pointer" }}
          >
            Kids
          </span>
          <NotificationsIcon className="icon" />
          <img
            src={
              user?.profilePic ||
              "data:image/jpeg;base64,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"
            }
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span onClick={() => setSOpen(true)}>Settings</span>
              <SettingsIcon
                className="mobileIcon"
                onClick={() => setSOpen(true)}
              />
              <span onClick={() => dispatch(logout())}>Log Out</span>
              <LogoutIcon
                className="mobileIcon"
                onClick={() => dispatch(logout())}
              />
            </div>
          </div>
        </div>
      </div>
      {sOpen && <Setting setSOpen={setSOpen} user={user} />}
    </div>
  );
};

export default Navbar;
