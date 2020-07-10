import React from "react";

import NotFoundIllustration from "../../assets/images/notFound.svg";
import Back from "../../assets/images/back.svg";

import { Container, Button } from "./styles";

const NotFound = () => (
  <Container>
    <div>
      <img src={NotFoundIllustration} alt="não encontrado" />
      <h3>Página não encontrada !</h3>
    </div>

    <Button to="/">
      <img src={Back} alt="voltar" />
      Home
    </Button>
  </Container>
);

export default NotFound;
