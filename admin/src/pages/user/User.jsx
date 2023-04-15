import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./user.css";
import { PROXY } from "../../Helper";
import axios from "axios";

const User = () => {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [updateUsername, setUpdateUsername] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updatepassword, setUpdatepassword] = useState();
  const [updateAdmin, setUpdateAdmin] = useState();

  useEffect(() => {
    const getUser = async () => {
      const userId = location.pathname.split("/")[2];
      try {
        const res = await axios.get(`${PROXY}/users/find/${userId}`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <NavLink to="/newUser">
          <button className="userAddButton">Create</button>
        </NavLink>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user?.profilePic ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
              }
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.username}</span>
              <span className="userShowUserTitle">
                {user?.isAdmin ? "ADMIN" : "USER"}
              </span>
            </div>
          </div>
          <div className="userShowBotton">
            <span className="userShowTitle">Accoutn Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user?._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user?.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user?.username}
                  className="userUpdateInput"
                  onChange={(e) => setUpdateUsername(e.target.value)}
                  value={updateUsername}
                ></input>
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user?.email}
                  className="userUpdateInput"
                  value={updateEmail}
                  onChange={(e) => setUpdateEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="userUpdateInput"
                  value={updatepassword}
                  onChange={(e) => setUpdatepassword(e.target.value)}
                />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <label>IsAdmin: </label>
                <select
                  name="isAdmin"
                  id="isAdmin"
                  style={{ width: "90px" }}
                  value={updateAdmin}
                  onChange={(e) => setUpdateAdmin(e.target.value)}
                >
                  <option>options:-</option>
                  <option value="true">Yas</option>
                  <option value="false">No</option>
                </select>
              </div>
              <button className="userUpdateButton" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
