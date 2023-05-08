import React from "react";
import { Container, Main } from "./styles";
import { createGlobalStyle } from "styled-components";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({ weight: "500", preload: false });

const GlobalStyle = createGlobalStyle`
  body {
    background: #1A1922;
  }
`;
export default function Template({
  children,
  isLoggedChanged,
  isLoggedChangedSignUp,
}: any) {
  return (
    <Container className={poppins.className}>
      <Sidebar
        isLoggedChanged={isLoggedChanged}
        isLoggedChangedSignUp={isLoggedChangedSignUp}
      />
      <GlobalStyle />
      <Main>{children}</Main>
    </Container>
  );
}
