import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Image from "next/image";
import router from "next/router";

export default function Sidebar() {
  const [userLogged, setUserLogged] = useState<any>();
  async function handleIsLogged() {
    if (localStorage.getItem("user") != null) {
      const user: any = localStorage.getItem("user");
      setUserLogged(JSON.parse(user));
    }
  }
  useEffect(() => {
    handleIsLogged();
  }, [localStorage.getItem("user")]);
  function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/Home");
  }

  return (
    <Container>
      <Image
        className="user"
        src="/assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      {userLogged != null ? (
        <span className="name">{userLogged.userDto.name}</span>
      ) : (
        <span className="name">Logar</span>
      )}
      <Image
        className="fav"
        src="/assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      <span className="name">Favorito</span>
      <div className="logout">
        <button onClick={() => handleLogout()}>log out</button>
      </div>
    </Container>
  );
}
