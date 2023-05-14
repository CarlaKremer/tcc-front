import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import InputChat from "../InputChat";
function Chat({ socket, username, room }: any) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list): any => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessageList((list): any => [...list, data]);
    });
  }, [socket]);

  return (
    <Container>
      <>
        {/* <ScrollToBottom className="message-container"> */}
        {messageList.map((messageContent: any) => {
          return (
            <div
              className="msg-container"
              id={username === messageContent.author ? "you" : "other"}
            >
              <>
                <div className="user">
                  {/* <p id="time">{messageContent.time}</p> */}
                  <p id="author">{messageContent.author}:</p>
                </div>
                <div className="msg">
                  <p>{messageContent.message}</p>
                </div>
              </>
            </div>
          );
        })}
        {/* </ScrollToBottom> */}
      </>
      <div className="chat-footer">
        <div className="chat-input">
          <InputChat
            value={currentMessage}
            placeholder="Hey..."
            onChange={(e: any) => {
              setCurrentMessage(e);
            }}
            onKeyDown={(e: any) => {
              e.key === "Enter" && sendMessage();
            }}
          />
        </div>
        {/* <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        /> */}
        {/* <button onClick={sendMessage}>&#9658;</button> */}
      </div>
    </Container>
  );
}

export default Chat;
