import React from "react";

export default class GameObjList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      gameName: props.data.gameName,
      roomId: props.data.id,
      isGameStart: false
    };
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }
  render() {
    const validRoomStyle = {
      backgroundColor: "green"
    };

    const invalidRoomStyle = {
      backgroundColor: "red"
    };
    let style;
    if (this.props.data.numberOfSubscribes === this.props.data.numPlayerToStart)
      style = invalidRoomStyle;
    else style = validRoomStyle;

    return (
      <p style={style} onClick={this.handleRoomClick}>
        room name: {this.props.data.gameName} || opened by:{" "}
        {this.props.data.hostName} || subscribes:{" "}
        {this.props.data.numberOfSubscribes}/{this.props.data.numPlayerToStart}
      </p>
    );
  }

  handleRoomClick(e) {
    e.preventDefault();

    if (this.props.data.numberOfSubscribes < this.props.data.numPlayerToStart) {
      this.addCurrUserToThisRoom();
      this.props.handleJoinToGame(this.state.gameName);
    }
  }

  addCurrUserToThisRoom() {
    fetch("/games/addUser", {
      method: "POST",
      body: JSON.stringify({
        roomId: this.state.roomId,
        gameName: this.state.gameName,
        name: this.props.name
      }),
      credentials: "include"
    }).then(response => {
      if (!response.ok) {
        if (response.status === 403) {
          this.setState(() => ({
            errMessage: "Unable to add the user, to the room."
          }));
        }
      }
    });
  }
}
