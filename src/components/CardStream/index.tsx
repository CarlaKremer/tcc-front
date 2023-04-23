import React from "react";

import { Container } from "./styles";
import Image from "next/image";

export default function CardStream() {
  return (
    <Container>
      <Image
        className="image"
        alt="pessoa estudando"
        src={"/assets/person-studying.jpg"}
        height={229}
        width={343}
      />
      <div className="row">
        <Image
          className="profile-img"
          alt="pessoa estudando"
          src={"/assets/person-studying.jpg"}
          height={53}
          width={53}
        />
        <div className="info">
          <p className="name">Matéria / tópico etc</p>
          <p className="name">Nome</p>
        </div>
      </div>
    </Container>
  );
}
