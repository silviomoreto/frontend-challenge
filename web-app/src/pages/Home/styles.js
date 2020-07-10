import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
    height: 80%;
    width: 40%;
  }

  img {
    margin-top: 60px;
    @media (min-width: 768px) {
      margin: 0;
      margin-bottom: 32px;
    }
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border: 0;
  background: ${(props) => (props.login ? "#4ADEDE" : "#1D2366")};
  border-radius: 50px;
  margin-bottom: ${(props) => (props.login ? "24px" : "")};

  font-family: "Fira Sans" sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.login ? "#22afaf" : "#0f1129")};
  }
`;
