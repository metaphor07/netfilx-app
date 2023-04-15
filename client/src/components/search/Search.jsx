import React from "react";
import "./search.css";
import { NavLink, useNavigate } from "react-router-dom";
const Search = ({ movies, setMovies }) => {
  const navigate = useNavigate();
  return (
    <div className="setting">
      <div className="settingWrapper">
        <h2 className="stitle">Search results...</h2>
        <div className="close" onClick={() => setMovies("")}>
          X
        </div>

        <div className="searchItems">
          {movies?.map((movie) => (
            <NavLink to="/watch" state={{ data: movie }} className="link">
              <div className="searchItem">
                <div className="sLeft">
                  <img src={movie?.img} alt="" className="itemImg" />
                </div>
                <div className="sRight">
                  <div className="firstDetails">
                    <span className="itemTitle">{movie?.title}</span>
                    <span className="desc">{movie?.desc}</span>
                  </div>
                  <div className="details">
                    <span className="dItem">{movie?.year}</span>
                    <span
                      className="dItem"
                      style={{
                        border: "1px solid red",
                        borderRadius: "50%",
                        color: "white",
                        padding: "3px",
                      }}
                    >
                      {movie?.limit}+
                    </span>
                    <span className="dItem">{movie?.genre}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
