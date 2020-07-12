import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 32px 24px;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
  }

  h3 {
    font-family: "Fira Sans";
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    margin-top: 32px;
  }
`;

export const Button = styled(Link)`
  align-self: flex-start;
  height: 48px;
  background: transparent;
  border: 0;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  @media (min-width: 768px) {
    display: none;
  }
  img {
    margin-right: 10px;
  }
`;
