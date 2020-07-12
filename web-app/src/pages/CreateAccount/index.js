import React, { Component } from "react";
import { createUser } from "sdk";

import ProgressBar from "../../components/ProgressBar";
import Input from "../../components/Input";

import Back from "../../assets/images/back.svg";

import { Container, Form, ButtonBox, Button } from "./styles";

class CreateAcount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      progress: 5,
      infoSteps: {
        name: "",
        age: "",
        email: "",
        newsletter: "",
      },
      error: "",
    };
  }

  back = () => {
    if (this.state.step === 1) {
      this.props.history.push("/");
    }
    if (this.state.step === 2) {
      this.setState({
        step: 1,
        progress: 5,
      });
    }
  };

  nextStep = async () => {
    const { name, age, email, newsletter } = this.state.infoSteps;
    if (this.state.step === 1) {
      if (!!name && !!age) {
        this.setState({
          step: 2,
          progress: 50,
        });
      } else {
        this.setState({
          error: "Preencha todos os campos.",
        });
      }
    }
    if (this.state.step === 2) {
      if (!!email && !!newsletter) {
        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const emailIsValid = regexEmail.test(email);
        if (emailIsValid) {
          localStorage.setItem("email", email);
          await createUser(this.state.infoSteps).then((res) => {
            if (res.token) {
              this.props.history.push("/sucesso");
            }
          });
        } else {
          this.setState({
            error: "E-mail invalido.",
          });
        }
      } else {
        this.setState({
          error: "Preencha todos os campos.",
        });
      }
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      infoSteps: {
        ...this.state.infoSteps,
        [name]: value,
      },
    });
  };

  render() {
    const { name, age, email, newsletter } = this.state.infoSteps;
    return (
      <Container>
        <ProgressBar progress={this.state.progress} />

        <h3>Cadastro</h3>

        {this.state.step === 1 ? (
          <Form>
            <Input
              form="true"
              label="Nome"
              type="text"
              id="name"
              value={name}
              handleInput={this.handleInput}
            />

            <Input
              form="true"
              label="Idade"
              type="number"
              id="age"
              value={age}
              handleInput={this.handleInput}
            />
          </Form>
        ) : (
          <Form>
            <Input
              form="true"
              label="E-mail"
              type="email"
              id="email"
              value={email}
              handleInput={this.handleInput}
            />
            <label>Newsletter</label>
            <select
              id="newsletter"
              name="newsletter"
              value={newsletter}
              onChange={this.handleInput}
            >
              <option disabled hidden value="">
                Escolha
              </option>
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
            </select>
          </Form>
        )}
        <p>{this.state.error}</p>
        <ButtonBox>
          <Button onClick={this.back}>
            <img src={Back} alt="voltar" />
            Voltar
          </Button>
          <Button type="button" continue="true" onClick={this.nextStep}>
            Continuar
          </Button>
        </ButtonBox>
      </Container>
    );
  }
}

export default CreateAcount;
