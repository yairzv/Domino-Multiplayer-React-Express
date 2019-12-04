const userList = {};

function userAuthentication(req, res, next) {
  console.log(JSON.stringify(userList[req.session.id]));
  if (userList[req.session.id] === undefined) {
    res.sendStatus(401);
  } else {
    next();
  }
}

function addUserToAuthList(req, res, next) {
  if (userList[req.session.id] !== undefined) {
    res.status(403).send("user already exist");
  } else {
    for (sessionId in userList) {
      const user = userList[sessionId];
      if (user === req.body) {
        res.status(403).send("user name already exist");

        return;
      }
    }
    userList[req.session.id] = req.body;
    next();
  }
}

function removeUserFromAuthList(req, res, next) {
  if (userList[req.session.id] === undefined) {
    res.status(403).send("user does not exist");
  } else {
    delete userList[req.session.id];
    next();
  }
}

function getUserInfo(id) {
  return userList[id];
}

function getUserList() {
  return userList;
}

module.exports = {
  userAuthentication,
  addUserToAuthList,
  removeUserFromAuthList,
  getUserInfo,
  getUserList
};
