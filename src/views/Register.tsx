import React, { useState } from "react";
import Hello from "../components/Hello";
import {
  Container,
  RegisterPage,
  Card,
  Logo,
  Steps,
  Step,
  Divider,
} from "../components/Components";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <Container>
      <RegisterPage>
        <Logo>
          <img src={require("../common/image/logo.svg")} alt={""} />
        </Logo>

        <Steps>
          <Step active>1</Step>
          <Divider />
          <Step>2</Step>
        </Steps>

        <Card>
          {/* <Hello /> */}
          <form>
            <Header>
              <Title>Cadastro</Title>
              <Subtitle>Challenge</Subtitle>
            </Header>

            <GridForm>

            </GridForm>

            <Button>Avançar</Button>
          </form>
        </Card>
      </RegisterPage>
    </Container>
  );
};

export default Register;
