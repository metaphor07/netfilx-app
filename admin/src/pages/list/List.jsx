import React, { useContext, useEffect, useState } from "react";
import "./list.css";
import { NavLink, useLocation } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../DummyData";
import { Publish } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";

const List = () => {
  const location = useLocation();
  const list = location.state.data;
  console.log("list is: ", list);

  // const {list, dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);
  const [newSelectedMovies, setNewSelectedMovies] = useState(null);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setNewSelectedMovies({ ...newSelectedMovies, [e.target.name]: value });
  };

  const handleSubmit = () => {};
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <NavLink to="/newList">
          <button className="productAddButton">Create</button>
        </NavLink>
      </div>

      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list.title} />
            <label>Type</label>
            <input type="text" placeholder={list.type} />
            <label>Genre</label>
            <input type="text" placeholder={list.genre} />
          </div>
          <div className="productFormRight">
            <div className="formRight">
              <div className="addProductItem">
                <label>All Contents</label>
                <select
                  multiple
                  name="content"
                  onChange={handleSelect}
                  style={{ height: "280px" }}
                >
                  {movies.map((movie) => (
                    <option key={movie._id} value={movie._id}>
                      {movie.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="addProductButton" onClick={handleSubmit}>
              Add
            </button>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default List;
