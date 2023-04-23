import React from "react";
import Image from "next/image";
import Template from "../Template";
import Button from "@/components/Button";
import { Header, Main } from "./styles";
import CardStream from "@/components/CardStream";

export default function Home() {
  return (
    <Template>
      <Header>
        <div className="banner">
          <div className="search"></div>
        </div>
        <div className="btns">
          <Button title="Start studying">
            <Image
              src="/assets/icons/play.svg"
              width={70}
              height={70}
              alt="icone de play"
            />
          </Button>
          <Button title="User config">
            <Image
              src="/assets/icons/config.svg"
              width={70}
              height={70}
              alt="icone de play"
            />
          </Button>
        </div>
      </Header>
      <Main>
        <CardStream />
        <CardStream />
        <CardStream />
        <CardStream />
      </Main>
    </Template>
  );
}
