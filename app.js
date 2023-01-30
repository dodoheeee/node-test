const express = require("express");
const app = express();

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");
});

app.get("/login", (req, res) => {
    res.send("여기는 로그인 페이지 입니다.");
});

app.listen(3000, () => {
    console.log("서버 가동");
});
