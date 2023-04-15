import React, { useContext, useRef, useState } from "react";
import "./newUser.css";
import { UserContext } from "../../context/userContext/UserContext";
import { createUser } from "../../context/userContext/apiCall";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const NewUser = () => {
  const { dispatch } = useContext(UserContext);

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const adminRef = useRef();
  const [check, setCheck] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      isAdmin: adminRef.current.value,
    };
    createUser(user, dispatch, setCheck);
  };

  return (
    <div className="newUser">
      <Stack sx={{ width: "100%" }} spacing={2}>
        {check === "success" && (
          <Alert
            onClose={() => {
              setCheck(null);
            }}
          >
            User Create Successfully...
          </Alert>
        )}
        {check === "error" && (
          <Alert
            severity="error"
            onClose={() => {
              setCheck(null);
            }}
          >
            An error occured...
          </Alert>
        )}
      </Stack>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" ref={usernameRef} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" ref={emailRef} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" ref={passwordRef} />
        </div>
        {/* <div className="newUserItem">
          <label>Confirm Password</label>
          <input type="password" placeholder="confirm password" />
        </div> */}

        <div className="newUserItem">
          <label>IsAdmin</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="newUserSelect"
            ref={adminRef}
          >
            <option value="true">Yas</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="newUserButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
