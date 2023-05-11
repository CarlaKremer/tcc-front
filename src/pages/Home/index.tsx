import React, { useEffect, useState } from "react";
import Image from "next/image";
import Template from "../Template";
import Button from "@/components/Button";
import { Header, Main, Container, ModalWrapper } from "./styles";
import CardStream from "@/components/CardStream";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Link from "next/link";
import api from "../../../service/api";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";

export default function Home() {
  useRouter;
  const [newSearch, setNewSearch] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("test@gmail.com");
  const [userPassword, setUserPassword] = useState<string>("test123");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [isOpenModalSignIn, setIsOpenModalSignIn] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  async function authenticateUser() {
    setError(false);
    setLoading(true);
    try {
      const raw = JSON.stringify({
        email: userEmail,
        password: userPassword,
      });

      const resp = await api.post("/login", raw);

      if (resp.status === 200) {
        localStorage.setItem("user", JSON.stringify(resp.data));
        sessionStorage.setItem("user", JSON.stringify(resp.data));
        setIsOpenModal(false);
        setIsOpenModalSignIn(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  async function createUser() {
    setError(false);
    setLoading(true);
    try {
      const raw = JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      const resp = await api.post("/user/create", raw);

      localStorage.setItem("user", JSON.stringify(resp.data));
      sessionStorage.setItem("user", JSON.stringify(resp.data));
      setIsOpenModal(false);
      setIsOpenModalSignIn(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    const sessionStorageUser = sessionStorage.getItem("user");
    sessionStorageUser != null ? setIsOpenModal(false) : setIsOpenModal(true);
  }, []);
  return (
    <Template
      isLoggedChanged={isOpenModal}
      isLoggedChangedSignUp={isOpenModalSignIn}
    >
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
          <Link href="/Stream">
            <CardStream />
          </Link>
          <CardStream />
          <CardStream />
          <CardStream />
        </Main>
      </Container>
      {/* Login */}
      <Modal isOpenModal={isOpenModal} setOpenModal={!isOpenModal}>
        {!loading ? (
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
              <p className="error" hidden={!error}>
                Ocorreu um erro, tente novamente
              </p>
            </div>
            <div className="footer">
              <button onClick={() => authenticateUser()}>Log in</button>
              <Link
                href={""}
                onClick={() => {
                  setIsOpenModal(false), setIsOpenModalSignIn(true);
                }}
              >
                <span>Create account</span>
              </Link>
            </div>
          </ModalWrapper>
        ) : (
          <Loading />
        )}
      </Modal>
      {/* Sign Up */}
      <Modal isOpenModal={isOpenModalSignIn} setOpenModal={!isOpenModalSignIn}>
        {!loading ? (
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
              <h1>Sign Up</h1>
              <Input
                className="input"
                placeholder="Name"
                onChange={(e: any) => {
                  setUserName(e);
                }}
                value={userName}
              >
                <Image
                  alt="ícone de usuário"
                  src={"/assets/icons/user-login.svg"}
                  width={20}
                  height={20}
                />
              </Input>
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
                  src={"/assets/icons/email.svg"}
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
              <p className="error" hidden={!error}>
                Ocorreu um erro, tente novamente
              </p>
            </div>
            <div className="footer">
              <button onClick={() => createUser()}>Sign Up</button>
              <Link
                href={""}
                onClick={() => {
                  setIsOpenModal(true), setIsOpenModalSignIn(false);
                }}
              >
                <span>Log in</span>
              </Link>
            </div>
          </ModalWrapper>
        ) : (
          <Loading />
        )}
      </Modal>
    </Template>
  );
}
