import React from "react";
import { Container } from "./styles";
import Image from "next/image";

export default function Sidebar() {
  return (
    <Container>
      <Image
        className="user"
        src="/assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      <Image
        className="fav"
        src="/assets/icons/user.svg"
        width={32}
        height={32}
        alt="ícone de usuário"
      />
      <span className="name">Favorito</span>
    </Container>
  );
}
