import React from "react";

class UserData {
  constructor(i_UserName) {
    this.name = i_UserName;
  }
}
export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errMessage: ""
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  render() {
    return (
      <div className="login-page-wrapper">
      <div className="row justify-content-center">
        <h1 className="display-4">Domino multiplayer</h1>
        </div>
        <div className="row mt-3 justify-content-center">
        <form className="form-group" onSubmit={this.handleLogin}>
          <input type="text" className="username-input  form-control"  placeholder="User Name" name="userName" />
          <input className="submit-btn btn btn-success" type="submit" value="Login" />
        </form>
        </div>
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

  handleLogin(e) {
    e.preventDefault();
    const userName = e.target.elements.userName.value;
    const userObj = new UserData(userName);
    console.log("handleLogin: userObj" + JSON.stringify(userObj));
    if (userName === "") {
      this.setState(() => ({
        errMessage: "You must to insert name!"
      }));
    } else {
      fetch("/users/addUser", {
        method: "POST",
        body: JSON.stringify(userObj),
        credentials: "include"
      }).then(response => {
        if (response.ok) {
          this.setState(() => ({ errMessage: "" }));
          this.props.loginSuccessHandler();
        } else {
          if (response.status === 403) {
            this.setState(() => ({
              errMessage: "User name already exist, please try another one"
            }));
          }
          this.props.loginErrorHandler();
        }
      });

      return false;
    }
  }
}
