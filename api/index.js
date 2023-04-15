const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const moviesRoute = require("./routes/movies");
const listsRoute = require("./routes/lists");
const port = process.env.PORT || 5000;

// Database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connection Successful...");
  })
  .catch((error) => {
    console.log(`DB connection Error: ${error}`);
  });

app.use(express.json());
app.use(cors());

//   Define all the routes here
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/lists", listsRoute);

app.listen(port, () => {
  console.log(`listning on port no. ${port}`);
});
