import React, { useEffect, useState } from "react";

import { Container, Video, Chat, Profile } from "./styles";
import Template from "../Template";
import Image from "next/image";
import VideoJS from "@/components/VideoJS";
import ChatApi from "@/components/ChatApi";
import * as io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
export default function Stream() {
  const [userLogged, setUserLogged] = useState<any>(null);

  const [username, setUsername] = useState(userLogged?.userDto?.name);
  const [room, setRoom] = useState("1");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    socket.emit("join_room", room);
    setShowChat(true);
  };

  const videoJsOptions = {
    fill: true,
    fluid: true,
    autoplay: false,
    controls: true,
    preload: "metadata",
    sources: [
      {
        src: "http://localhost:8000/live/test/index.mpd",
        type: "application/dash+xml",
      },
    ],
  };

  useEffect(() => {
    joinRoom();
  }, []);
  useEffect(() => {
    const sessionStorageUser = localStorage.getItem("user");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
      setUsername(userLogged?.userDto?.name);
    }
  }, [socket, showChat]);

  return (
    <Template>
      <Container>
        <div className="row">
          <Video>
            <VideoJS {...videoJsOptions} />
          </Video>
          <Chat>
            {!showChat ? (
              <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <button onClick={joinRoom}>Join A Room</button>
              </div>
            ) : (
              <ChatApi
                socket={socket}
                username={userLogged?.userDto?.name || userLogged?.user?.name}
                room={room}
              />
            )}
          </Chat>
        </div>
        <Profile>
          <div className="name">
            <Image
              className="profile-img"
              alt="pessoa estudando"
              src={"/assets/person-studying.jpg"}
              height={60}
              width={60}
            />
            <p>Nome do Streamer</p>
          </div>
          <div className="about">
            <div className="about-user">
              <p>Sobre:</p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="focus">
              <p>Foco:</p>
              <p>Universidade</p>
            </div>
          </div>
        </Profile>
      </Container>
    </Template>
  );
}
