import React, { useContext, useState } from "react";
import "./setting.css";
import { useNavigate } from "react-router-dom";
import storage from "../../firebase";
import PublishIcon from "@mui/icons-material/Publish";
import { AuthContext } from "../../context/authContext/AuthContext";
import { userUpdate } from "../../context/authContext/apiCalls";

const Setting = ({ setSOpen, user }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [img, setImg] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const upload = (items) => {
    console.log(items);
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/users/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setInputs((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded(true);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: img, label: "profilePic" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(uploaded);
    if (uploaded) {
      userUpdate(user, inputs, dispatch);
      navigate("/");
    }
  };
  return (
    <div className="setting">
      <div className="settingWrapper">
        <h2 className="stitle">Update Your Profile</h2>
        <div className="close" onClick={() => setSOpen(false)}>
          X
        </div>
        <form className="updateForm">
          <div className="formInputs">
            <input
              type="text"
              placeholder={user?.username}
              className="inputItem"
              required
              name="username"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder={user?.email}
              className="inputItem"
              required
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="inputItem"
              required
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="imgUpload">
            <img
              src={
                user?.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="userImg"
            />
            <div className="uploadBtn">
              <input
                type="file"
                required
                onChange={(e) => setImg(e.target.files[0])}
              />
              {!uploaded && (
                <>
                  <PublishIcon onClick={handleUpload} className="pIcon" />
                  <span style={{ color: "green" }}>upload first</span>
                </>
              )}
            </div>
          </div>
        </form>
        <button
          className="updateBtn"
          onClick={handleSubmit}
          disabled={!uploaded}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Setting;
