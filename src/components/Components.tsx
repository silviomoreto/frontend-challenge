import styled, { css } from "styled-components";

const primaryColor = "#0f0d6d";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

export const RegisterPage = styled.div`
  display: grid;
  align-items: center;
  align-content: start;
  padding: 145px 0;
  justify-items: center;
`;

export const Card = styled.div`
  width: 485px;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;

  form {
    padding: 38px 65px 50px 65px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 66px;

  img {
    color: ${primaryColor};
  }
`;

export const Steps = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 0 3px;
  flex: 1;
  background-color: #707070;
`;

export const Step = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: #fff;
  border: solid 1px #707070;

  ${(props) =>
    props.active &&
    css`
      background-color: ${primaryColor};
      color: #fff;
      border: none;
    `}
`;

export const Title = styled.h1<{ active: boolean }>`
  color: ${(props) => (props.active ? "red" : "blue")};
`;
