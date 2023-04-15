import { Visibility } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./widgetSm.css";
import { PROXY } from "../../Helper";
const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`${PROXY}/users?new=ture`, {
          headers: {
            token: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);
  console.log(newUsers);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => {
          return (
            <>
              <li className="widgetSmListItem">
                <img
                  src={
                    user.profilePic ||
                    "https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
                  }
                  alt="profilepic"
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
                  <span className="widgetSmUserTitle">{user.email}</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
