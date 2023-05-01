import React, { useState } from "react";

import { Container, Video, Chat, Profile } from "./styles";
import Template from "../Template";
import InputChat from "@/components/InputChat";
import Image from "next/image";

export default function Stream() {
  const [newMsg, setNewMsg] = useState("");
  return (
    <Template>
      <Container>
        <div className="row">
          <Video>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/3AT3ofGTVaA`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Video>
          <Chat>
            <div className="chat-input">
              <InputChat
                placeholder="Type"
                onChange={(e: any) => {
                  setNewMsg(e);
                }}
                value={newMsg}
              />
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
            <div className="msg-container">
              <span className="user">fulado de tal:</span>
              <span className="msg">loren</span>
            </div>
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
