import React, { useState, FormEvent, ChangeEvent } from "react";
import { createUser } from "sdk";
import {
  Container,
  RegisterPage,
  Card,
  Logo,
  Steps,
  Circle,
  Step,
  Divider,
  Header,
  Title,
  Subtitle,
  GridForm,
  Button,
} from "../components/Components";
import Input from "../components/Input";
import { RegisterStoreState as User, NewsLetter } from "../store/types";
import Select from "../components/Select";
import { registerUser } from "../store/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const Register = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState<User>({
    name: "",
    age: 18,
    email: "",
    newsletter: "daily" as const,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (step === 1) {
      return setStep(2);
    }

    createUser(user as User).then((response: any) => {
      dispatch(registerUser(response.user as User));
      history.push("/success");
    });
  };

  return (
    <Container>
      <RegisterPage>
        <Logo>
          <img src={require("../common/image/logo.svg")} alt={""} />
        </Logo>

        <Steps>
          <Step>
            <Circle active={step >= 1}>1</Circle>
            <Subtitle>Dados</Subtitle>
          </Step>

          <Divider />

          <Step>
            <Circle active={step === 2}>2</Circle>
            <Subtitle>Email</Subtitle>
          </Step>
        </Steps>

        <Card>
          <form onSubmit={handleSubmit}>
            <Header>
              <Title>Cadastro</Title>
              <Subtitle>Challenge</Subtitle>
            </Header>

            <GridForm>
              {step === 1 && (
                <>
                  <Input
                    required
                    value={user.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setUser({ ...user, name: e.target.value })
                    }
                    label={"Nome"}
                  />

                  <Input
                    required
                    type={"number"}
                    value={user.age}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setUser({ ...user, age: Number(e.target.value) })
                    }
                    label={"Idade"}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <Input
                    required
                    type={"email"}
                    value={user.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    label={"Email"}
                  />

                  <Select
                    required
                    label={"News"}
                    value={user.newsletter}
                    onChange={(value: NewsLetter) =>
                      setUser({ ...user, newsletter: value })
                    }
                    options={[
                      { label: "Diariamente", value: "daily" },
                      { label: "Semanalmente", value: "weekly" },
                      { label: "Mensal", value: "monthly" },
                    ]}
                  />
                </>
              )}
            </GridForm>

            <Button>{step === 1 ? "Avançar" : "Finalizar"}</Button>
          </form>
        </Card>
      </RegisterPage>
    </Container>
  );
};

export default Register;
