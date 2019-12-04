import React from "react";
const Manager = require("../utilities/Manager");
import "../style/GameStyle.css";
import "../style/style2.css";

export default class GameSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRoomData: this.props.usersRoomData
    };
    this.handleGoToLobbyButtonWrapper = this.handleGoToLobbyButtonWrapper.bind(
      this
    );
  }

  render() {
    const exitButton = (
      <button
        key="exit"
        className="logout btn btn-outline-dark"
        onClick={this.handleGoToLobbyButtonWrapper}
      >
        exit
      </button>
    );

    return (
      <div>
        {exitButton}
        <h2 key="gameSummary-title">Game Summary:</h2>

        <h2 key="winner-title">THE WINNER IS:{this.props.winName} </h2>
        <h2 key="lost-title">{this.props.lostName} lost the game...</h2>
        <h2 key="time-title">
          time:{this.props.currentTime.minutes}:{this.props.currentTime.seconds}
        </h2>

        <ul key="gameSummary-ul">
          {Object.keys(this.state.usersRoomData).map((id, index) => (
            <li key={this.state.usersRoomData[id].name + index}>
              player: {this.state.usersRoomData[id].name}
              <br />
              score: {this.state.usersRoomData[id].stats.currentScore} ||
              average time: {this.state.usersRoomData[id].stats.average.minutes}
              :{this.state.usersRoomData[id].stats.average.seconds} ||
              withdrawals: {this.state.usersRoomData[id].stats.withdrawals}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleGoToLobbyButtonWrapper() {
    this.props.handleGoToLobbyButton(this.state.usersRoomData.currentRoomName);
  }

  componentDidMount() {}

  componentWillUnmount() {
    this._isMounted = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
