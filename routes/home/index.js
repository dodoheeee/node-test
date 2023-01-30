"use strict";

//모듈
const express = require("express");
const app = express();

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home/index");
});

router.get("/login", (req, res) => {
    res.render("home/login");
});

module.exports = router;
