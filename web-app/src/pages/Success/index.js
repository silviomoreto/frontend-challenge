import React, { Component } from "react";

import ProgressBar from "../../components/ProgressBar";

import { Container, Button } from "./styles";

import SuccessIllustration from "../../assets/images/sucesso.svg";
import Back from "../../assets/images/back.svg";

class Success extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const email = localStorage.getItem("email");
    this.setState({
      email: email,
    });
  }
  render() {
    return (
      <Container>
        <ProgressBar progress="100" />

        <img src={SuccessIllustration} alt="Sucesso" />
        <h3>Sucesso!</h3>

        <p>
          As credencias para login foram encaminhadas para o seu email
          {` ${this.state.email}`}.
        </p>

        <Button to="/">
          <img src={Back} alt="voltar" />
          Home
        </Button>
      </Container>
    );
  }
}

export default Success;
