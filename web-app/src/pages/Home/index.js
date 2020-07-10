import React from "react";

import Doctors from "../../assets/images/doctors.svg";

import { Container, Button } from "./styles";

const Home = () => (
  <Container>
    <img src={Doctors} alt="Médicos" />
    <div>
      <Button login to="/login">
        Login
      </Button>
      <Button to="/criar-conta">Criar conta</Button>
    </div>
  </Container>
);

export default Home;
