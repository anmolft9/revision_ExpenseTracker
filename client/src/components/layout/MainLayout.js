import React from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";

export const MainLayout = ({ children, isLoggedIn }) => {
  return (
    <div className="">
      <Header isLoggedIn={isLoggedIn} />
      <Container>{children}</Container>
    </div>
  );
};
