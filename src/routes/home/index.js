"use strict";

//모듈
const express = require("express");
const app = express();

// 라우팅
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);
router.get("/login", ctrl.login);

module.exports = router;
