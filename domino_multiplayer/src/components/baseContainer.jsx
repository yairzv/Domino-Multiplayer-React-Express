import React from "react";
import LoginModal from "./LoginModal.jsx";
import UsersList from "./UsersList.jsx";
import GamesList from "./GamesList.jsx";
import NewGameModal from "./NewGameModal.jsx";
import Game from "./Game.jsx";
import GamesSummary from "./GameSummary.jsx";
import "../style/GameStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BaseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showLobby: false,
      showGame: false,
      showGameSummary: true,
      usersRoomData: null,
      currentTime: { minutes: 0, seconds: 0 },
      winName: null,
      lostName: null,
      currentUser: {},
      currentRoomName: null
    };
    this._isMounted = false;
    this.handleSucceededLogin = this.handleSucceededLogin.bind(this);
    this.handleLoginError = this.handleLoginError.bind(this);
    this.handleSucceedCreateNewRoom = this.handleSucceedCreateNewRoom.bind(
      this
    );
    this.handleCreateRoomError = this.handleCreateRoomError.bind(this);
    this.fetchUserInfo = this.fetchUserInfo.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.renderGame = this.renderGame.bind(this);
    this.removeAndExitToLobbyHandler = this.removeAndExitToLobbyHandler.bind(
      this
    );
    this.handleIsCurrUserInRoom = this.handleIsCurrUserInRoom.bind(this);
    this.handleSucceedJoinToRoom = this.handleSucceedJoinToRoom.bind(this);
    this.exitToLobbyHandler = this.exitToLobbyHandler.bind(this);
    this.handleGoToLobbyButton = this.handleGoToLobbyButton.bind(this);
    this.winExitToLobbyHandler = this.winExitToLobbyHandler.bind(this);
    this.handleGameDone = this.handleGameDone.bind(this);
    this._isMounted = false;
  }

  render() {
    if (this.state.showLogin) {
      return (
        <LoginModal
          key="login-modal-loginPage"
          loginSuccessHandler={this.handleSucceededLogin}
          loginErrorHandler={this.handleLoginError}
        />
      );
    } else if (this.state.showLobby) {
      return this.renderLobby();
    } else if (this.state.showGame && !this.state.showGameSummary) {
      return this.renderGame();
    } else if (!this.state.showGame && this.state.showGameSummary)
      return this.renderGameSummary();
    else return null;
  }

  handleSucceededLogin() {
    this.setState(
      () => ({ showLobby: true, showLogin: false }),
      this.getUserName
    );
  }

  handleLoginError() {
    console.error("login failed");
    this.setState(() => ({ showLogin: true }));
  }

  renderGame() {
    return (
      <Game
        removeAndExitHandler={this.removeAndExitToLobbyHandler}
        exitToLobbyHandler={this.exitToLobbyHandler}
        winExitToLobbyHandler={this.winExitToLobbyHandler}
        name={this.state.currentUser.name}
        handleIsCurrUserInRoom={this.handleIsCurrUserInRoom}
        currentRoomName={this.state.currentRoomName}
        sendUsersRoomDataToHome={this.handleGameDone}
        fetchToggle={!this.state.showLogin}
      />
    );
  }

  renderLobby() {
    return (
      <div key="home-base-container-lobby" className="home-base-container">
        <div key="user-info-area-lobby" className="user-info-area">
          Hello {this.state.currentUser.name}
          <button
            key="logout-btn-lobby"
            className="logout btn"
            onClick={this.logoutHandler}
            className="btn btn-outline-dark"
          >
            Logout
          </button>
          <h1 key="Domino multiplayer-lobby">Domino multiplayer</h1>
        </div>
        <div
          key="games-rooms-container-lobby"
          className="games-rooms-container"
        >
          <div key="new-game-area-lobby" className="new-game-area">
            <NewGameModal
              key="NewGameModal-lobby"
              currentUser={this.state.currentUser}
              createNewGameSuccessHandler={this.handleSucceedCreateNewRoom}
              createNewGameErrorHandler={this.handleCreateRoomError}
              addRoomToUser={this.handleAddRoomToUser}
              updateMyRoomId={this.updateMyRoomId}
            />
          </div>

          <div key="games-list-area-lobby" className="games-list-area">
            <GamesList
              key="GamesList-lobby"
              handleJoinToGame={this.handleSucceedJoinToRoom}
              name={this.state.currentUser.name}
              fetchToggle={!this.state.showLogin}
            />
          </div>

          <div key="users-list-area-lobby" className="users-list-area">
            <UsersList
              fetchToggle={!this.state.showLogin}
              key="UsersList-lobby"
            />
          </div>
        </div>
      </div>
    );
  }

  renderGameSummary() {
    return (
      <GamesSummary
        handleGoToLobbyButton={this.handleGoToLobbyButton}
        usersRoomData={this.state.usersRoomData}
        currentTime={this.state.currentTime}
        winName={this.state.winName}
        lostName={this.state.lostName}
        currentRoomName={this.state.currentRoomName}
        createNewGameSuccessHandler={this.handleSucceedCreateNewRoom}
      />
    );
  }

  getUserName() {
    this.fetchUserInfo()
      .then(userInfo => {
        this.setState(() => ({
          currentUser: JSON.parse(userInfo),
          showLobby: true,
          showLogin: false
        }));
      })
      .catch(err => {
        if (err.status === 401) {
          this.setState(() => ({ showLogin: true }));
        } else {
          throw err;
        }
      });
  }

  fetchUserInfo() {
    return fetch("/users", { method: "GET", credentials: "include" }).then(
      response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      }
    );
  }

  removeAndExitToLobbyHandler() {
    fetch("/users/removeGame", {
      method: "POST",
      credentials: "include"
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response;
      })
      .then(() => {
        this.handleGoToLobbyButton();
      });
  }

  exitToLobbyHandler() {
    fetch("/users/exit", { method: "GET", credentials: "include" }).then(
      response => {
        if (!response.ok) {
          console.log(
            `failed to logout user ${this.state.currentUser.name} `,
            response
          );
        }
        this.handleGoToLobbyButton();
      }
    );
  }

  handleGoToLobbyButton(currentRoomName = null) {
    this.setState(() => ({
      currentRoomName: currentRoomName,
      showGame: false,
      showLobby: true,
      showLogin: false,
      showGameSummary: false
    }));
  }

  winExitToLobbyHandler() {
    fetch("/users/winExit", { method: "GET", credentials: "include" }).then(
      response => {
        if (!response.ok) {
          console.log(
            `failed to logout user ${this.state.currentUser.name} `,
            response
          );
        }
        this.setState(() => ({
          showGame: false,
          showLobby: true,
          showLogin: false,
          showGameSummary: false
        }));
      }
    );
  }

  logoutHandler() {
    fetch("/users/logout", { method: "GET", credentials: "include" }).then(
      response => {
        if (!response.ok) {
          console.log(
            `failed to logout user ${this.state.currentUser.name} `,
            response
          );
        }
        this.setState(() => ({
          currentUser: { name: "" },
          showLogin: true,
          showGameSummary: false
        }));
      }
    );
  }

  handleGameDone(currTime, usersRoomData, win, lost) {
    this.setState(() => ({
      currentRoomName: this.state.currentRoomName,
      showLobby: false,
      showGame: false,
      showGameSummary: true,
      usersRoomData: usersRoomData,
      usersStats: usersRoomData.names,
      currentTime: currTime,
      winName: win,
      lostName: lost
    }));
  }

  handleSucceedCreateNewRoom(currentRoomName) {
    this.setState(() => ({
      currentRoomName: currentRoomName,
      showLobby: true,
      showGameSummary: false
    }));
  }

  handleSucceedJoinToRoom(currentRoomName) {
    this.setState(() => ({
      currentRoomName: currentRoomName,
      showLobby: false,
      showGame: true,
      showGameSummary: false
    }));
  }

  handleIsCurrUserInRoom() {
    this.setState(() => ({ showGame: false, showLobby: true }));
  }

  handleCreateRoomError() {
    console.error("create new room failed");
    this.setState(() => ({ showLobby: true }));
  }
}
