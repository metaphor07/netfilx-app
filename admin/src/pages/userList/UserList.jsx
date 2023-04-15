import React, { useContext, useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCall";
import { UserContext } from "../../context/userContext/UserContext";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "./UserList";
import { NavLink } from "react-router-dom";
export { userRows } from "../../DummyData";

const UserList = () => {
  const [data, setData] = useState(userRows);
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("delete clicked");
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "users",
      headerName: "Users",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={
                params.row.profilePic ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
              }
              alt=""
              className="userListImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "isAdmin", headerName: "isAdmin", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <NavLink to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </NavLink>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
};

export default UserList;
