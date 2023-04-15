import React from "react";
import "./watch.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { NavLink, useLocation } from "react-router-dom";

const Watch = () => {
  // basically we are get data fro the "listItem.jsx" component
  // and, that data will send through the "NavLink"
  // so, to get that data, here we use "useLocation" hook
  const location = useLocation();
  const movie = location.state.data;

  return (
    <div className="watch">
      <NavLink to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </NavLink>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={movie.video}
      ></video>
    </div>
  );
};
export default Watch;
