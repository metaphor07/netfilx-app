import React, { useEffect, useState } from "react";
import "./listItem.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { API_URL } from "../../Helper";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${API_URL}/movies/find/${item}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [item]);

  // when we click the item we need to redirect through the "watch" page
  // but, here the problem is we need to send "movie" variabel, cause it contains the main video
  // so, we use like this bellow
  return (
    <NavLink to="/watch" state={{ data: movie }} className="link">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop></video>

            <div className="itemInfo">
              <div className="itemIcons">
                <PlayArrowIcon className="itemicon" />
                <AddIcon className="itemicon" />
                <ThumbUpOutlinedIcon className="itemicon" />
                <ThumbDownOutlinedIcon className="itemicon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </NavLink>
  );
};

export default ListItem;
