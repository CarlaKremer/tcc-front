import React from "react";
import { Container } from "./styles";
type Props = {
  children: JSX.Element;
  title: string;
};
export default function Button({ children, title }: Props) {
  return (
    <Container>
      {children}
      <p>{title}</p>
    </Container>
  );
}
