"use strict";
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const {
  middlewareServerError,
  middlewarePageNotFound,
} = require("./Middleware/errorhandleing");

const apiRouter = require("./Routers/agents");

app.use(express.json());
app.use(cors());

app.use(middlewareServerError);
app.use(middlewarePageNotFound);

// app.use("/", express.static("frontend")); // serve main path as static dir
// app.get("/", function (req, res) {
//   // serve main path as static file
//   res.sendFile(path.resolve("../frontend/index.html"));
// });
app.use("/", apiRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
