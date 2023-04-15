import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featured.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../Helper";

const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        const getData = res.data;
        setContent(getData[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, []);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content?.img} alt="" />
      <div className="info">
        {/* <img src={""} alt="" /> */}
        <span className="title">{content.title}</span>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <NavLink to="/watch" state={{ data: content }} className="link">
            <button className="play">
              <PlayArrowIcon className="bIcon" />
              <span>Play</span>
            </button>
          </NavLink>
          <button className="more">
            <InfoOutlinedIcon className="bIcon" />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
