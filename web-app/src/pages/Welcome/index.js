import React from "react";

import { logout } from "../../services/auth";

import WelcomeIllustration from "../../assets/images/welcome.svg";

import { Container, Button } from "./styles";

const Welcome = (props) => {
  const userLogout = () => {
    props.history.push("/");
    logout();
  };

  return (
    <Container>
      <Button onClick={userLogout}>Sair</Button>
      <div>
        <img src={WelcomeIllustration} alt="bem vindo" />
        <h3>Bem vindx!</h3>
      </div>
    </Container>
  );
};

export default Welcome;
