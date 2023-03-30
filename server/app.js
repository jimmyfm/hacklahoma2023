var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var wss = require("./routes/ws");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Docs here https://expressjs.com/en/4x/api.html#app.use
app.use("/", indexRouter);
app.use("/api", apiRouter);

module.exports = { app, wss };
