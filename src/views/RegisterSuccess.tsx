import React, { useEffect } from "react";
import {
  Container,
  RegisterPage,
  Logo,
  Card,
  SuccessBlock,
  Header,
  Title,
  Subtitle,
} from "../components/Components";
import { RegisterStoreState } from "../store/types";

import success from "../common/image/success.gif";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const RegisterSuccess = () => {
  const history = useHistory();
  const registarData = useSelector((state: RegisterStoreState) => state);

  useEffect(() => {
    if (!registarData.email) {
      history.push("/");
    }
  }, []);

  return (
    <Container>
      <RegisterPage>
        <Logo>
          <img src={require("../common/image/logo.svg")} alt={""} />
        </Logo>

        <Card>
          <SuccessBlock>
            <Header>
              <Title>Parabéns {registarData.name}!!!</Title>
              <Subtitle>Seu cadastro foi realizado com sucesso!</Subtitle>
            </Header>

            <img width={350} src={success} alt="" />

            <Link to={"/"}>
              <Subtitle>Voltar</Subtitle>
            </Link>
          </SuccessBlock>
        </Card>
      </RegisterPage>
    </Container>
  );
};

export default RegisterSuccess;
