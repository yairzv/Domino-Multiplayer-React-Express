const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const auth = require("./auth");
const games = require("./games");
const chat = require("./chat");

const chatManagement = express.Router();

chatManagement.use(bodyParser.text());

chatManagement.get(
  "/",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    const myRoomId = JSON.parse(games.getMyRoomId(req)).id;
    const content = chat.getChatRoomContent(myRoomId);
    res.status(200).json(content);
  }
);

chatManagement.post(
  "/",
  auth.userAuthentication,
  games.isUserInRoom,
  (req, res) => {
    const body = req.body;
    const myRoomId = JSON.parse(games.getMyRoomId(req)).id;
    chat.initialChatRoom(myRoomId);
    const userInfo = JSON.parse(auth.getUserInfo(req.session.id)).name;
    chat.pushContentToRoom({ user: userInfo, text: body }, myRoomId);
    res.sendStatus(200);
  }
);

module.exports = chatManagement;
