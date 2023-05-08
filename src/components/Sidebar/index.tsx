import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Image from "next/image";
import router from "next/router";

export default function Sidebar(
  isLoggedChanged: any,
  isLoggedChangedSignUp: any
) {
  const [userLogged, setUserLogged] = useState<any>(null);

  function handleLogout() {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/Home");
    window.location.reload();
  }

  useEffect(() => {
    const sessionStorageUser = sessionStorage.getItem("user");
    if (sessionStorageUser != null) {
      setUserLogged(JSON.parse(sessionStorageUser));
    }
  }, [isLoggedChanged, isLoggedChangedSignUp]);

  return (
    <Container>
      <Image
        className="user"
        src="/assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      <span className="name">
        {userLogged?.userDto?.name || userLogged?.user?.name}
      </span>
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
