import React, { Component } from "react";

import { login } from "../../services/auth";

import Woman from "../../assets/images/woman.svg";
import Back from "../../assets/images/back.svg";

import { Container, Content, Button } from "./styles";

import Input from "../../components/Input";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: "os campos de email e senha devem ser preenchidos.",
      });
    } else {
      const user = {
        email: "maria@medway.com",
        password: "123",
      };
      if (email === user.email && password === user.password) {
        login("123token");
        this.props.history.push("/bem-vindo");
      } else {
        this.setState({
          error: "E-mail ou senha incorreto.",
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Button back onClick={() => this.props.history.push("/")}>
          <img src={Back} alt="voltar" />
        </Button>
        <Content>
          <img src={Woman} alt="médica" />
          <h3>Login</h3>
        </Content>
        <Content fields>
          <h2>Login</h2>
          <p>{this.state.error}</p>
          <Input
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            handleInput={(e) => this.setState({ email: e.target.value })}
          />

          <Input
            type="password"
            placeholder="Senha"
            value={this.state.password}
            handleInput={(e) => this.setState({ password: e.target.value })}
          />
          <Button type="button" onClick={this.handleSignIn}>
            Entrar
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Login;
