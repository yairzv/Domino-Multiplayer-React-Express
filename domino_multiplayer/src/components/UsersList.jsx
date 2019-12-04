import React from "react";
import ReactDOM from "react-dom";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: {}
    };
    this.getUserList = this.getUserList.bind(this);
    this.getUserListWrapper = this.getUserListWrapper.bind(this);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted === true) this.getUserList();
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this.timeoutId) {
      (() => {
        clearTimeout(this.timeoutId);
      })();
    }
  }
  getUserListWrapper() {
    this.getUserList();
  }

  getUserList() {
    const interval = 1000;

    if (this.props.fetchToggle) {
      return fetch("/users/allUsers", { method: "GET", credentials: "include" })
        .then(response => {
          if (!response.ok) {
            throw response;
          }

          this.timeoutId = setTimeout(this.getUserListWrapper, interval);
          return response.json();
        })
        .then(usersList => {
          if (this._isMounted) this.setState(() => ({ usersList }));
        })
        .catch(err => {
          throw err;
        });
    } else {
      this.timeoutId = setTimeout(this.getUserListWrapper, interval);
    }
  }

  render() {
    return (
      <div key="usersList-Wrapper">
        <h2 key="usersList-title">users List:</h2>
        <ul key="usersList-ul">
          {Object.keys(this.state.usersList).map((id, index) => (
            <li key={JSON.parse(this.state.usersList[id]).name + index}>
              {JSON.parse(this.state.usersList[id]).name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
