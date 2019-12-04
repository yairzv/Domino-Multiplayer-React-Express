const chatContentList = {};

function getChatRoomContent(myRoomId) {
  if (chatContentList[myRoomId] === undefined) {
    return [];
  } else {
    return chatContentList[myRoomId];
  }
}

function initialChatRoom(myRoomId) {
  if (chatContentList[myRoomId] === undefined) {
    chatContentList[myRoomId] = [];
  }
}

function pushContentToRoom(content, id) {
  chatContentList[id].push(content);
}

function removeChatRoom(myRoomId) {
  chatContentList[myRoomId] = undefined;
}

module.exports = {
  getChatRoomContent,
  initialChatRoom,
  pushContentToRoom,
  removeChatRoom
};
