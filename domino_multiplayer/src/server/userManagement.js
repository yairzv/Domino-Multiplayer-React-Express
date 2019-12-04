const express = require("express");
const router = express.Router();
const auth = require("./auth");
const games= require("./games")

const userManagement = express.Router();

userManagement.get("/", auth.userAuthentication, (req, res) => {
  const user = auth.getUserInfo(req.session.id);
  res.json(user)
});

userManagement.get("/allUsers", auth.userAuthentication, (req, res) => {
  res.json(auth.getUserList());
});

userManagement.post("/addUser", auth.addUserToAuthList, (req, res) => {
  res.sendStatus(200);
});

userManagement.get("/logout", [
  (req, res, next) => {
    const userInfo = auth.getUserInfo(req.session.id);
    next();
  },
  auth.removeUserFromAuthList,
  (req, res) => {
    res.sendStatus(200);
  }
]);

userManagement.post("/removeGame", [
  (req, res, next) => {
    const userInfo = auth.getUserInfo(req.session.id);
    next();
  },
  games.removeGameFromGamesList,
  (req, res) => {
    res.sendStatus(200);
  }
]);

userManagement.get("/exit", [
  (req, res, next) => {
    const userInfo = auth.getUserInfo(req.session.id);
    next();
  },
  games.removeUserFromGame,
  (req, res) => {
    res.sendStatus(200);
  }
]);

userManagement.get("/winExit", [
  (req, res, next) => {
    const userInfo = auth.getUserInfo(req.session.id);
    next();
  },
  games.winExit,
  (req, res) => {
    res.sendStatus(200);
  }
]);
module.exports = userManagement;
