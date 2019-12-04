import React from "react";
import ReactDOM from "react-dom";
import { hostname } from "os";

class GameData {
  constructor(i_HostName, i_HostId, i_GameName, i_NumPlayerToStart) {
    this.id = i_HostId;
    this.gameName = i_GameName;
    this.numPlayerToStart = i_NumPlayerToStart;
    this.numberOfSubscribes = 0;
    this.isGameStart = false;
    this.subscribesList = new Array(i_NumPlayerToStart);
    this.subscribesList[0] = i_HostId;
    this.hostName = i_HostName;
  }
}

export default class NewGameModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errMessage: "",
      hostName: props.currentUser.name
    };

    this.handleGameRoomCreator = this.handleGameRoomCreator.bind(this);
  }

  render() {
    return (
      <div className="new-game-div">
        <form
          className="new-game-wrapper"
          onSubmit={this.handleGameRoomCreator}
        >
          <label className="newGame-input-label" htmlFor="userName">
            room name:{" "}
          </label>
          <input className="newGame-input" name="gameName" />
          <label className="newGame-input-label" htmlFor="userName">
            num of players:{" "}
          </label>
          <p>Amount of members:</p>
          <label>
            {" "}
            <input
              type="radio"
              className="newGame-input"
              name="numOfPlayers"
              value="2"
              id="r1"
              defaultChecked 
            />
            2
          </label>
          <label>
            {" "}
            <input
              type="radio"
              className="newGame-input"
              name="numOfPlayers"
              value="3"
              id="r2"
            />
            3
          </label>

          <input className="btn btn-outline-dark" type="submit" value="confirm" />
        </form>
        {this.renderErrorMessage()}
      </div>
    );
  }

  renderErrorMessage() {
    if (this.state.errMessage) {
      return <div className="login-error-message">{this.state.errMessage}</div>;
    }
    return null;
  }

  handleGameRoomCreator(e) {
    e.preventDefault();
    const gameName = e.target.elements.gameName.value;
    const numOfPlayers = e.target.elements.numOfPlayers.value;
    let gameObj = new GameData(
      this.props.currentUser.name,
      this.props.currentUser.id,
      gameName,
      numOfPlayers
    );
    fetch("/games/addGame", {
      method: "POST",
      body: JSON.stringify(gameObj),
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          if (response.status === 403) {
            this.setState(() => ({
              errMessage: " Game name already exist, or you host of other room"
            }));
          }
          this.props.createNewGameErrorHandler();
        }
      })
      .then(() => this.props.createNewGameSuccessHandler(gameName));
    return false;
  }
}
