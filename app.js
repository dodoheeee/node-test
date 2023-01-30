"use strict";

//모듈
const express = require("express");
const app = express();
const PORT = 3000;

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//미들웨어
const home = require("./routes/home");
app.use("/", home); // use => 미들 웨어를 등록해주는 메서드

app.listen(PORT, () => {
    console.log("서버 가동");
});
