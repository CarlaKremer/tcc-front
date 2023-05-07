import React, { useEffect, useState } from "react";
import Image from "next/image";
import Template from "../Template";
import Button from "@/components/Button";
import { Header, Main, Container, ModalWrapper } from "./styles";
import CardStream from "@/components/CardStream";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Link from "next/link";

export default function Home() {
  const [newSearch, setNewSearch] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("test@gmail.com");
  const [userPassword, setUserPassword] = useState<string>("test123");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  async function handleitsLogged() {
    return localStorage.getItem("user") != null
      ? setIsOpenModal(false)
      : setIsOpenModal(true);
  }
  function authenticateUser() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: userEmail,
      password: userPassword,
    });

    const requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3002/login", requestOptions)
      .then((response) => response.text())
      .then((response) => {
        localStorage.setItem("user", response),
          sessionStorage.setItem("user", response);
      })
      .then((response) => {
        console.log("response", response);
      })
      .then(() => setIsOpenModal(false))
      .catch((error) => console.log("error", error));
  }
  useEffect(() => {
    handleitsLogged();
  }, []);
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
          {/* 
            // TODO: esses cards tão estranhos tem arrumar
            */}
          <CardStream />
          <CardStream />
          <CardStream />
          <CardStream />
        </Main>
      </Container>
      <Modal isOpenModal={isOpenModal} setOpenModal={!isOpenModal}>
        <ModalWrapper>
          <div className="header">
            <button
              onClick={() => setIsOpenModal(false)}
              data-testid="close-edit-nps"
            >
              <Image
                src="/assets/icons/X.svg"
                alt="ícone de fechar"
                width={20}
                height={20}
              />
            </button>
          </div>
          <div className="body">
            <h1>Login</h1>
            <Input
              className="input"
              placeholder="E-mail"
              onChange={(e: any) => {
                setUserEmail(e);
              }}
              value={userEmail}
            >
              <Image
                alt="ícone de usuário"
                src={"/assets/icons/user-login.svg"}
                width={20}
                height={20}
              />
            </Input>
            <Input
              type="password"
              className="input"
              placeholder="Password"
              onChange={(e: any) => {
                setUserPassword(e);
              }}
              value={userPassword}
            >
              <Image
                alt="ícone de chave"
                src={"/assets/icons/password.svg"}
                width={20}
                height={20}
              />
            </Input>
          </div>
          <div className="footer">
            <button onClick={() => authenticateUser()}>Log in</button>
            <Link href={""}>
              <span>Create account</span>
            </Link>
          </div>
        </ModalWrapper>
      </Modal>
    </Template>
  );
}
