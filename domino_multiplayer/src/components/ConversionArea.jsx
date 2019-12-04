import React from "react";
import ReactDOM from "react-dom";

export default class ConversionArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
    this._isMounted = false;
    this.getChatContent = this.getChatContent.bind(this);
    this.getChatContentWrapper = this.getChatContentWrapper.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    //console.log(this.props.isUserConnected);
    if (this._isMounted === true) this.getChatContent();
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this.timeoutId) {
      (() => {
        clearTimeout(this.timeoutId);
      })();
    }
  }

  render() {
    return (
      <div
        key="converssion-area-wrpper-div"
        className="converssion-area-wrpper"
      >
        {this.state.content.map((line, value) => (
          <p key={value}>
            {line.user}: {line.text}
          </p>
        ))}
      </div>
    );
  }

  getChatContentWrapper() {
    this.getChatContent();
  }

  getChatContent() {
    const interval = 1000; //TODO: change to 200
    if (this.props.isUserConnected) {
      return fetch("/chat", { method: "GET", credentials: "include" })
        .then(response => {
          if (!response.ok) {
            throw response;
          }
          this.timeoutId = setTimeout(this.getChatContentWrapper, interval);
          return response.json();
        })
        .then(content => {
          if (this._isMounted) this.setState(() => ({ content: content }));
        })
        .catch(err => {
          throw err;
        });
    }
  }
}
