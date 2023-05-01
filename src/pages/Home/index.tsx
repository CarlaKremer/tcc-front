import React, { useState } from "react";
import Image from "next/image";
import Template from "../Template";
import Button from "@/components/Button";
import { Header, Main, Container } from "./styles";
import CardStream from "@/components/CardStream";
import Input from "@/components/Input";

export default function Home() {
  const [newSearch, setNewSearch] = useState("");
  return (
    <Template>
      <Container>
        <Header>
          <div className="banner">
            <Input
              placeholder="Search"
              onChange={(e: any) => {
                setNewSearch(e);
              }}
              value={newSearch}
              width="50%"
            >
              <Image
                alt="ícone lupa"
                src={"/assets/icons/search.svg"}
                width={20}
                height={20}
              />
            </Input>
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
      </Container>
    </Template>
  );
}
