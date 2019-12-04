import React from "react";
import ConversionArea from "./ConversionArea.jsx";
import ChatInput from "./ChatInput.jsx";

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key="chat-container-in-chat-container" className="chat-container">
        <ConversionArea
          isUserConnected={this.props.isUserConnected}
          key="ConversionArea-chat-container"
        />
        <ChatInput key="ChatInput-chat-container" />
      </div>
    );
  }
}
