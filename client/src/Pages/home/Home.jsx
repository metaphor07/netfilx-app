import axios from "axios";
import List from "../../components/list/List";
import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { API_URL } from "../../Helper";
import { useLocation } from "react-router-dom";
import Search from "../../components/search/Search";
import { Snackbar } from "@mui/material";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [movies, setMovies] = useState(null);
  const [genre, setGenre] = useState(null);
  const [fetching, setFetching] = useState(true);

  const query = useLocation().search;

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        if (type === "search") {
          setFetching(true);
          const res = await axios.get(`${API_URL}/movies/search${query}`);
          setMovies(res.data);
          setFetching(false);
        } else {
          const res = await axios.get(
            `${API_URL}/lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("user")).accessToken,
              },
            }
          );
          setLists(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getRandomLists();
  }, [type, genre, query]);

  return (
    <div className="home">
      <Navbar />
      {/* {fetching && <span className="loading">Loading plx wait...</span>} */}
      <Featured type={type} setGenre={setGenre} />
      {lists &&
        lists.map((list) => {
          return <List list={list} />;
        })}
      {movies && <Search movies={movies} setMovies={setMovies} />}
    </div>
  );
};

export default Home;
